import galary from "@/assets/galary.png";
import galary2 from "@/assets/galary4.png";
import checked from "@/assets/checked.png";
import Aos from "aos";
import { useEffect } from "react";

import { getText } from "../../../locale";

const Future = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1200,
    });
  }, []);
  return (
    <>
      <div className="Future">
        <img data-aos="zoom-in" className="w-100" src={galary} alt="" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 data-aos-delay="500" data-aos="fade-up" className="bold">
                {getText("h_n_15")}
              </h1>
              <div data-aos-delay="500" data-aos="fade-up" className="wrap">
                <span>
                  <img className="fut_img" src={checked} alt="" />
                </span>
                <p className="roman">{getText("h_n_16")}</p>
              </div>
              <div data-aos-delay="500" data-aos="fade-up" className="wrap">
                <span>
                  <img className="fut_img" src={checked} alt="" />
                </span>
                <p className="roman">{getText("h_n_17")}</p>
              </div>
              <div data-aos-delay="500" data-aos="fade-up" className="wrap">
                <span>
                  <img className="fut_img" src={checked} alt="" />
                </span>
                <p className="roman">{getText("h_n_18")}</p>
              </div>
              <div data-aos-delay="500" data-aos="fade-up" className="wrap">
                <span>
                  <img className="fut_img" src={checked} alt="" />
                </span>
                <p className="roman">{getText("h_n_19")}</p>
              </div>
              <h2 data-aos-delay="500" data-aos="fade-up" className="bold">
                {getText("h_n_20")}
              </h2>
            </div>
          </div>
        </div>
        <img data-aos="zoom-in" className="w-100" src={galary2} alt="" />

        <div className="PatWrap">
          <div
            data-aos-delay="500"
            data-aos="fade-right"
            className="leftPat pat"
          >
            <img src="/patLeft.png" alt="" />
          </div>
          <div
            data-aos-delay="500"
            data-aos="fade-left"
            className="rightPat pat"
          >
            <img src="/patRight.png" alt="" />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 data-aos-delay="500" data-aos="fade-up" className="bold">
                  {getText("h_n_21")}
                </h3>
                <h4 data-aos-delay="500" data-aos="fade-up" className="roman">
                  {getText("h_n_22")}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Future;
