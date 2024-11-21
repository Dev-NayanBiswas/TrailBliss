import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../../Utilities/Scripts/ImageUploader";
import { AuthContext } from "../../Utilities/Scripts/AllContext";
import toastAlert from "../../Utilities/Scripts/toastify";
import dynamicTitle from "../../Utilities/Scripts/dynamicTitle";

function Update() {
  dynamicTitle()
    const navigate = useNavigate();
    const {updateUserProfile} = useContext(AuthContext);
    const [updateData, setUpdateData] = useState({
        name:"",
        imageURL:""
    })

    function handleSubmit(e){
        e.preventDefault();
        const {name, value} = e.target;
        setUpdateData({...updateData,[name]:value})
    }

    function handleUpdate(e){
        e.preventDefault();
        const validate = Object.values(updateData).some(data => data === "");
        if(validate){
            toastAlert("info","Cant Submit Empty Field")
        }else{
          updateUserProfile(updateData.name, updateData.imageURL)
          .then(()=>{
            toastAlert("success","Your Profile Updated")
            navigate("/portfolio")
          })
          .catch(err=>{
            toastAlert("error",`Invalid Inputs`)
          })
        }
    }
  return (
    <>
      <section>
        <section className="h-full w-full flex items-center justify-center">
          <form action='' className="w-full h-[80vh] flex justify-center items-center flex-col">
          <figure className="h-16 w-16 mx-auto">
                <img src={ImageUploader("updateUser.png")} alt='' className="h-full w-full object-cover object-center" />
              </figure>
            <h1 className='text-center text-gray-500 font-semibold text-2xl my-4'>
              Update Your Profile
            </h1>
            {/*Name*/}
            <section className='relative my-3 lg:w-5/12 md:w-10/12 w-full mx-auto'>
              <input
                type='text'
                id='name'
                name='name'
                placeholder=''
                onChange={handleSubmit}
                className='peer primary_input'
              />
              <label className='text-center customLabel'>Name</label>
            </section>
            {/*ImageURl*/}
            <section className='relative my-3 lg:w-5/12 md:w-10/12 w-full mx-auto'>
              <input
                type='text'
                id='imageURL'
                name='imageURL'
                placeholder=''
                onChange={handleSubmit}
                className='peer primary_input'
              />
              <label className='text-center customLabel'>imageURL</label>
            </section>
            <section className="text-center w-5/12 mx-auto">
            <button type="submit" onClick={handleUpdate} className="lg:px-6 px-5 py-2 bg-[var(--primary-color)] rounded-s-full rounded-e-full lg:w-5/12 text-white whitespace-nowrap">Confirm Update</button>
            </section>
            
          </form>
        </section>
      </section>
    </>
  );
}

export default Update;
