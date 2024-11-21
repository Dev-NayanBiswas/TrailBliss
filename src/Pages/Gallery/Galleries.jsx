import React from 'react'
import { useOutletContext } from 'react-router-dom'
import GalleryCarousel from './GalleryCarousel';
import dynamicTitle from '../../Utilities/Scripts/dynamicTitle';

function Galleries(){
    dynamicTitle()
    const [data] = useOutletContext();
    const carouselData = data?.flatMap(({image,id})=>({id:id,images:image}));
  return (
    <>
    <section className="my-6">
        <h1 className="text-4xl font-bold text-gray-700/45">Gallery of <span className="italic text-blue-500">Memories</span></h1>
        <p className="text-sm my-3 italic font-semibold text-gray-700/85 w-9/12 tracking-wider">Memories of eco-friendly adventures are nature's whispers etched in our hearts, <br /> reminding us that the greatest journeys leave only footprints and take only inspiration.</p>
    <div className="h-0.5 border-b-[1px] md:w-5/12 w-full border-[var(--primary-color)] mb-3"></div>
    </section>
        <section data-aos="fade-up" className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col gap-4">
            <section className='col-span-2 overflow-hidden'>
            <GalleryCarousel side={false} cards={2} data={carouselData.slice(0,10)}/>
            </section>
            <section className="lg:col-start-3 md:row-start-3  lg:row-span-2 md:row-span-3 p-3 flex flex-col gap-3 justify-center">
                    <h1 className="md:text-3xl text-2xl font-semibold text-green-400">The Thrill  of Eco-Adventure</h1>
                    <div className="h-0.5 border-b-[1px] w-full border-[var(--primary-color)] mb-3"></div>
                    <p className="italic font-semibold text-gray-700/85">Eco-adventure combines the excitement of exploration with the commitment to protect our planet. Whether you're trekking through lush rain forests, diving into vibrant coral reefs, or gliding above breathtaking canopies, these journeys connect you deeply with nature. They allow you to experience the wild while preserving its pristine beauty for generations to come.</p>
                    <p className="font-semibold italic text-gray-700/85">Adventures like hiking through volcanic trails or kayaking in untouched lagoons create unforgettable memories. Eco-tourism not only fuels your sense of adventure but also supports local conservation efforts, making every step or paddle a part of a larger purpose.</p>
            </section>
            <section className="lg:col-start-2 md:row-start-5 lg:row-start-2 md:col-start-2 md:col-end-3 md:block hidden">
            <GalleryCarousel side={true} cards={1} data={carouselData.slice(10,20)}/>
            </section>
            <section className="md:row-start-2 md:row-span-2 p-3 flex flex-col gap-3 justify-center text-right">
                    <h1 className="md:text-3xl text-2xl font-semibold text-green-400">Experience Nature with Purpose</h1>
                    <div className="h-0.5 border-b-[1px] w-full border-[var(--primary-color)] mb-3"></div>
                    <p className="italic font-semibold text-gray-700/85">Eco-adventures go beyond sightseeing; they are about immersing yourself in the rhythms of the natural world. Imagine listening to the distant call of wildlife at sunrise or meditating beside cascading waterfalls. These experiences inspire mindfulness, teaching us to cherish the simple yet profound wonders of our planet.</p>
                    <p className="font-semibold italic text-gray-700/85">By choosing eco-friendly travel, you contribute to sustainable practices that protect endangered habitats and cultures. It's an opportunity to give back to the earth while enjoying its most awe-inspiring offerings—turning your journey into a meaningful legacy.</p>
            </section>
            <section className="lg:col-start-2 lg:col-span-2 md:row-span-1 md:block hidden">
            <GalleryCarousel side={false} cards={2} data={carouselData.slice(20,29)}/>
            </section>
        </section>
    </>
  )
}

export default Galleries