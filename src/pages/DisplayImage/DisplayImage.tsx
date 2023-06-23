import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DisplayImage.css'
import imageService from '../../services/ImageService';


const DisplayImage = () => {
    const params = useParams()
    const [img,setImg] = useState(null)
    useEffect(() =>{
        async function getImageById() {
        debugger
        console.log(params.id)
        const res = await imageService.getImageById(params.id ? params.id : '')
        if(res && !img){
            setImg(res.image)
        }
        debugger
        }
        getImageById()
    })

  return (
    <div className='image-dispaly-container'>
       {img ? <img src={img} alt="" /> : <div>sdvsvdssds</div>}
    </div>
  );
}

export default DisplayImage;