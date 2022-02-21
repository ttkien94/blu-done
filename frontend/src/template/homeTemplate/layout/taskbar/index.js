import React from "react";
import { useEffect, useState } from "react";
import "./styles/styles.scss";
import { Link } from "react-router-dom";
import useWindowDimensions from "app/component/getWindowDimensions";
import logo from "assets/img/logo.png";
function Taskbar() {
  const [mounted, setMounted] = useState(true);
  const toggle = () => setMounted(!mounted);
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width >= 768) {
      setMounted(true);
    } else {
      setMounted(false);
    }
  }, [width]);
  return (
    <div>
      <button onClick={toggle} className="toggle" id="toggle">
        <i className="fa fa-bars"></i>
      </button>
      {mounted ? (
        <div className="taskbar">
          <div className="myLinks">
            <div className="avatar">
              <Link to="/">
                <img src={logo} className="img-responsive" alt={logo} />
              </Link>
            </div>
            <ul>
              <li className="liabout">
                <div className="taskbaricon">
                  <i className="fa fa-address-card"></i>
                  <i className="fa fa-address-card"></i>
                </div>
                <span className="about">About</span>
              </li>
              <li className="liabout">
                <Link to="/blog">
                  <div className="taskbaricon">
                    <i className="fa fa-briefcase"></i>
                    <i className="fa fa-briefcase"></i>
                  </div>
                  <span className="portfolio">Blog</span>
                </Link>
              </li>
              <li className="liabout">
                <a href="https://www.facebook.com/uyenblu09">
                  <div className="taskbaricon">
                    <i className="fa fa-phone"></i>
                    <i className="fa fa-phone"></i>
                  </div>
                  <span className="contact">Contact</span>
                </a>
              </li>
            </ul>
            {/* <div className="followme">
              <p>FOLLOWE ME</p>
            </div>
            <div>
              <ul className="socialmedia">
                <li>
                  <i className="fa fa-facebook "></i>
                  <i className="fa fa-facebook "></i>
                </li>
                <li>
                  <i className="fa fa-instagram"></i>
                  <i className="fa fa-instagram"></i>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Taskbar;
