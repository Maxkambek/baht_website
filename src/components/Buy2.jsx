import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_PATH, CONFIG, ORDER_ID, TOKEN } from "../constants";
import { toast } from "react-toastify";
import { getLanguage, getText } from "../locale";
import Footer from "./Footer";
import { LANGUANGE } from "../tools/constant";

const Buy2 = () => {
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
    <div className="Buy mt-5">
      <div className="container mt-5">
        <div className="my_buy_2">
          <div className="b_p_1">{getText("b_h_11")}</div>
          <div className="b_p_2">{getText("b_h_12")}</div>
        </div>
        <div className="row">
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
        </div>
      </div>
    </div>
  );
};

export default Buy2;
