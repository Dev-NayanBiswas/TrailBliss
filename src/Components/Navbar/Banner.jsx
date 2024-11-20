import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import droneVideo from "../../assets/bannerAssets/overH.mp4";
import marineVideo from "../../assets/bannerAssets/marineLife.mp4";
import coupleWood from "../../assets/bannerAssets/cauple.mp4";
import treatUrSelf from "../../assets/bannerAssets/treat.mp4";
import smallSpring from "../../assets/bannerAssets/springFlow.mp4";
import skyDiving from "../../assets/bannerAssets/skydiveportugal.jpeg";
import scoobaDiving from "../../assets/bannerAssets/scoobadiving.jpg";


function Card({ title, quote, description, media, isVideo }) {
  return (
    <section className="lg:h-[81vh] md:h-[50vh] h-[40vh] w-full relative overflow-hidden">
      {isVideo ? (
        <video autoPlay loop muted className="h-full w-full object-cover">
          <source src={media} type="video/mp4" />
        </video>
      ) : (
        <figure className="h-full w-full">
          <img className="h-full w-full object-cover" src={media} alt={title} />
        </figure>
      )}
      <section className="fixed lg:top-1/3 md:top-1/4 top-7 z-20 ml-6">
        <h1 className="lg:text-5xl md:text-3xl text-xl font-semibold text-white lg:my-3 my-2">
          {title}
        </h1>
        <q className="block lg:w-10/12 w-5/12 lg:mb-5 mb-2 lg:text-xl md:text-lg text-sm text-yellow-200 italic tracking-wider">
          {quote}
        </q>
        <p className="mt-4 mb-6 lg:w-6/12 w-5/12 lg:text-lg text-[12px] text-white tracking-wide">
          {description}
        </p>
        <a
          href="#cards"
          className="text-lg lg:px-6 px-5 lg:py-3 py-2 rounded-s-full rounded-e-full text-white border-white lg:border-[2px] border-[1px] tracking-wider lg:text-xl text-[10px]"
        >
          Explore More
        </a>
      </section>
      <div className="absolute top-0 h-full w-full bg-black/45 "></div>
    </section>
  );
}


function PauseOnHover() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  const cardData = [
    {
      title: "Forest Wellness Retreat",
      quote: "In the heart of the forest, find the peace within yourself",
      description: "Reconnect with nature, rejuvenate your spirit, and discover tranquility at our Forest Wellness Retreat.",
      media: droneVideo,
      isVideo: true,
    },
    {
      title: "Treat in Wild",
      quote: "Indulge in the wild, where nature’s beauty and serenity become the ultimate treat for your soul.",
      description: "Step into the wild, savor its untouched beauty, and let the harmony of nature rejuvenate your spirit and senses.",
      media: treatUrSelf,
      isVideo: true,
    },
    {
      title: "Scuba Diving",
      quote: "Descend into the deep, where every bubble tells a story and every dive reveals a hidden masterpiece.",
      description: "Explore the ocean’s depths, uncover vibrant marine wonders, and feel the thrill of scuba diving—an adventure like no other.",
      media: scoobaDiving,
      isVideo: false,
    },
    {
      title: "Sky Diving",
      quote: "Feel the freedom of the skies—where limits fade, and the thrill of flight becomes your greatest adventure.",
      description: "Leap into the sky, embrace the adrenaline, and experience the ultimate rush of freedom with a breathtaking skydiving adventure!",
      media: skyDiving,
      isVideo: false,
    },
    {
      title: "Coral Reef Snorkeling",
      quote: "Dive beneath the waves and uncover a world of wonder.",
      description: "Embark on a breathtaking journey into crystal-clear waters.",
      media: marineVideo,
      isVideo: true,
    },
    {
      title: "Lost in Woods",
      quote: "Venture deep into the woods, where every step leads to serenity and every trail whispers secrets of nature.",
      description: "Escape the ordinary, wander deep into lush forests, and discover a world of peace, adventure, and natural beauty awaiting you.",
      media: coupleWood,
      isVideo: true,
    },
    {
      title: "Mountain Waterfall Trail",
      quote: "Chase the mist, hear the roar, and let the mountain waterfall trail lead you to nature’s purest marvels.",
      description: "Follow the trail, embrace the adventure, and find serenity in cascading waters and breathtaking mountain views—nature’s ultimate escape.",
      media: smallSpring,
      isVideo: true,
    },
  ];

  return (
    <section className="slider-container lg:h-[80vh] md:h-[50vh] h-[40vh]">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Slider>
    </section>
  );
}

function Banner() {
  return (
    <>
      <section className="lg:h-[80vh] md:h-[50vh] h-[40vh] bg-slate-500 w-full mx-auto">
        <PauseOnHover />
      </section>
    </>
  );
}

export default Banner;
