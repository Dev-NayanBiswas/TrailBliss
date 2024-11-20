import { PiUserCircleGearFill } from "react-icons/pi";
import { MdOutlineMailLock } from "react-icons/md";
import { GiCampfire } from "react-icons/gi";
import { BsClockHistory } from "react-icons/bs";
import { useContext } from "react";
import { AppointmentContext } from "../Utilities/Scripts/AllContext";

function Modal({appData,onClose}){
    const {appoint,setAppoint} = useContext(AppointmentContext);

  function handleCreate(id){
    const isExisted = appoint?.find(app => app.id === id);
    if(isExisted){
        alert("You Already have an Appointment")
    }else{
        onClose();
        setAppoint(prev=>[...prev,appData]);
        alert("Just Scheduled up an appointment")
    }
  }


  return (
    <>
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/45 rounded-lg shadow-lg lg:w-5/12 w-10/12  space-y-2 p-2">
        <section className="bg-green-50 p-5 rounded-lg">
        <h2 className="text-4xl font-bold mb-4 text-center text-[var(--primary-color)]">Hello</h2>
        <h1 className="text-3xl text-center font-semibold italic text-blue-500">{appData.name.split(" ").slice(0,2).join(" ")}</h1>
        <h2 className="text-lg text-center font-bold mb-4 text-red-300">We're Currently Closed Now</h2>
        <p className="text-gray-700 mb-6 lg:w-9/12 w-full text-justify mx-auto md:text-center">
      Our consultation hours are from <span className="font-semibold text-xl text-red-600">10:00 AM</span> to <span className="font-semibold text-xl text-red-600">8:00 PM</span>. Please try again during these hours. You can create an appointment with us, Following these information. We will be back to you Soon...  
    </p>
    <section className="flex flex-col items-start gap-2 text-left md:w-6/12 w-full mx-auto">
    <p className="flex justify-start items-center gap-2 font-semibold"><PiUserCircleGearFill size={25} color="gray"/> <span>{appData.name}</span></p>
    <p className="flex justify-start items-center gap-2 font-semibold"><MdOutlineMailLock size={25} color="gray"/> <span>{appData.email}</span></p>
    <p className="flex justify-start items-center gap-2 font-semibold text-[var(--primary-color)] text-xl"><GiCampfire size={25} color="gray"/> <span>{appData.campName}</span></p>
    <p className="flex justify-start items-center gap-2 font-semibold"><BsClockHistory size={25} color="gray"/> <span>{appData.time}</span></p>
    </section>
        <div className="mt-6 flex md:flex-row flex-col justify-center gap-3">
          <button
            onClick={onClose}
            className="px-8 py-2 font-semibold border-[1px] border-[var(--primary-color)] text-[var(--primary-color)] rounded-s-full rounded-e-full hover:border-red-500 hover:bg-red-500 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={()=>handleCreate(appData.id)}
            className="px-4 font-semibold py-2 bg-[var(--primary-color)] text-white rounded-md rounded-s-full rounded-e-full"
          >
            Create Appointment
          </button>
        </div>
        </section>
      </div>
    </div>
    </>
  )
}

export default Modal