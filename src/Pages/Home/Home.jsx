import { Helmet } from "react-helmet-async";
import UseAuth from "../../Hooks/UseAuth";
const Home = () => {
   
    const {loading} = UseAuth();
        if(loading){
        return <progress className="progress w-56"></progress>
    //   return  <span className="loading loading-spinner loading-lg"></span>
    }
    return (
        
        <div className="min-h-screen">
            
            <Helmet>
            <title>Your Task | Home</title>
            </Helmet>
          
        </div>
    );
};

export default Home;