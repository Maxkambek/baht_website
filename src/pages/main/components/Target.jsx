import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";
import { getText } from "../../../locale";

const Target = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1200,
    });
  }, []);
  const link = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="Target HomeStyle">
        <div data-aos-delay="500" data-aos="fade-right" className="leftPat">
          <img src="/patLeft.png" alt="" />
        </div>
        <div data-aos-delay="500" data-aos="fade-left" className="rightPat">
          <img src="/patRight.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto mt-lg-0 mt-5">
              <h1 data-aos-delay="500" data-aos="fade-up" className="bold">
                {getText("h_n_8")}
              </h1>
              <p data-aos-delay="500" data-aos="fade-up" className="roman">
                {getText("h_n_9")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Links HomeStyle">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <div
                onClick={() => link()}
                data-aos-delay="500"
                data-aos="fade-left"
                className="roman roman_2"
              >
                {getText("h_n_10")}
              </div>
              <Link
                data-aos-delay="500"
                data-aos="fade-right"
                to="/benef"
                className="roman"
              >
                {getText("h_n_11")}
              </Link>
              <Link
                data-aos-delay="500"
                data-aos="fade-left"
                to="/buy"
                className="roman"
              >
                {getText("h_n_12")}
              </Link>
              <Link
                data-aos-delay="500"
                data-aos="fade-right"
                to="/library"
                className="roman"
              >
                {getText("h_n_13")}
              </Link>
              <Link
                data-aos-delay="500"
                data-aos="fade-left"
                to="/about"
                className="roman"
              >
                {getText("h_n_14")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Target;
