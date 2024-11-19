import { useOutletContext, useParams } from "react-router-dom"
import { BiSolidLeaf } from "react-icons/bi";
import { PiWarningCircleThin } from "react-icons/pi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { GiCampfire } from "react-icons/gi";
import { ImLocation2 } from "react-icons/im";
import { TfiTimer } from "react-icons/tfi";
import { TbTargetArrow } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { BsCoin } from "react-icons/bs";
import ImageUploader from "../../Utilities/Scripts/ImageUploader";
import { useEffect, useState } from "react";

function PackageDetails() {
    const [card, setCard] = useState({})
    const {ID} = useParams();
    const [data] = useOutletContext();
    useEffect(()=>{
            console.log(data);
            console.log(ID)
            const findTheCard = data?.find(item=>item.id === ID);
            setCard(findTheCard)
    },[ID])

          const {adventureTitle,ecoFriendlyFeatures,image,categoryName,shortDescription,adventureCost,bookingAvailability,location,duration,adventureLevel,includedItems,maxGroupSize,specialInstructions} = card || {}
    
  return (
    <>
    <section className="relative h-[160vh] md:h-[140vh] lg:h-[95vh] w-full rounded-t-lg my-10">
      <section
        className="rounded-t-lg absolute inset-0 bg-cover transform -scale-y-100 rotate-180"
        style={{
            backgroundImage:`url(${ImageUploader(image)})`,
          }}
      ></section>
      <section className="absolute z-10 inset-0 bg-black/55 bg-opacity-85 lg:h-full h-[160vh] md:h-[140vh] rounded-t-lg"></section>
      <section className="relative h-full flex lg:flex-row flex-col justify-between lg:px-10 py-3 items-center text-left rounded-t-lg">
        <figure className="z-10 lg:my-5 float-left h-full lg:-ml-6 rounded-t-lg">
            <img className="w-[335px] lg:h-full md:h-[335px] md:w-[600px] float-left bg-green-400 aspect-[1/1.1] lg:aspect-[1/2.2] 
    rounded-lg shadow-lg lg:object-cover object-cover object-left lg:object-[20%_30%] 
    [clip-path:circle(80%_at_20%_10%)] 
    [shape-outside:circle(70%_at_20%_30%)]
    md:[clip-path:polygon(0%_0%,100%_0%,75%_100%,0%_100%)]
    md:[shape-outside:polygon(0%_0%,100%_0%,75%_100%,0%_100%)]" src={ImageUploader(image)} alt="" />
        </figure>
        <section className="flex-1 px-4 z-30 text-white">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">{adventureTitle}</h1>
        <p className="text-sm md:text-lg mb-6">
          {shortDescription}
        </p>
        <section className="flex flex-col gap-1">
        <p className="flex justify-start items-center gap-3"><GiCampfire stroke="gray" size={20}/> <span>{categoryName}</span></p>
        <p className="flex justify-start items-center gap-3"><ImLocation2 stroke="gray" size={20}/> <span>{location}</span></p>
        <p className="flex justify-start items-center gap-3"><TfiTimer stroke="gray" size={20}/> <span>{duration}</span></p>
        <p className="flex justify-start items-center gap-3"><TbTargetArrow stroke="white" size={20}/> <span>{adventureLevel}</span></p>
        <p className="flex justify-start items-center gap-3"><FaPeopleGroup stroke="gray" size={20}/> <span>{maxGroupSize}</span></p>
        <p className="flex justify-start items-center gap-3">{bookingAvailability? <GiCheckMark color="green" size={20}/>: <RxCross2 stroke="red" color="red" size={20}/>}<span>Availability</span></p>
        <p className="flex justify-start items-center gap-3"><BsCoin stroke="gray" size={20}/><span>{adventureCost}</span></p>
        </section>
        <ul className="flex md:flex-row flex-col gap-2">
            <span className="text-2xl text-[var(--primary-color)]">Including</span>
            {
                includedItems?.map((item,index)=><li className="whitespace-nowrap text-white tracking-wide px-3 py-1 rounded-lg bg-black/35 text-sm" key={index}>{item}</li>)
            }
        </ul>
        <ul className="flex flex-col gap-2 my-4">
            
            <span className="text-2xl text-[var(--primary-color)]">Eco Friendly Features</span>
            {
                ecoFriendlyFeatures?.map((item,index)=><li className="rounded-tl-full w-fit flex gap-1 justify-center items-center rounded-e-full tracking-wide px-4" key={index}><BiSolidLeaf fill="green"/>{item}</li>)
            }
        </ul>
        <ul className="flex flex-col gap-2 my-4">
            
            <span className="text-2xl text-[var(--primary-color)] flex gap-1">Special Instructions <PiWarningCircleThin fill="orange" size={20} /></span>
            {
                specialInstructions?.map((item,index)=><li className="rounded-tl-full w-fit rounded-e-full tracking-wide bg-red-600/35 px-4" key={index}>{item}</li>)
            }
        </ul>
        <button className="border-[2px] tracking-wide border-[var(--primary-color)] hover:bg-[var(--primary-color)] text-[var(--primary-color)] hover:text-white font-semibold px-8 py-2 rounded-e-full rounded-s-full hover:shadow-md btn_anim flex justify-center items-center gap-4">
          Talk with Expert <HiOutlineChatBubbleLeftRight size={30}/>
        </button>
        </section>
      </section>
    </section>
    </>
  )
}

export default PackageDetails
