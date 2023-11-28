import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  authenticate,
  setAuthenticate,
  setLoginState,
  loginState,
}) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();
  let [width, setWidth] = useState(0);

  const goToLoginPage = () => {
    navigate("/login");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  const logOut = () => {
    setAuthenticate(false);
    goToLoginPage();
    setLoginState("로그인");
  };

  const goToHomepage = () => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <div>
          <div className="side-menu" style={{ width: width }}>
            <button className="close-btn" onClick={() => setWidth(0)}>
              X
            </button>
            <div className="side-menu-list">
              {menuList.map((item) => (
                <button className="menu-btn">{item}</button>
              ))}
            </div>
          </div>
        </div>  
        <div className="first-line">
          <div className="hide">
            <FontAwesomeIcon icon={faBars} className="menu-burger-bar" onClick={()=>setWidth(250)}/>
          </div>

          <div
            className="login-button"
            onClick={authenticate === false ? goToLoginPage : logOut}
          >
            <FontAwesomeIcon icon={faUser} />
            <div>{loginState}</div>
          </div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={200}
          src="https://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg"
          onClick={goToHomepage}
        ></img>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search-area">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          <input
            type="text"
            placeholder="제품검색"
            onKeyUp={(event) => search(event)}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
