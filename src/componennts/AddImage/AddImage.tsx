import React from 'react';
import './AddImage.css';
import Divide from '../genericComponennts/Divide/Divide';
import CustomInput from '../genericComponennts/CustomInput/CustomInput';
import CustomButton from '../genericComponennts/CustomButton/CustomButton';
import { useTranslation } from 'react-i18next';
import DropDragFiles from '../DropDragFiles/DropDdragFiles';
import imageService from '../../services/ImageService';
import imageStore, { Image } from '../../stores/ImageStore';

function AddImage(props:any) {

  const onSubmitAddImage = async() => {
    debugger;
    imageStore.toggleAddImagePopUp()
    await imageService.addImage(imageStore.newImage);
    const allImg = await imageService.getAllDuckImages(0,1000);
    imageStore.replaseImagesArray(allImg);
    console.log(allImg)

  }
  const onInputNameFile = (event:any) => {
    imageStore.newImage.name = event.target.value;
  }

  const closePopUp = () => {
    imageStore.toggleAddImagePopUp()
  }
  const { t } = useTranslation()
  return (
      <div className='add-image-container'>
        <div className='first-row'>
          <h2 className='haeder-text'>{t('AddImg.Header')}</h2>
          <p className='x-button' onClick={closePopUp}>X</p>
        </div>
        <Divide width={'100%'}/>
        <div className='image-detail-container'>
            <div style={{width:'90%',margin:'auto'}}>
                <input type="text"  placeholder='Name' className='name-image' onChange={onInputNameFile}/>
            </div>
              <DropDragFiles />
              <div className='button-container'>
                  <CustomButton text={t('AddImg.Cancel')} backroundcolor={'white'} color={'#AAAAAA'} border={'#AAAAAA 1px solid'} width={'45%'} func={closePopUp}/>
                  <CustomButton text={t('AddImg.Save')} backroundcolor={'#FC8D4F'}width={'45%'} func={onSubmitAddImage}/>
              </div>
        </div>
      </div>
  )
}
export default AddImage;