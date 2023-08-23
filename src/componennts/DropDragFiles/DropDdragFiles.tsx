import { useEffect, useState } from 'react';
import './DropDragFiles.css';
import ImageStore from '../../stores/ImageStore';

function DropDragFiles(props:any) {
    
    const [files,setFiles] = useState(null)
    useEffect(() => {
        setFiles(null)
    },[])
    const handleDragOver = (event:any) => {
       event.preventDefault()
    }
    const onUploadFile = (event:any) => {
        event.preventDefault()
        let idCardBase64 : any = '';
        console.log(event.target.files[0])
        getBase64(event.target.files[0], (result: any) => {
            idCardBase64 = result;
            console.log(idCardBase64)
            debugger;
            ImageStore.newImage.image = idCardBase64;
            setFiles(idCardBase64);
        });
    }
    const handleDrop = (event:any) => {
        event.preventDefault()
        let idCardBase64 : any = '';
        console.log(event)
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
            <img src={`${process.env.PUBLIC_URL}/img/uplaodFileImg.svg`} alt="" />
            <p>Drog & Drop or
                <label className="custom-file-upload">
                    <input type="file" onChange={(e) => {onUploadFile(e)}}/>
                    Browse
                </label></p>
        </div>
       )
       }
       </>
    )
}
export default DropDragFiles;