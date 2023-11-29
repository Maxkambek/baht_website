import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_PATH, CONFIG, ORDER_ID, TOKEN } from "../constants";
import { toast } from "react-toastify";
import { getLanguage, getText } from "../locale";
import Footer from "./Footer";
import { LANGUANGE } from "../tools/constant";

const Buy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handlePost2 = async (e) => {
    const token = localStorage.getItem(TOKEN);
    if (!token) {
      navigate("/login", { replace: true });
    }
    const { data } = await axios.post(
      API_PATH + "/order/order-create/",
      {
        type_order: content,
      },
      CONFIG
    );
    if (data) {
      localStorage.setItem(ORDER_ID, data.order_id);
      navigate("/pay", { replace: true });
    } else {
      toast.error("Xatolik yuz berdi qaytadan urunib ko'ring");
    }
  };

  const handlePost = async (e) => {
    const token = localStorage.getItem(TOKEN);
    console.log(CONFIG);
    if (!token) {
      navigate("/register", { replace: true });
    }
    const { data } = await axios.post(
      API_PATH + "/order/order-create/",
      {
        type_order: content,
      },
      CONFIG
    );
    if (data) {
      localStorage.setItem(ORDER_ID, data.order_id);
      if (content === "full") {
        window.location.href = `https://my.click.uz/services/pay?service_id=27907&merchant_id=20324&amount=2400000.00&transaction_param=${data.order_id}&return_url=localhost:5173/#/elon`;
      }
      if (content === "week") {
        window.location.href = `https://my.click.uz/services/pay?service_id=27907&merchant_id=20324&amount=350000.00&transaction_param=${data.order_id}&return_url=localhost:5173/#/elon`;
      }
      if (content === "month") {
        window.location.href = `https://my.click.uz/services/pay?service_id=27907&merchant_id=20324&amount=1000.00&transaction_param=${data.order_id}&return_url=localhost:5173/#/elon`;
      }
    } else {
      toast.error("Xatolik yuz berdi qaytadan urunib ko'ring");
    }
  };

  const changeLanguage = (e) => {
    localStorage.setItem(LANGUANGE, e.target.value);
    document.location.reload(true);
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={`myModal ${isOpen && "active"}`}
      >
        <div className="cards">
          <div onClick={() => handlePost("click")} className="pay">
            <img src="/img/click.svg" alt="" />
          </div>
          <div onClick={() => handlePost2("payme")} className="pay">
            <img src="/img/pay.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="Buy">
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
              <img className="buy_logo" src="/logo.png" alt="" />
            </div>
            <div className="col-12">
              <div className="b_h_1">{getText("b_h_1")}</div>
              <div className="b_h_1">{getText("b_h_2")}</div>
              <div className="b_name">{getText("b_h_3")}</div>
              <div className="b_h_2">
                <span>{getText("b_h_4")} </span> <br /> {getText("b_h_5")}
                <Link to="/welcome-note" className="b_h_2_2">
                  {getText("b_h_6")}
                </Link>
              </div>

              <div className="b_h_2">
                <span>{getText("b_h_7")}</span> <br /> {getText("b_h_8")}
                <Link to="/buy" className="b_h_2_2">
                  {getText("b_h_9")}
                </Link>
              </div>

              <div className="b_name_2"> {getText("b_h_10")}</div>
              <div className="b_p_1">{getText("b_h_11")}</div>
              <div className="b_p_2">{getText("b_h_12")}</div>
            </div>

            <div className="col-lg-4 mt-lg-0 mt-5">
              <div className="b_box">
                <div className="b_up">
                  <div className="b_up_h"> {getText("b_h_13")}</div>
                  <div className="b_up_h_2">{getText("b_h_14")}</div>
                  <div className="b_up_h">{getText("b_h_15")}</div>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(true), setContent("month");
                  }}
                  className="b_link btn"
                  to=""
                >
                  {getText("b_h_buy")}
                </button>
              </div>
            </div>
            <div className="col-lg-4 mt-lg-0 mt-5">
              <div className="b_box">
                <div className="b_up">
                  <div className="b_up_h">{getText("b_h_16")}</div>
                  <div className="b_up_h_2">{getText("b_h_17")}</div>
                  <div className="b_up_h">{getText("b_h_15")}</div>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(true), setContent("week");
                  }}
                  className="b_link btn"
                  to=""
                >
                  {getText("b_h_buy")}
                </button>
              </div>
            </div>
            <div className="col-lg-4 mt-lg-0 mt-5">
              <div className="b_box">
                <div className="b_up">
                  <div className="b_up_h">
                    {getText("b_h_18")}
                    <span>{getText("b_h_19")}</span>
                    {getText("b_h_20")}
                  </div>
                  <div className="b_up_h_2_2">{getText("b_h_21")}</div>
                  <div className="b_up_h_2">{getText("b_h_22")}</div>
                  {/* <div className="b_up_h">{getText('b_h_15')}</div> */}
                </div>
                <button
                  onClick={() => {
                    setIsOpen(true), setContent("full");
                  }}
                  className="b_link btn"
                  to=""
                >
                  {getText("b_h_buy")}
                </button>
              </div>
            </div>
            <div className="col-12 mt-5">
              <div className="b_h_2">
                <span>{getText("b_h_23")} </span> <br />
                {getText("b_h_24")}
              </div>

              <div className="b_h_4">
                <img src="/icon_cor.png" alt="" />
                {getText("b_h_25")}
                <span>{getText("b_h_26")} </span>
                {getText("b_h_27")}
              </div>

              <div className="b_h_2">
                <span>{getText("b_h_28")} </span> <br /> {getText("b_h_29")}
              </div>

              <div className="b_h_4">
                <img src="/icon_cor.png" alt="" />
                {getText("b_h_30")}
              </div>

              <div className="b_h_2">
                <span>{getText("b_h_31")} </span> <br /> {getText("b_h_32")}
              </div>

              <div className="b_h_4">
                <img src="/icon_cor.png" alt="" />
                {getText("b_h_34")}
              </div>

              <div className="b_h_4">
                <img src="/icon_cor.png" alt="" />
                {getText("b_h_35")}
              </div>

              <div className="b_h_4">
                <img src="/icon_cor.png" alt="" />
                {getText("b_h_36")}{" "}
                <span>
                  {" "}
                  <br /> {getText("b_h_37")}
                </span>{" "}
                {getText("b_h_38")}
              </div>

              <div className="b_h_4">
                <img src="/icon_cor.png" alt="" />
                {getText("b_h_39")}
              </div>
              <div className="b_h_4">
                <img src="/icon_cor.png" alt="" />
                {getText("b_h_40")}
              </div>
              <div className="b_h_4">
                <img src="/icon_cor.png" alt="" />
                {getText("b_h_41")}
              </div>

              <div className="b_h_2">
                <span>{getText("b_h_42")} </span> {getText("b_h_43")}
              </div>

              <div className="b_h_4">
                <img src="/icon_cor.png" alt="" />
                {getText("b_h_44")}{" "}
                <Link to="/welcome-note" className="b_h_4_l">
                  {getText("b_h_45")}
                </Link>{" "}
                {getText("b_h_46")}
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

export default Buy;
