import DuckDuckStorage from "../utils/DuckDuckStorage";
import BaseHTTPService from "./BaseHTTPService";

class ImageService extends BaseHTTPService{
    addImage(image:any){
        debugger;
        const body = {
            image_name: image.name,
            image_base64: image.image
        }
        //const params = `duck_image_name=${image.imgName}&duck_image_base64=${image.imgBase64}`
        const token = DuckDuckStorage.getToken();
        const header = this.getTokenAsHeader(token);
        debugger;
        return this.httpPost(`/duck/add-duck-image`,body,header).then((response) => {
            return response.data;
        })
    }
    
    getAllDuckImages(offset:any,limit:any){
        const token = DuckDuckStorage.getToken();
        const header = this.getTokenAsHeader(token);
        return this.httpGet(`/duck/get-all-duck-images?offset=${offset}&limit=${limit}`,header).then((response) => {
            return response.data;
        })
    }

    getImageById(imageId: string){
        const token = DuckDuckStorage.getToken();
        const header = this.getTokenAsHeader(token);
        return this.httpGet(`/duck/get-duck-image/${imageId}`,header).then((response) => {
            return response.data;
        })
    }

    deleteImage(imageId:string){
        debugger;
        try
        {
            const token = DuckDuckStorage.getToken();
            const header = this.getTokenAsHeader(token);
            return this.httpDelete(`/duck/delete-duck-image/${imageId}`,header).then((response) => {
                return response.data;
                
            })
        }catch(ex:any){
            debugger
            console.log(ex)
        }
    }
}
const imageService = new ImageService(process.env['REACT_APP_BACK_URL'])
export default imageService;