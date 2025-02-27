
import { Link, NavLink } from "react-router-dom";
import navlinkData from "../../data/navlinkData";
import nike from ".././nike.png";
import PrimaryBtn from "../ui/PrimaryBtn";
const Navbar = () => {
  
  const handleClick = () => {
    console.log("I am Login");
  };

  return (
    <div className="header w-full h-16">
      <div className="flex items-center justify-between w-11/12 mx-auto ">
        {/* nike image */}
        <div className="flex justify-center items-center pt-15px pr-85px">
          <Link to={'/'}>
          <img
            className="h-[42.75px] w-[76px] mt-[15px] mr-21.5"
            src={nike}
            alt="nike logo"
          />
          </Link>
        </div>
        {/* navbar content */}
        <nav className="flex gap-x-5 font-medium">
          {navlinkData.map((elm,ind)=>(
            <ul key={ind} className="">
              <NavLink to={elm.path}>
                {elm.name}
              </NavLink>
            </ul>
          ))}
        </nav>
        {/* navbar button */}
        <PrimaryBtn
          text={"Login"}
          onclick={handleClick}
        />
      </div>
    </div>
  );
};

export default Navbar;
