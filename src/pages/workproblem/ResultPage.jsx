import React, { useState } from "react";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";
import vector3 from "../../assets/vector3.png";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { USER_INFO } from "../../constants";

const ResultPage = () => {
  const data = [];
  const allData = JSON.parse(localStorage.getItem(USER_INFO));
  Object.entries(allData).forEach(([key, value]) => {
    data.push(value);
  });
  return (
    <>
      <div className="NavigationLayout ResultPage">
        <div className="row">
          <div className="col-12 top">
            <Link to="/" className="logo nav_110_logo">
              <img src={logo} alt="" />
            </Link>
            <div className="vector1 vector">
              <img src={vector1} alt="" />
            </div>
            <div className="vector2 vector">
              <img src={vector2} alt="" />
            </div>
            <div className="vector3 vector">
              <img src={vector3} alt="" />
            </div>
          </div>
          <div className="col-12">
            <div className="container">
              <div className="result_h">Sizda quyidagi muammolar bor !</div>
            </div>
          </div>
          <div className="col-12 muommo_page">
            <div className="container">
              <div className="result_p">Muammolar</div>
              {data &&
                data.map((item, index) => (
                  <div key={index} className="result_item">
                    {index + 1}. {"  "}
                    {item ? item.charAt(0).toUpperCase() + item.slice(1) : ""}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 buy_btn">
            <div className="container">
              <Link to="/buy" className="lib_h_buy">
                Kursni sotib olish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultPage;
