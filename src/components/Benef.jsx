import React from "react";
import { getLanguage, getText } from "../locale";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { LANGUANGE } from "../tools/constant";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Benef = () => {
  const changeLanguage = (e) => {
    localStorage.setItem(LANGUANGE, e.target.value);
    document.location.reload(true);
  };

  return (
    <>
      <div className="Library">
        <select className="select_2" onChange={changeLanguage} name="" id="">
          <option selected={getLanguage() === "ru"} value="ru">
            Узб
          </option>
          <option selected={getLanguage() === "uz"} value="uz">
            Uzb
          </option>
        </select>

        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <img className="lib_logo" src="/logo.png" alt="" />
            </div>
            <div className="col-12 ">
              <div className="lib_name">
                «MY PSIXOLOG» <br /> {getText("ben_n_1")} <br />
              </div>
              <div className="lib_name">{getText("ben_n_2")}</div>
            </div>
          </div>
          <div className="row justify-content-lg-between justify-content-center">
            <div className="col-lg-3 col-8 mt-5 mb-5">
              <img className="w-100" src="/ben_1.png" alt="" />
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <div className="ben_p">{getText("ben_h_1")}</div>
            </div>
            <div className="col-lg-3 col-8 mt-5 mb-5">
              <img className="w-100" src="/ben_2.png" alt="" />
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <div className="ben_p">{getText("ben_h_2")}</div>
              <div className="ben_p mt-4">
                <img src="/icon_cor.png" alt="" />
                {getText("ben_h_3")}
              </div>
            </div>
            <div className="col-lg-3 col-8 mt-5 mb-5">
              <img className="w-100" src="/ben_3.png" alt="" />
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <div className="ben_p">{getText("ben_h_4")}</div>
            </div>
            <div className="col-lg-3 col-8 mt-5 mb-5">
              <img className="w-100" src="/ben_4.png" alt="" />
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <div className="ben_p">{getText("ben_h_5")}</div>
            </div>
            <div className="col-lg-3 col-8 mt-5 mb-5">
              <img className="w-100" src="/ben_5.png" alt="" />
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <div className="ben_p">{getText("ben_h_6")}</div>
            </div>
            <div className="col-lg-3 col-8 mt-5 mb-5">
              <img className="w-100" src="/ben_6.png" alt="" />
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <div className="ben_p">{getText("ben_h_7")}</div>
            </div>
            <div className="col-lg-3 col-8 mt-5 mb-5">
              <img className="w-100" src="/ben_7.png" alt="" />
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <div className="ben_p">{getText("ben_h_8")}</div>
            </div>
            <div className="col-lg-3 col-8 mt-5 mb-5">
              <img className="w-100" src="/ben_8.png" alt="" />
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <div className="ben_p">{getText("ben_h_9")}</div>
            </div>
            <div className="col-lg-3 col-8 mt-5 mb-5">
              <img className="w-100" src="/ben_9.png" alt="" />
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <div className="ben_p">{getText("ben_h_10")}</div>
              <div className="ben_p mt-4">
                <img src="/icon_cor.png" alt="" />
                {getText("ben_h_11")}
              </div>
            </div>
            <div className="col-lg-3 col-8 mt-5 mb-5">
              <img className="w-100" src="/ben_10.png" alt="" />
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <div className="ben_p">{getText("ben_h_12")}</div>
              <div className="ben_p mt-4">
                <img src="/icon_cor.png" alt="" />
                {getText("ben_h_13")}
              </div>
            </div>
            <div className="col-lg-3 col-8 mt-5 mb-5">
              <img className="w-100" src="/ben_11.png" alt="" />
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <div className="ben_p">{getText("ben_h_14")}</div>
            </div>
            <div className="col-lg-3 col-8 mt-5 mb-5">
              <img className="w-100" src="/ben_12.png" alt="" />
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <div className="ben_p">{getText("ben_h_15")}</div>
            </div>{" "}
            <div className="col-lg-3 col-8 mt-5 mb-5">
              <img className="w-100" src="/ben_13.png" alt="" />
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <div className="ben_p">{getText("ben_h_16")}</div>
            </div>{" "}
            <div className="col-lg-3 col-8 mt-5 mb-5">
              <img className="w-100" src="/ben_14.png" alt="" />
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <div className="ben_p">{getText("ben_h_17")}</div>
              <div className="ben_p mt-4">
                <img src="/icon_cor.png" alt="" />
                {getText("ben_h_18")}
              </div>
            </div>
            <div className="col-lg-3 col-8 mt-5 mb-5">
              <img className="w-100" src="/ben_15.png" alt="" />
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <div className="ben_p">{getText("ben_h_19")}</div>
            </div>{" "}
            <div className="col-12 d-flex justify-content-center">
              <div className="rev_name">{getText("rev_name")}</div>
            </div>
            <div className="col-12">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  992: {
                    slidesPerView: 2,
                  },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div>
                    <div className="rev_h_2">{getText("rev_1")}</div>{" "}
                    <div className="rev_h">{getText("rev_2")}</div>
                    <div className="rev_h">{getText("rev_3")}</div>
                    <div className="rev_h">{getText("rev_4")}</div>
                    <div className="rev_h">{getText("rev_5")}</div>
                    <div className="rev_h">{getText("rev_6")}</div>
                    <div className="rev_h">{getText("rev_7")}</div>
                    <div className="rev_h">
                      <span>{getText("rev_8")}</span>
                    </div>
                    <div className="rev_h">
                      <span>{getText("rev_9")}</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="rev_h_2">{getText("rev_10_1")}</div>{" "}
                    <div className="rev_h">{getText("rev_10")}</div>
                    <div className="rev_h">{getText("rev_11")}</div>
                    <div className="rev_h">{getText("rev_11_1")}</div>
                    <div className="rev_h">
                      <span>{getText("rev_12")}</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="rev_h_2">{getText("rev_18")}</div>{" "}
                    <div className="rev_h">{getText("rev_13")}</div>
                    <div className="rev_h">{getText("rev_14")}</div>
                    <div className="rev_h">{getText("rev_15")}</div>
                    <div className="rev_h">{getText("rev_16")}</div>
                    <div className="rev_h">
                      <span>{getText("rev_17")}</span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <div className="benef_h_2">
                {getText("ben_n_3")} <span>{getText("ben_n_4")}</span>
              </div>
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

export default Benef;
