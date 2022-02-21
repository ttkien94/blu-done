import React from "react";
import "./styles/styles.scss";
function footer() {
  return (
    <div className="footer    " id="gradient">
      <div className="row pt-3">
        <div className="col-md-4">
          <i className="fa fa-map-marker location" aria-hidden="true"></i>
          <h2>Location</h2> <p>Quận 8, TP. Hồ Chí Mính</p>
        </div>
        <div className="col-md-4">
          <i
            className="fa fa-volume-control-phone phone"
            aria-hidden="true"
          ></i>
          <h2>Contact Me</h2> <p> 090 912 4152 </p>
        </div>
        <div className="col-md-4">
          <i className="fa fa-envelope email" aria-hidden="true"></i>
          <h2>Email Us</h2>
          <p>blue@gmail.com </p>
        </div>
      </div>
    </div>
  );
}

export default footer;
