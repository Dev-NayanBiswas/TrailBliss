import { Link, useNavigate, useRouteError } from "react-router-dom";

function ErrorPage(){
  const navigate = useNavigate()
    const error = useRouteError();
  return (
    <>
      <section className="h-screen w-full bg-white/45 text-white/20 flex justify-center items-center">
      <section className="text-center text-black space-y-3">
        <figure className="h-[40vh] flex justify-center items-center">
        {
          error.status === 404 ?
          <img className="object-cover object-center h-full" src="https://staticmania.cdn.prismic.io/staticmania/ed90f683-c1df-4bad-afa4-65ce4c65287e_Property+1%3DSpaceship_+Property+2%3DMd.svg" alt="" /> :
          <img className="object-cover object-center h-full" src="https://staticmania.cdn.prismic.io/staticmania/a8befbc0-90ae-4835-bf37-8cd1096f450f_Property+1%3DSearch_+Property+2%3DSm.svg" alt="" />
        }
        </figure>
      <h1 className="text-5xl text-blue-600/45 font-bold">Oops!</h1>
      <p className="text-xl font-semibold italic text-red-600/25">Sorry, an unexpected error has occurred.</p>
      <p className="text-3xl text-red-400 font-black">
        {error.error.message}
      </p>
        <p className="text-4xl text-yellow-400 font-serif">{error.statusText}</p>
        <section className="flex justify-center items-center gap-4">
          <button onClick={()=>navigate(-1)} className="btn_primary border-[2px] border-[var(--primary-color)] px-7 py-2 text-[var(--primary-color)]">Go Back</button>
          <Link to="/"><button className="btn_primary border-[2px] text-white border-[var(--primary-color)] px-7 py-2 bg-[var(--primary-color)]">Return Home</button></Link>
        </section>
      </section>
    </section>
    </>
  )
}

export default ErrorPage

// status,statusText,message