import React from "react";
import logo from "../assets/logo.svg";
import russian from "../assets/russian.svg";
import notification from "../assets/notification.svg";
import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";
import vector3 from "../assets/vector3.png";
import profile from "../assets/profile.svg";
import ptich from "../assets/ptich.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import down from "../assets/down.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_PATH, CONFIG } from "../constants";
import { getLanguage, getText } from "../locale";
import { LANGUANGE } from "../tools/constant";

const PrarabotkaLayout = () => {
  const [expanded, setExpanded] = useState(true);
  const [pk, setPk] = useState(1);
  const location = useLocation();
  const [allQues, setAllQues] = useState([]);
  const [oneQues, setOneQues] = useState([]);
  const [answer, setAnswer] = useState("");
  const [yesOrNo, setYesOrNo] = useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [expanded2, setExpanded2] = useState(false);

  const handleChange2 = (pane2) => (event, isExpanded2) => {
    setExpanded2(isExpanded2 ? pane2 : false);
  };

  const getAllQues = () => {
    axios.get(API_PATH + "/ru/question/for-sidebar/").then((res) => {
      setAllQues(res.data);
    });
  };

  const getById = () => {
    axios.get(API_PATH + `/ru/question/by-id/${pk}/`).then((res) => {
      setOneQues(res.data);
      // console.log(res.data);
    });
  };
  useEffect(() => {
    getAllQues();
    getById();
  }, [pk]);

  const sendAnswer = () => {
    axios.post(
      API_PATH + "ru/question/check-test/",
      {
        question_id: pk,
        yes_or_no: yesOrNo,
        answer,
      },
      CONFIG
    );
    setPk(pk + 1);
  };

  const [burger, setBurger] = useState(false);

  const changeLanguage = (e) => {
    localStorage.setItem(LANGUANGE, e.target.value);
    document.location.reload(true);
  };

  return (
    <div className="NavigationLayout2 HundredQuestionsLayout">
      <div className="row">
        <div className="col-12 top">
          <Link to="/" className="logo nav_110_logo">
            <img src={logo} alt="" />
          </Link>
          <div className="d-flex align-items-center">
            {/* <div className="notification cursor me-3">
              <img src={russian} alt="" />
            </div>
            <div className="language cursor">
              <img src={notification} alt="" />
            </div> */}
            <select className="select" onChange={changeLanguage} name="" id="">
              <option selected={getLanguage() === "ru"} value="ru">
                Узб
              </option>
              <option selected={getLanguage() === "uz"} value="uz">
                Uzb
              </option>
            </select>

            <div
              onClick={() => setBurger(!burger)}
              className={`burger pr-4 ml-auto d-flex d-lg-none ${
                burger ? "burgered" : ""
              }`}
            >
              <div className="burger_up "></div>
              <div className="burger_down"></div>
            </div>
          </div>
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
      <div className="row bottom">
        <div className={`col-lg-3 left ${burger ? "active" : ""}`}>
          <div className="d-flex align-items-center">
            {/* <span>
              <img src={profile} alt="" />
            </span> */}
            {/* <h1>Azimova Dildora</h1> */}
          </div>
          <h2>{getText("reg_ques_1")}</h2>
          <Link
            to="/prorabotka-1"
            className={`${
              location.pathname === "/prorabotka-1" ? "active" : ""
            }`}
          >
            1. Савол
          </Link>
          <Link
            to="/prorabotka-2"
            className={`${
              location.pathname === "/prorabotka-2" ? "active" : ""
            }`}
          >
            2. Савол
          </Link>
          <Link
            to="/prorabotka-3"
            className={`${
              location.pathname === "/prorabotka-3" ? "active" : ""
            }`}
          >
            3. Савол
          </Link>
          <Link
            to="/prorabotka-4"
            className={`${
              location.pathname === "/prorabotka-4" ? "active" : ""
            }`}
          >
            4. Савол
          </Link>
          <Link
            to="/prorabotka-5"
            className={`${
              location.pathname === "/prorabotka-5" ? "active" : ""
            }`}
          >
            5. Савол
          </Link>
        </div>
        <div className="col-lg-9 right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PrarabotkaLayout;
