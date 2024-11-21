import { useContext, useState } from "react"
import { AuthContext } from "./AllContext";

function useAppointment(){
    const {userData} = useContext(AuthContext);
    const [scheduleData, setScheduleData] = useState({
        id:"",
        isAvailable:true,
        name:"",
        email:"",
        campName:"",
        image:"",
        time:""
    })

    function settingAppointment(data){


        const longTime = new Intl.DateTimeFormat("en-US",{
            timeStyle:"short",
            dateStyle:"long"
            }).format(Date.now())

        const {id,adventureTitle,categoryName,image} = data || {}
        const currentTime = new Date().getTime();
        const appStartTime = new Date().setHours(10,0,0,0);
        const appEndsTime = new Date().setHours(20,0,0,0);

        if(currentTime >= appStartTime && currentTime <= appEndsTime){
            window.open("https://meet.google.com/rbo-hfhk-nck", "_blank")

        }else{
            setScheduleData({
                ...scheduleData,
                id:id,
                isAvailable:false,
                name:userData.displayName,
                email:userData.email,
                campName:adventureTitle,
                image:image,
                time:longTime
            })

        }
            
    }



   
   

    return [
        scheduleData,
        settingAppointment,
        ]
}

export default useAppointment;




// 1732075200000
//1732075200000
//1732111200000