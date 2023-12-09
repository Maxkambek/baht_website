import {} from "react";
import { getText } from "../locale";
import RegistrationLayout from "./RegistrationLayout";

const Agreement = () => {
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
                <h4>{getText("plat_6")}</h4>
                <h5>{getText("plat_7")}</h5>
                <button
                  onClick={() => navigate("/first-last-name")}
                  className="btn myBtn"
                >
                  {getText("plat_8")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agreement;
