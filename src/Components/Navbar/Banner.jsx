import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import droneVideo from "../../assets/bannerAssets/OverTheHorizon.mp4" 
import marineVideo from "../../assets/bannerAssets/marineLife.mp4" 
import coupleWood from "../../assets/bannerAssets/coupleInWoodsss.mp4" 
import treatUrSelf from "../../assets/bannerAssets/treatYourSelf.mp4" 
import smallSpring from "../../assets/bannerAssets/smallSpring.mp4" 
import skyDiving from "../../assets/bannerAssets/skydiveportugal.jpeg" 
import scoobaDiving from "../../assets/bannerAssets/scoobadiving.jpg" 

function Banner() {
  return (
    <>
        <section className="lg:h-[80vh] md:h-[50vh] h-[40vh] bg-slate-500 w-full mx-auto">
            <section className="h-screen">
                <section className="h-screen">
                            <PauseOnHover/>
                </section>
            </section>
        </section>
    </>
  )
}

function PauseOnHover() {
  const settings = {
    dots: true,
    Infinity:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };
  return (
    <section className="slider-container lg:h-[80vh] md:h-[50vh] h-[40vh]">
      <Slider {...settings}>
        <CardFive/>
        <CardTwo/>
        <CardFour/>
        <CardSeven/>
        <CardSix/>
        <CardOne/>
        <CardThree/>
        
        
      </Slider>
    </section>
  );
}

function CardOne (){
  return (
    <section className="lg:h-[81vh] md:h-[50vh] h-[40vh] w-full relative overflow-hidden">
          <video autoPlay loop muted className="h-full w-full object-cover">
            <source src={droneVideo} type="video/mp4" />
          </video>
          <section className="fixed lg:top-1/3 md:top-1/4 top-7 z-20 ml-6">
          <h1 className="lg:text-5xl md:text-3xl text-xl font-semibold  text-white lg:my-3 my-2">Forest Wellness Retreat</h1>
          <q className="block w-5/12 lg:mb-5 mb-2 lg:text-xl  md:text-lg text-sm text-yellow-200 italic tracking-wider">In the heart of the forest, find the peace within yourself</q>
          <p className="mt-4 mb-6 lg:w-6/12 w-4/12 lg:text-lg text-[12px] text-white tracking-wide">Reconnect with nature, rejuvenate your spirit, and discover tranquility at our Forest Wellness Retreat.</p>
          <a href="#cards" className="text-lg lg:px-6 px-5  lg:py-3 py-2 rounded-s-full rounded-e-full text-white  border-white lg:border-[2px] border-[1px] tracking-wider lg:text-xl text-[10px]">Explore More</a>
          </section>
        </section>
  )
}
function CardSeven (){
  return (
    <section className="lg:h-[81vh] md:h-[50vh] h-[40vh] w-full relative overflow-hidden">
          <video autoPlay loop muted className="h-full w-full object-cover">
            <source src={treatUrSelf} type="video/mp4" />
          </video>
          <section className="fixed lg:top-1/3 md:top-1/4 top-7 z-20 ml-6">
          <h1 className="lg:text-5xl md:text-3xl text-xl font-semibold  text-white lg:my-3 my-2">Treat in Wild</h1>
          <q className="block w-5/12 lg:mb-5 mb-2 lg:text-xl  md:text-lg text-sm text-yellow-200 italic tracking-wider">Indulge in the wild, where nature’s beauty and serenity become the ultimate treat for your soul.</q>
          <p className="mt-4 mb-6 lg:w-6/12 w-4/12 lg:text-lg text-[12px] text-white tracking-wide">Step into the wild, savor its untouched beauty, and let the harmony of nature rejuvenate your spirit and senses.</p>
          <a href="#cards" className="text-lg lg:px-6 px-5  lg:py-3 py-2 rounded-s-full rounded-e-full text-white  border-white lg:border-[2px] border-[1px] tracking-wider lg:text-xl text-[10px]">Explore More</a>
          </section>
        </section>
  )
}



function CardTwo (){
  return (
    <section className="lg:h-[81vh] md:h-[50vh] h-[40vh] w-full relative overflow-hidden">
          <figure className="lg:h-[81vh] md:h-[50vh] h-[40vh] w-full relative overflow-hidden">
            <img className="h-full w-full object-cover" src={scoobaDiving} alt="" />
          </figure>
          <section className="fixed top-0 bottom-2 left-0 right-0 bg-black/35 lg:h-[81vh] h-[80vh]"></section>
          <section className="fixed lg:top-1/3 md:top-1/4 top-7 z-20 ml-6">
          <h1 className="lg:text-5xl md:text-3xl text-xl font-semibold  text-white lg:my-3 my-2">Scuba Diving</h1>
          <q className="block w-5/12 lg:mb-5 mb-2 lg:text-xl  md:text-lg text-sm text-yellow-200 italic tracking-wider">Descend into the deep, where every bubble tells a story and every dive reveals a hidden masterpiece</q>
          <p className="mt-4 mb-6 lg:w-6/12 w-4/12 lg:text-lg text-[12px] text-white tracking-wide">Explore the ocean’s depths, uncover vibrant marine wonders, and feel the thrill of scuba diving—an adventure like no other</p>
          <a href="#cards" className="text-lg lg:px-6 px-5  lg:py-3 py-2 rounded-s-full rounded-e-full text-white  border-white lg:border-[2px] border-[1px] tracking-wider lg:text-xl text-[10px]">Explore More</a>
          </section>
        </section>
  )
}
function CardFour (){
  return (
    <section className="lg:h-[81vh] md:h-[50vh] h-[40vh] w-full relative overflow-hidden">
          <figure className="lg:h-[81vh] md:h-[50vh] h-[40vh] w-full relative overflow-hidden">
            <img className="h-full w-full object-cover" src={skyDiving} alt="" />
          </figure>
          <section className="fixed lg:top-1/3 md:top-1/4 top-7 z-20 ml-6">
          <h1 className="lg:text-5xl md:text-3xl text-xl font-semibold  text-white lg:my-3 my-2">Sky Diving</h1>
          <q className="block w-5/12 lg:mb-5 mb-2 lg:text-xl  md:text-lg text-sm text-yellow-200 italic tracking-wider">Feel the freedom of the skies—where limits fade, and the thrill of flight becomes your greatest adventure</q>
          <p className="mt-4 mb-6 lg:w-6/12 w-4/12 lg:text-lg text-[12px] text-white tracking-wide">Leap into the sky, embrace the adrenaline, and experience the ultimate rush of freedom with a breathtaking skydiving adventure!</p>
          <a href="#cards" className="text-lg lg:px-6 px-5  lg:py-3 py-2 rounded-s-full rounded-e-full text-white  border-white lg:border-[2px] border-[1px] tracking-wider lg:text-xl text-[10px]">Explore More</a>
          </section>
        </section>
  )
}

function CardThree(){
  return (
    <section className="lg:h-[81vh] md:h-[50vh] h-[40vh] w-full relative">
          <video autoPlay loop muted className="h-full w-full object-cover">
            <source src={marineVideo} type="video/mp4" />
          </video>
          <section className="fixed lg:top-1/3 md:top-1/4 top-7 z-20 ml-6 py-5">
          <h1 className="lg:text-5xl md:text-3xl text-xl font-semibold  text-white lg:my-3 my-2">Coral Reef Snorkeling</h1>
          <q className="block w-10/12 lg:mb-5 mb-2 lg:text-xl  md:text-lg text-sm text-yellow-200 italic tracking-wider">Dive beneath the waves and uncover a world of wonder</q>
          <p className="mt-4 mb-6 whitespace-pre-wrap lg:w-6/12 w-5/12 lg:text-lg text-[12px] text-white lg:tracking-wide">Embark on a breathtaking journey into crystal-clear waters.</p>
          <a href="#cards" className="text-lg lg:px-6 px-5  lg:py-3 py-2 rounded-s-full rounded-e-full text-white border-white lg:border-[2px] border-[1px] tracking-wider lg:text-xl text-[10px]">Explore More</a>
          </section>
        </section>
  )
}

function CardFive(){
  return (
    <section className="lg:h-[81vh] md:h-[50vh] h-[40vh] w-full relative">
          <video autoPlay loop muted className="h-full w-full object-cover">
            <source src={coupleWood} type="video/mp4" />
          </video>
          <section className="fixed lg:top-1/3 md:top-1/4 top-7 z-20 ml-6 py-5">
          <h1 className="lg:text-5xl md:text-3xl text-xl font-semibold  text-white lg:my-3 my-2">Lost in Woods</h1>
          <q className="block lg:w-10/12 w-5/12 lg:mb-5 mb-2 lg:text-xl  md:text-lg text-sm text-yellow-200 italic tracking-wider">Venture deep into the woods, where every step leads to serenity and every trail whispers secrets of nature</q>
          <p className="mt-4 mb-6 whitespace-pre-wrap lg:w-6/12 w-5/12 lg:text-lg text-[12px] text-white lg:tracking-wide">Escape the ordinary, wander deep into lush forests, and discover a world of peace, adventure, and natural beauty awaiting you</p>
          <a href="#cards" className="text-lg lg:px-6 px-5  lg:py-3 py-2 rounded-s-full rounded-e-full text-white border-white lg:border-[2px] border-[1px] tracking-wider lg:text-xl text-[10px]">Explore More</a>
          </section>
        </section>
  )
}
function CardSix(){
  return (
    <section className="lg:h-[81vh] md:h-[50vh] h-[40vh] w-full relative">
          <video autoPlay loop muted className="h-full w-full object-cover">
            <source src={smallSpring} type="video/mp4" />
          </video>
          <section className="fixed lg:top-1/3 md:top-1/4 top-7 z-20 ml-6 py-5">
          <h1 className="lg:text-5xl md:text-3xl text-xl font-semibold  text-white lg:my-3 my-2">Mountain Waterfall Trail</h1>
          <q className="block lg:w-10/12 w-5/12 lg:mb-5 mb-2 lg:text-xl  md:text-lg text-sm text-yellow-200 italic tracking-wider">Chase the mist, hear the roar, and let the mountain waterfall trail lead you to nature’s purest marvels.</q>
          <p className="mt-4 mb-6 whitespace-pre-wrap lg:w-6/12 w-5/12 lg:text-lg text-[12px] text-white lg:tracking-wide">Follow the trail, embrace the adventure, and find serenity in cascading waters and breathtaking mountain views—nature’s ultimate escape.</p>
          <a href="#cards" className="text-lg lg:px-6 px-5  lg:py-3 py-2 rounded-s-full rounded-e-full text-white border-white lg:border-[2px] border-[1px] tracking-wider lg:text-xl text-[10px]">Explore More</a>
          </section>
        </section>
  )
}

export default Banner