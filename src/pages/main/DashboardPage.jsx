import React from "react";
import { LANGUANGE } from "../../tools/constant";
import { getLanguage, getText } from "../../locale";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";
import vector3 from "../../assets/vector3.png";
import logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const changeLanguage = (e) => {
    localStorage.setItem(LANGUANGE, e.target.value);
    document.location.reload(true);
  };

  const nav = useNavigate();

  return (
    <>
      <div className="NavigationLayout">
        <div className="row">
          <div className="col-12 top">
            <Link to="/" className="logo nav_110_logo">
              <img src={logo} alt="" />
            </Link>
            <div className="d-flex align-items-center">
              {/* <div className="notification cursor me-3">
              <img src={russian} alt="" />
            </div> */}
              {/* <div className="language cursor">
              <img src={notification} alt="" />
            </div> */}
              <select
                className="select"
                onChange={changeLanguage}
                name=""
                id=""
              >
                <option selected={getLanguage() === "ru"} value="ru">
                  Узб
                </option>
                <option selected={getLanguage() === "uz"} value="uz">
                  Uzb
                </option>
              </select>

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
          </div>
        </div>

        <div className="container">
          <div className="row d-flex justify-content-center mb-5">
            <div className="col-12">
              <div className="dashboard_box">
                <div className="dash_h">{getText("dash_1")}</div>
                <div className="dash_btn">
                  <button onClick={() => nav("/welcome-note")}>
                    {getText("dash_4")}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="dashboard_box">
                <div className="dash_h">{getText("dash_2")}</div>
                <div className="dash_btn">
                  <button onClick={() => nav("/start-questions-modal")}>
                    {getText("dash_4")}
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="dashboard_box">
                <div className="dash_h">{getText("dash_3")}</div>
                <div className="dash_btn">
                  <button onClick={() => nav("/elon")}>
                    {getText("dash_4")}
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
