import React from "react";
import { getLanguage, getText } from "../locale";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { LANGUANGE } from "../tools/constant";

const About = () => {
  const changeLanguage = (e) => {
    localStorage.setItem(LANGUANGE, e.target.value);
    document.location.reload(true);
  };

  return (
    <>
      <div className="About">
        <select className="select_2" onChange={changeLanguage} name="" id="">
          <option selected={getLanguage() === "uz"} value="uz">
            Uzb
          </option>
          <option selected={getLanguage() === "ru"} value="ru">
            Узб
          </option>
        </select>

        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <img className="lib_logo" src="/logo.png" alt="" />
            </div>
            <div className="col-lg-4">
              <img className="ab_name_img" src="/img/ab_1.png" alt="" />
            </div>
            <div className="col-1"></div>
            <div className="col-lg-7 d-flex align-items-center">
              <div className="ab_name">{getText("ab_h_1")}</div>
            </div>
            <div className="col-12">
              <div className="ab_h">{getText("ab_h_2")}</div>
              <div className="ab_h mt-0">{getText("ab_h_2_1")}</div>
              <div className="ab_h_2">{getText("ab_h_3")}</div>
              <div className="ab_h">{getText("ab_h_4")}</div>
              <div className="ab_h">
                {getText("ab_h_5")}
                <span> {getText("ab_h_6")} </span>
                {getText("ab_h_7")} <span> {getText("ab_h_8")} </span>{" "}
                {getText("ab_h_9")}
              </div>{" "}
              <div className="ab_h">{getText("ab_h_10")}</div>
              <img className="ab_img" src="/lib_img.png" alt="" />
              <div className="ab_h">{getText("ab_h_11")}</div>{" "}
              <div className="ab_h">{getText("ab_h_12")}</div>
              <div className="ab_h_2">
                <img src="/icon_cor.png" alt="" />
                {getText("ab_h_13")}
              </div>
              <div className="ab_h_2">
                <img src="/icon_cor.png" alt="" />
                {getText("ab_h_14")}
              </div>
              <div className="ab_h">{getText("ab_h_15")}</div>
              <div className="ab_h">{getText("ab_h_16")}</div>
              <div className="ab_h">{getText("ab_h_17")}</div>
              <div className="ab_h">{getText("ab_h_18")}</div>
              <div className="ab_h">{getText("ab_h_19")}</div>
              <div className="ab_h">
                <span> {getText("ab_h_20")} </span>
                {getText("ab_h_21")}
              </div>
              <div className="ab_h">{getText("ab_h_22")}</div>
              <div className="ab_h">{getText("ab_h_23")}</div>
              <div className="ab_h_3"> {getText("ab_h_24")}</div>
            </div>

            <div className="col-lg-4 mt-lg-0 mt-5 pt-lg-0 pt-5">
              <img className="ab_name_img" src="/img/ab_2.png" alt="" />
            </div>
            <div className="col-1"></div>
            <div className="col-lg-7 d-flex align-items-center">
              <div className="ab_name">{getText("ab_h_25")}</div>
            </div>
            <div className="col-12">
              <div className="ab_h">{getText("ab_h_26")}</div>
              <div className="ab_h">{getText("ab_h_27")}</div>
              <div className="ab_h">{getText("ab_h_28")}</div>
              <div className="ab_h">{getText("ab_h_29")}</div>
              <div className="ab_h">{getText("ab_h_30")}</div>

              <img className="ab_img" src="/lib_img.png" alt="" />

              <div className="ab_h">{getText("ab_h_31")}</div>

              <div className="ab_h">{getText("ab_h_32")}</div>
              <div className="ab_h">{getText("ab_h_33")}</div>
              <div className="ab_h">{getText("ab_h_34")}</div>

              <div className="ab_h_3"> {getText("ab_h_35")}</div>
            </div>
            <div className="col-12">
              <Link to="/" className="lib_l">
                <div>{getText("bosh")}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
