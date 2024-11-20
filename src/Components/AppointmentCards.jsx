import ImageUploader from "../Utilities/Scripts/ImageUploader";
import { TiPlusOutline } from "react-icons/ti";
import { PiUserCircleGearFill } from "react-icons/pi";
import { MdOutlineMailLock } from "react-icons/md";
import { GiCampfire } from "react-icons/gi";
import { BsClockHistory } from "react-icons/bs";
import { useContext } from "react";
import { AppointmentContext } from "../Utilities/Scripts/AllContext";

function AppointmentCards({appInfo}){
    const {appoint,setAppoint} = useContext(AppointmentContext);
    const {campName,email,id,image,name,time} = appInfo || {}

    function handleRemoveAppoint(id){
        console.log(id)
        const filterData = appoint?.filter(app=>app.id !== id);
        setAppoint(filterData);
        alert("Appointment Removed")
    }
  return (
    <section className="flex lg:flex-row flex-col items-center bg-white shadow-lg rounded-ss-lg p-4 gap-4 w-full">

      <section className="lg:w-3/12 w-full lg:h-[180px] md:h-[220px] h-[170px] rounded-lg overflow-hidden">
        <img
          src={ImageUploader(image)}
          alt="Appointment"
          className="w-full h-full object-cover"
        />
      </section>

      <section className="flex-1">
        <section className="md:text-left text-center">
          <p className="font-semibold text-gray-800/45 mb-2 whitespace-nowrap md:text-xl text-sm flex items-center justify-start gap-3">
            <PiUserCircleGearFill/> Name  <span className="text-gray-600">{name}</span>
          </p>
          <p className="font-semibold text-gray-800/45 mb-2 md:text-xl whitespace-nowrap text-sm flex items-center justify-start gap-3">
            <MdOutlineMailLock/>Your Email <span className="text-gray-600">{email}</span>
          </p>
          <p className="font-semibold whitespace-nowrap text-gray-800/45 mb-2 md:text-xl text-sm flex items-center justify-start gap-3">
            <GiCampfire/> Interested in  <span className="text-gray-600">{campName}</span>
          </p>
          <p className="font-semibold whitespace-nowrap text-gray-800/45 md:text-xl text-sm flex items-center justify-start gap-3">
            <BsClockHistory/><span className="text-gray-600 whitespace-wrap">{time}</span>
          </p>
        </section>
      </section>

      <button
      onClick={()=>handleRemoveAppoint(id)}
        className="p-4 text-white rounded-full transition duration-500"
      >
        <TiPlusOutline fill="red" size={28} className="-rotate-45"/>
      </button>
    </section>
  );
}

export default AppointmentCards;
