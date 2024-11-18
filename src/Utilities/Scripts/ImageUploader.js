function ImageUploader(img) {
   const imageURl = new URL(`../../assets/${img}`, import.meta.url).href;
   return imageURl;
}

export default ImageUploader