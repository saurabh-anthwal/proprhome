import React,{useState,useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SplashScreen from "../splash-screen/Index";

const LoginPage = () => {
  const navigate = useNavigate()

  const redirectTo = () =>{
    navigate('/terms-and-conditions')
  }
  
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
      setTimeout(() => {
        setLoading(false);
        navigate('/')
      }, 2000);
  }, []);
  return (
    <>
    {loading ? 
      <SplashScreen />
    : 
    <div className="bg-white  text-gray-900 p-4">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJOM3sCUqfpQm-kv2LSib3sFVSl9yjwM-w_fDNGeFJa1JG6ZL"
        alt="logo"
      />
      <h2 className="mb-4 font-semibold text-gray-900 text-center leading-loose">
        Welcome to ProprHome
      </h2>
      <div className="space-y-4 text-xs">
        <button onClick={()=>redirectTo()}  className="flex gap-5 w-full items-center bg-[#00D188] text-white rounded-full px-2">
          <img
            className="h-4 w-4"
            src="https://yt3.googleusercontent.com/viNp17XpEF-AwWwOZSj_TvgobO1CGmUUgcTtQoAG40YaYctYMoUqaRup0rTxxxfQvWw3MvhXesw=s900-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <span>Continue with Google</span>
        </button>
        <button className="flex gap-5 w-full items-center border-[1px] border-green-300 rounded-full px-2 text-green-400">
          <img
            className="h-4 w-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s"
            alt=""
          />
          <span>Continue with Linkedin</span>
        </button>
        <div className="text-center">
          <span>OR</span>
        </div>
        <button className="w-full text-center border-[1px] border-green-300 rounded-full px-2 text-green-400">
          <span>Create an Account</span>
        </button>
      </div>
      <p className="text-[8px] pt-4">
        By continuing, you agree to ProprHome's <b>Terms of Service</b> and
        confirm that you have read our <b>Privacy Policy</b>.
      </p>
    </div>
  }
  </>
  );
};

export default LoginPage;
