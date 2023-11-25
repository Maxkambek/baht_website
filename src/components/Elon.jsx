import React from "react";
import RegistrationLayout from "./RegistrationLayout";
import { Link } from "react-router-dom";
import { getText } from "../locale";

const Elon = () => {
  return (
    <>
      <div className="WelcomeNotePage Register">
        <RegistrationLayout />
        <div className="">
          <div className="">
            <div className=" registerCenter">
              <div className="modalCard">
                <h2>
                  {getText("plat_1")} <span>BahtWoman</span> {getText("plat_2")}
                </h2>
                <h3> {getText("plat_3")} </h3>

                <div className="reg_elon">{getText("plat_4")}</div>

                <Link to="/" className="btn myBtn">
                  {getText("plat_5")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Elon;
