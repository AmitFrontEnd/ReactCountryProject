
import { Link } from "react-router-dom";

const Header = ({dark ,setDark}) => {

  const handleDark=()=>{
   setDark(!dark)
   localStorage.setItem("darkMode", JSON.stringify(!dark));

  }
 
  return (
    <div className="shadow-lg sticky top-0 left-0 bg-white z-10  dark:bg-dark dark:text-light ">
      <header className="flex justify-between max-w-[1200px] mx-auto p-6 cursor-pointer">
        <Link to="/">
          <h1 className="font-bold text-xl">Where in the world?</h1>
        </Link>
        <div className="cursor-pointer" 
          onClick={handleDark}>
        
          <i className={`fa-regular fa-${dark ? 'sun' : 'moon'} mr-2`}></i>
         {dark ?  "Light Mode" : "Dark Mode"}
        </div>
     
      </header>
    </div>
  );
};

export default Header;
