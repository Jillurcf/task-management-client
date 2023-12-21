import { useNavigate } from "react-router-dom";
import image from "../../assets/images/404Notfound.jpg";

const ErrorPage = () => {
    const navigate = useNavigate()

    const handleBackHome = ()=>{
        navigate('/')
    }

  return (
  
      <div className="flex h-screen items-center">
        <img className="w-[50vh] mx-auto" src={image} alt="" />
        <button onClick={handleBackHome} className="absolute top-[55%] left-[53%] flex mx-auto btn btn-error">Back to Home</button>
      </div>
     

  );
};

export default ErrorPage;
