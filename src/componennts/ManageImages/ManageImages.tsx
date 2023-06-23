import React from 'react';
import './ManageImages.css';
import CustomButton from '../genericComponennts/CustomButton/CustomButton';
import CustomInput from '../genericComponennts/CustomInput/CustomInput';
import { useTranslation } from 'react-i18next';
import ImageStore from '../../stores/ImageStore';

function ManageImages(props:any) {
    const openPopUpImage = () => {
        ImageStore.toggleAddImagePopUp()
    }
    const { t } = useTranslation()
    const onChangInput = (e:any) => {
        console.log(e.target.value)
    }
    return (
       <div className='manage-images-container'>
          <CustomButton text={t('Home.AddImg')} backroundcolor={'#FC8D4F'} func={openPopUpImage}/>
          <CustomInput type={'text'} placeholder={'search'} width={'342px'} onChangeInput={onChangInput}/>
       </div>
    )
}
export default ManageImages