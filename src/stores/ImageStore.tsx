import { makeAutoObservable } from "mobx";

export interface Image{
    name: string,
    image: string,
    _id?: string,
    random_access_code? : string,
    openManageImg? : boolean
    short_url?: string
}

const addImage = (images:Image[],image:Image):Image[] => [
    ...images,
    {
        image: image.image,
        name: image.name
    }
]
class ImageStore{
    images:Image[] = [];
    newImage:Image = { image:'',name:''};
    isPopupAddImgOpen: boolean = false;

    constructor() {
        makeAutoObservable(this)
    }
    
    addImage(image:Image){
        this.images = addImage(this.images,image);
    }
    toggleAddImagePopUp(){
        this.isPopupAddImgOpen = !this.isPopupAddImgOpen;
    }
    toggleManageImg(index:number){
        this.images[index].openManageImg =  !this.images[index].openManageImg;
    }
    replaseImagesArray(images: any){
        debugger
        console.log(images.duck_images)
        this.images = images.duck_images;
        console.log(this.images)
    }
}

const imageStore = new ImageStore();
export default imageStore;