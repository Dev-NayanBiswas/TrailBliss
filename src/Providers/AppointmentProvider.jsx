import { useState } from "react"
import { AppointmentContext } from "../Utilities/Scripts/AllContext";

function AppointmentProvider({children}){
    const [appoint, setAppoint]= useState([]);
    const [userWiseData, setUserWiseData] = useState([])

    const appointmentObj={
        appoint,
        setAppoint,
        userWiseData,
        setUserWiseData
    }
  return (
    <AppointmentContext.Provider value={appointmentObj}>
        {children}
    </AppointmentContext.Provider>
  )
}

export default AppointmentProvider