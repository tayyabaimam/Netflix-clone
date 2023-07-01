import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
function Nav() {
  //variables are mostly used with usestate when value is changing
  const [show, handleShow] = useState(false);
  //everytime you push a new page in history it is stored.
  const navigate = useNavigate();
  const transitionNavbar = () => {
    if (window.scrollY > 100) handleShow(true);
    else handleShow(false);
  };
  //it takes a fn and second arg
  //code only runs when the comp mounts
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    //only show black navbar when show is true
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          onClick={() => navigate("/")}
          className="nav_logo"
          src={logo}
          alt=""
        />
        <img
          //basically this is pushing in history the profile page
          onClick={() => navigate("/profile")}
          alt=""
          className="nav_avatar"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAY1BMVEUNfoD///8Ae30AeHoAdXcAbnAYgILw9/egxMWXwcLY6Ojh7u70+fno8fFlo6T5/f2syso2iozB29uJs7Rcl5ltqKlZnZ/I3d2Pu7x/rrDA1tdDlZdPk5QoiYtRmZp2ra+109QMeI77AAACHklEQVR4nO2Y65KjIBCFpcEbKkazio5j4vs/5ZrJDVKZCS7szk7V+X4m1aePjSDdUQQAAAAAAAAAAADw/0Ir3yhGvFHdr4QH8XAV2xDCe50yxoosCeDgIlbl7mJ8zy4U/g7EUF/E5OwoxkfGgjkwxSrHmDm9x7Bsy9I9ISk3i5meV9eJV35brHQqp2jNGNZ7rQF/s8QmF7G4smI6rzUgvV0sllaM8quAbUC5GBCZGVK/exkQO8uA00YkZYZIv21IB0vMbTmtsjkV7QuEKda5PQ3NxS0k98xviWXCNai52C4H3/yGWDq4ryaR2hWVHCb//B9iS1XJvNkkRiKO4zBf48BiAAAAAPjJBBw4/AlcHLo5xA3rrEZi2+NwUmu/Ux/DFIGSXGq1oaI8UuebadkEMXBuX9vZrQokxHjr9vxa3atif1Fre/HKAwmuFqM1CWOgu+kVw/T520BcJCq3em3tN224CjfG1KOU+ZQQf7h0n35Imu6tqM309RJi6LUi9pYuq3Q2TpG4E01jrgv2wDLFQdKfHMzto/rJh9Rt22pZPfmPpVmyced+CfGDLp/leU4tx0BDT9PCe5a+Tv1RmaWPgh2BpgURHXX9Knu6qK2n5ga4EMed/NREpYfp5Unh7YHT3OdvsirvPuoylXrXNdHj7vxL0HrYRk1zUN1+Zey6w9QkXPzrfpxoPX3OfPOHHwAAAAAAAAAAAAAAAAD4UfwGyQIUad0Ix1IAAAAASUVORK5CYII="
        />
      </div>
    </div>
  );
}

export default Nav;
