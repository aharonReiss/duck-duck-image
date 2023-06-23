import { useEffect, useState } from 'react';
import './DropDragFiles.css';
import ImageStore from '../../stores/ImageStore';

function DropDragFiles(props:any) {
    
    const [files,setFiles] = useState(null)
    useEffect(() => {
        console.log(files)
    },[files])
    const handleDragOver = (event:any) => {
       event.preventDefault()
    }
    const handleDrop = (event:any) => {
        event.preventDefault()
        let idCardBase64 : any = '';
        getBase64(event.dataTransfer.files[0], (result: any) => {
            idCardBase64 = result;
            console.log(idCardBase64)
            debugger;
            ImageStore.newImage.image = idCardBase64;
            setFiles(idCardBase64);
        });
        
    }

    const getBase64 = (file:any, cb:any) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
    return (
       <>
       {!files && (
        <div className='dropzone'
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        >
             <img src="./img/uplaodFileImg.svg" alt="" />
            <p>Drog & Drop or</p><p>Browse</p>
        </div>
       )
       }
       </>
    )
}
export default DropDragFiles;