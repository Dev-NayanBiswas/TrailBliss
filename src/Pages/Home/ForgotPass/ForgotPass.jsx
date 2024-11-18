import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ForgotPass(){
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    function handleSendRestPassEmail(e){
        e.preventDefault();
        if(!emailRegEx.test(email)){
            alert("Enter a valid Email")
            return
        }else{
            alert("Good to Gooo")
        }
    }

    function goBack(e){
        e.preventDefault();
        navigate(-1)
    }


  return (
    <>
      <section>
        <section>
          <section>
            <section className="text-center flex flex-col gap-3">
              <figure>
                <img src='' alt='' />
              </figure>
              <h4 className="text-3xl font-semibold text-gray-600/65">Forgot Password</h4>
              <p className="text-sm">
                Enter your email and we will send you a link to reset your
                Password
              </p>
              <form action=''>
                <section className='relative my-3 lg:w-5/12 md:w-10/12 w-full mx-auto'>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder=''
                    className='peer primary_input'
                  />
                  <label className='text-center customLabel'>Enter your valid Email</label>
                </section>
                <section className="text-center mx-auto flex justify-center items-center gap-3 ">
                <Link onClick={goBack} className="whitespace-nowrap bg-blue-600 px-6 py-2 rounded-s-full rounded-e-full text-white"><button className="">Go Back</button></Link>
            <button onClick={handleSendRestPassEmail} type="submit" className="px-6 py-2 bg-[var(--primary-color)] rounded-s-full rounded-e-full text-white">Confirm Email</button>
            </section>
              </form>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default ForgotPass;
