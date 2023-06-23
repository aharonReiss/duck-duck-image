import React, { useEffect } from 'react';
import './Home.css'
import Header from '../../componennts/Header/Header';
import ManageImages from '../../componennts/ManageImages/ManageImages';
import Divide from '../../componennts/genericComponennts/Divide/Divide';
import AddImage from '../../componennts/AddImage/AddImage';
import ImageStore from '../../stores/ImageStore';
import { observer } from 'mobx-react';
import ListImages from '../../componennts/ListImages/ListImages';
import imageService from '../../services/ImageService';
import imageStore from '../../stores/ImageStore';


const HomePage = observer(() => {
  useEffect (() => {
    async function getImages() {
      const allImg = await imageService.getAllDuckImages(0,1000);
      imageStore.replaseImagesArray(allImg);
    }
    getImages();
  })
  return (
    <>
    <div className={`HomeContainer ${ImageStore.isPopupAddImgOpen ? 'disabled-screen' : ''}`}>
       <Header />
       <ManageImages />
       <Divide />
       <ListImages />
    </div>
    {ImageStore.isPopupAddImgOpen && <AddImage /> }
    </>
  );
})

export default HomePage;