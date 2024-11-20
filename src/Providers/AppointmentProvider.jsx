import { useState } from "react"
import { AppointmentContext } from "../Utilities/Scripts/AllContext";

function AppointmentProvider({children}){
    const [appoint, setAppoint]= useState([]);

    const appointmentObj={
        appoint,
        setAppoint
    }
  return (
    <AppointmentContext.Provider value={appointmentObj}>
        {children}
    </AppointmentContext.Provider>
  )
}

export default AppointmentProvider