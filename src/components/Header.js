import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Usercontext from "../utils/Usercontext";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInuser } = useContext(Usercontext);

  return (
    <div className="header flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="logo w-32" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status:{onlineStatus ? "💚 Online" : "❤️ Offline"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4"> Cart🛒</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>

          <li className="px-4 font-bold"> {loggedInuser} </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
