import { useRouteError } from "react-router-dom";
import Navbar from "../assets/Components/Navbar/Navbar";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const handleBack=()=>{
    window.history.back();
  }

  return (
    <>
    <div id="error-page">
    <Navbar/>
    <div className="hero min-h-screen bg-pink-200">
     <div className="hero-content flex-col items-center lg:flex-row-reverse">
       <img src="https://i.ibb.co/HTLPr6C/be63b6132569217-61aba505be5fb-removebg-preview.png" className="max-w-sm rounded-lg" />
      <div>
       <h1 className="text-8xl font-bold text-pink-600">Oops!</h1>
       <p className="pt-6 text-pink-600 font-bold text-xl">Sorry, an unexpected error has occurred</p>
       <p className="py-6 text-red-600 font-bold text-[16px]">
        <i>{error.statusText || error.message}</i>
      </p>
       <button onClick={handleBack} className="btn bg-pink-600 text-white text-xl  px-8 py-1">Back</button>
      </div>
     </div>
    </div>
    </div>
    </>
  );
}