import React from "react";
import "./Layout1.css";
import Slider from "./Slider";

function Layout1() {
  return (
    <div className="container container-lg Lay">
      <div className="text position-absolute p-2">
        <h3>Astrx</h3>
        <h1>
          ASTR
          <br />
          IX
        </h1>
        <h1 className="">
          COLL
          <br />
          ECTI
          <br />
          BLE
        </h1>
        <div class="btn-group mt-5">
        <a href="#1" class="btn btn-secondary active rounded-pill" aria-current="page">
          Active link
        </a>
        <a href="#1" class="btn btn-secondary rounded-pill ">
          Link
        </a>
      </div>
      </div>
      <Slider />

    </div>
  );
}

export default Layout1;