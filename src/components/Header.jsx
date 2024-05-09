// header component
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState(["Login"]);

  const handleLoginBtn = () => {
    if (loginBtn === "Login") {
      setLoginBtn("Logout");
    } else {
      setLoginBtn("Login");
    }
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>

      <div className="nav-Iteams">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="btn-login" onClick={handleLoginBtn}>
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
