import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Update() {
    const navigate = useNavigate();
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
        console.log(updateData)
        const validate = Object.values(updateData).some(data => data === "");
        if(validate){
            alert("Cant Submit Empty Field")
        }else{
            alert("Good to Go");
            navigate("/portfolio")
        }
    }
  return (
    <>
      <section>
        <section className="h-full w-full flex items-center justify-center">
          <form action='' className="w-full h-[80vh] flex justify-center items-center flex-col">
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
            <button type="submit" onClick={handleUpdate} className="px-6 py-2 bg-[var(--primary-color)] rounded-s-full rounded-e-full md:w-5/12 w-8/12 text-white">Confirm Update</button>
            </section>
            
          </form>
        </section>
      </section>
    </>
  );
}

export default Update;
