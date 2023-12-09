/* eslint-disable react/prop-types */
import logo from "../assets/logo.svg";
import russian from "../assets/russian.svg";
import notification from "../assets/notification.svg";
import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";
import vector3 from "../assets/vector3.png";
import profile from "../assets/profile.svg";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

import down from "../assets/down.svg";
import { useState } from "react";
import { LANGUANGE } from "../tools/constant";
import { getLanguage, getText } from "../locale";
const NavigationLayout = () => {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [burger, setBurger] = useState(false);

  const changeLanguage = (e) => {
    localStorage.setItem(LANGUANGE, e.target.value);
    document.location.reload(true);
  };

  return (
    <div className="NavigationLayout">
      <div className="row">
        <div className="col-12 top">
          <Link to="/dashboard" className="logo nav_110_logo">
            <img src={logo} alt="" />
          </Link>
          <div className="d-flex align-items-center">
            {/* <div className="notification cursor me-3">
              <img src={russian} alt="" />
            </div> */}
            {/* <div className="language cursor">
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
          {/* <div className="d-flex align-items-center">
            <span>
              <img src={profile} alt="" />
            </span>
            <h1>Azimova Dildora</h1>
          </div> */}
          <h2>{getText("reg_ques_1")}</h2>
          <Link
            onClick={() => setBurger(!burger)}
            className={`${
              location.pathname === "/first-last-name" ? "active" : ""
            }`}
            to={"/first-last-name"}
          >
            {getText("reg_ques_2")}
          </Link>
          <Link
            onClick={() => setBurger(!burger)}
            className={`${location.pathname === "/age" ? "active" : ""}`}
            to={"/age"}
          >
            {getText("reg_ques_3")}
          </Link>
          <Link
            onClick={() => setBurger(!burger)}
            className={`${location.pathname === "/location" ? "active" : ""}`}
            to={"/location"}
          >
            {getText("reg_ques_4")}
          </Link>
          <Link
            onClick={() => setBurger(!burger)}
            className={`${
              location.pathname === "/phone-number" ? "active" : ""
            }`}
            to={"/phone-number"}
          >
            {getText("reg_ques_5")}
          </Link>
          <Link
            onClick={() => setBurger(!burger)}
            className={`${location.pathname === "/education" ? "active" : ""}`}
            to={"/education"}
          >
            {getText("reg_ques_6")}
          </Link>
          <Link
            onClick={() => setBurger(!burger)}
            className={`${
              location.pathname === "/family-status" ? "active" : ""
            }`}
            to={"/family-status"}
          >
            {getText("reg_ques_7")}
          </Link>
          <Link
            onClick={() => setBurger(!burger)}
            className={`${location.pathname === "/children" ? "active" : ""}`}
            to={"/children"}
          >
            {getText("reg_ques_8")}
          </Link>
          <Link
            onClick={() => setBurger(!burger)}
            className={`${
              location.pathname === "/social-status" ? "active" : ""
            }`}
            to={"/social-status"}
          >
            {getText("reg_ques_9")}
          </Link>
          {/* <Link
            className={`${
              location.pathname === "/moral-problem" ? "active" : ""
            }`}
            to={"/moral-problem"}
          >
            10. Ҳозирги пайтдаги асосий муаммойингиз?
          </Link> */}
          <Accordion expanded={expanded} onChange={handleChange("panel2")}>
            <AccordionSummary
              expandIcon={<img src={down} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
              className="inner"
            >
              <Link
                onClick={() => setBurger(!burger)}
                className={`${
                  location.pathname === "/moral-problem" ? "active" : ""
                }`}
                to={"/moral-problem"}
              >
                9. {getText("ans10_1")}
              </Link>
            </AccordionSummary>
            <AccordionDetails>
              <Link
                onClick={() => setBurger(!burger)}
                className={`${
                  location.pathname === "/moral-problem" ? "active" : ""
                }`}
                to={"/moral-problem"}
              >
                9.1 {getText("ans10_2")}
              </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link
                onClick={() => setBurger(!burger)}
                className={`${
                  location.pathname === "/relative-problem" ? "active" : ""
                }`}
                to={"/relative-problem"}
              >
                9.2 {getText("ans12_1")}
              </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link
                onClick={() => setBurger(!burger)}
                className={`${
                  location.pathname === "/current-problem" ? "active" : ""
                }`}
                to={"/current-problem"}
              >
                9.3 {getText("ans13_1")}
              </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link
                onClick={() => setBurger(!burger)}
                className={`${
                  location.pathname === "/husband-problem" ? "active" : ""
                }`}
                to={"/husband-problem"}
              >
                9.4 {getText("ans14_1")}
              </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link
                onClick={() => setBurger(!burger)}
                className={`${
                  location.pathname === "/divorce-problem" ? "active" : ""
                }`}
                to={"/divorce-problem"}
              >
                9.5 {getText("ans15_1")}
              </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link
                onClick={() => setBurger(!burger)}
                className={`${
                  location.pathname === "/after-divorce-problem" ? "active" : ""
                }`}
                to={"/after-divorce-problem"}
              >
                9.6. {getText("ans16_1")}
              </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link
                onClick={() => setBurger(!burger)}
                className={`${
                  location.pathname === "/no-marriage-problem" ? "active" : ""
                }`}
                to={"/no-marriage-problem"}
              >
                9.7. {getText("ans17_1")}
              </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link
                onClick={() => setBurger(!burger)}
                className={`${
                  location.pathname === "/sex-problem" ? "active" : ""
                }`}
                to={"/sex-problem"}
              >
                9.8. {getText("ans18_1")}
              </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link
                onClick={() => setBurger(!burger)}
                className={`${
                  location.pathname === "/child-problem" ? "active" : ""
                }`}
                to={"/child-problem"}
              >
                9.9. {getText("ans19_1")}
              </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link
                onClick={() => setBurger(!burger)}
                className={`${
                  location.pathname === "/work-problem" ? "active" : ""
                }`}
                to={"/work-problem"}
              >
                9.10. {getText("ans20_1")}
              </Link>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="col-lg-9 right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default NavigationLayout;
