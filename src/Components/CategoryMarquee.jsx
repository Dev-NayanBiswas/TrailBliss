import Marquee from "react-fast-marquee";
import ImageUploader from "../Utilities/Scripts/ImageUploader"
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function CategoryMarquee(){
    const [allCategories, setAllCategories] = useState([]);

    useEffect(()=>{
        (async()=>{
            try{
                const response = await fetch("../categories.json");
                if(!response.ok){
                    throw new Error(`Http Error Status : ${response.status}`)
                }else{
                    const categories = await response.json();
                    setAllCategories(categories)
                }
            }catch(error){
                console.error(error.message)
            }
        })()
    },[])

  return (
    <>
        <section className="bg-gradient-to-t from-transparent via-green-100/10 to-transparent relative h-[8.5vh] my-6 rounded-s-full py-1">
        <Marquee direction="right" pauseOnHover="true" loop={0} className="rounded-s-full overflow-y-hidden absolute rounded-full bg-gradient-to-t from-transparent to-white h-[7.2vh] ">

            <section className="flex justify-between items-center w-full gap-2">
            {
                allCategories?.map(category=>
                <NavLink to={`/categoryWiseCards/${category.categoryName}`} key={crypto.randomUUID()} className={({isActive})=>isActive? "marqueeNavActive":"marqueeNavInactive"}>
                <img className="h-full object-cover p-1" src={ImageUploader(category.image)} alt="" />
                <p className="whitespace-nowrap px-3 pr-4 font-semibold flex-1">{category.categoryName}</p>
                </NavLink>)
            }
            </section>

        </Marquee>
        <Link className="absolute top-[7%] left-[0px] z-30">
            <button className="border-[1px] bg-white border-[var(--primary-color)] rounded-full h-[7vh] p-2 overflow-visible">
                <img className="h-full rounded-full p-1 object-center overflow-visible object-contain" src={ImageUploader("tripPackages.png")} alt="" />
            </button>
        </Link>
        </section>
    </>
  )
}

export default CategoryMarquee;
// lg:gap-x-[133px] md:gap-x-[30px] gap-x-2