import React from 'react';
import './ListImages.css';
import { useTranslation } from 'react-i18next';
import imageStore, { Image } from '../../stores/ImageStore';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import imageService from '../../services/ImageService';
import { useNavigate } from "react-router-dom";


const ListImages = observer((props:any) => {
  const navigate = useNavigate();
    const { t } = useTranslation()
    const images = toJS(imageStore.images);

    const onClickCopyUrl = (index:number) => {
      const img = imageStore.images[index];
      if(img){
        navigator.clipboard.writeText(img.short_url ? img.short_url : '')
      }
    }

    const onClickViewImg = (index:number) => {
      const img = imageStore.images[index];
      if(img){
        window.open(img.short_url, '_blank')
      }
    }
    const toggleManageImage = (index:number) => {
      imageStore.toggleManageImg(index)
    }
    const deleteImg = async (index:number) => {
        const img = imageStore.images[index];
        if(img){
          await imageService.deleteImage(img._id ? img._id : '')
        }
        const allImg = await imageService.getAllDuckImages(0,100);
        debugger;
        if(allImg){
          imageStore.replaseImagesArray(allImg);
        }
    }
    return (
        <div className='list-images-container'>
            {images && images.map((item:Image,index) => {
                return (
                <div className='img-item' style={{backgroundImage: `url('${item.image}')`}}>
                <div className='manageImg-container' onClick={() => toggleManageImage(index)}>
                  <div className='manageImg'>
                    <img src="/img/manageImg.svg" alt="" />
                  </div>
                  {item.openManageImg &&<div className='listmanageImg'>
                       <div className='action-container'>
                          <div onClick={()=> onClickViewImg(index)}>
                            <p className='text-action'>
                            {t('ListImages.View')}
                            </p>
                          </div>
                          <div className='img-action'>
                                <img src="/img/copyImg.svg" alt="" className='img-15px'/>
                          </div>
                       </div> 
                       <div className='action-container' onClick={() => onClickCopyUrl(index)}>
                          <div>
                            <p className='text-action'>
                            {t('ListImages.CopyUrl')}
                            </p>
                          </div>
                          <div className='img-action'>
                                <img src="/img/copyUrlImg.svg" alt="" className='img-18px'/>
                          </div>
                       </div> 
                       <div className='action-container' onClick={() => deleteImg(index)}>
                          <div>
                            <p className='text-action color-red'>
                            {t('ListImages.Delete')}
                            </p>
                          </div>
                          <div className='img-action'>
                                <img src="/img/deleteImg.svg" alt="" className='img-18px'/>
                          </div>
                       </div>  
                  </div>}
                </div>

                </div>
            )})}
        </div>
    )
})
export default ListImages;