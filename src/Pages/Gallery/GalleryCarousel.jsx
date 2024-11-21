import Slider from "react-slick"
import ImageUploader from "../../Utilities/Scripts/ImageUploader.js";

function GalleryCarousel({side,data,cards}){
    const settings = {
        slidesToShow: cards,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        rtl: side
      };
  return (
    <>
        <section className="slider-container">
        <Slider {...settings} className="slider-container">
                {
                    data?.map(( {id, images})=>
                        <figure key={id} className="aspect-2 aspect-w-5">
                <img className="w-full h-full object-cover" src={ImageUploader(images)} alt="" />
            </figure>
                    )
                }
        </Slider>
        </section>
    </>
  )
}

export default GalleryCarousel