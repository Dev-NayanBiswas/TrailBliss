import ImageUploader from "../Utilities/Scripts/ImageUploader";

function AboutUs() {


  return (
    <>
      <section>
        
        <section className='p-6 bg-gray-500/10 flex items-center justify-center rounded-xl relative'>
          <figure className=' h-[50vh] w-full overflow-hidden rounded-xl relative'>
            <img
              className='w-full h-full object-cover rounded-xl hover:scale-105 transition-all duration-150'
              src={ImageUploader("aboutUs.jpg")}
              alt=''
            />
          <div className="bg-black/45 rounded-xl top-0 inset-0 absolute w-full h-full"></div>
          </figure>
          <h1 className="absolute lg:text-4xl text-3xl font-semibold text-white lg:left-20 left-14">Backpack Ready? 
            <br />
            <span className="text-blue-300 lg:text-6xl text-4xl">Let's Discover</span>
            </h1>
        </section>
        <section>
          <section>
            <h1 className='text-left my-5 text-3xl text-gray-700/45 font-bold'>
              Who We Are
            </h1>
            <div className='h-0.5 border-b w-10/12 my-4 mx-auto'></div>
            <p>
              We have been crafting unforgettable eco-friendly adventures for over<span className='text-blue-600 font-bold text-xl'> 10 years</span>. Our passionate team is dedicated to connecting travelers with nature through sustainable and meaningful experiences. From tranquil forest retreats to thrilling wildlife safaris, we pride ourselves on curating adventures that leave a positive impact on the environment and local communities. With a decade of expertise in eco-tourism, we are your trusted partner for exploring the world responsibly. Whether you’re seeking an adrenaline rush, a serene escape, or an educational journey into nature’s wonders, we’re here to guide you every step of the way
            </p>
          </section>
          <section>
            <h1 className='text-right my-5 text-3xl text-gray-700/45 font-bold'>
              Our Mission
            </h1>
            <div className='h-0.5 border-b w-10/12 my-4 mx-auto'></div>
            <p>
            Our mission is to inspire meaningful connections with nature while promoting sustainable travel practices. We aim to provide eco-friendly adventures that educate, empower, and immerse individuals in the beauty of the natural world. By supporting conservation efforts and local communities, we strive to create experiences that are both impactful and responsible. Whether it's through preserving fragile ecosystems, reducing environmental footprints, or fostering a love for the planet, our goal is to ensure that every journey contributes to a greener, healthier Earth. <br />Together, we can explore responsibly and leave a positive legacy for future generations. 
            </p>
          </section>
        </section>
      </section>
    </>
  );
}

export default AboutUs;
