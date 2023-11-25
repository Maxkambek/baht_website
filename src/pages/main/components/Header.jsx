import logo from "@/assets/logoHome.svg";
import Aos from "aos";
import { useEffect } from "react";
import { LANGUANGE } from "../../../tools/constant";
import { getLanguage, getText } from "../../../locale";
import { Link, useNavigate } from "react-router-dom";
import { TOKEN } from "../../../constants";

const Header = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1500,
    });
  }, []);

  const changeLanguage = (e) => {
    localStorage.setItem(LANGUANGE, e.target.value);
    document.location.reload(true);
  };

  const login = () => {
    const token = localStorage.getItem(TOKEN);
    if (token) {
      navigate("/start-questions-modal", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  };

  return (
    <div className="Header">
      <div data-aos="fade-right" className="left headerWeb">
        <img src="/img/head_1.png" alt="" />
      </div>
      <div data-aos="fade-left" className="right headerWeb">
        <img src="/img/head_3.png" alt="" />
      </div>

      {/* <div className="headerMobile">
        <img src="/headerBg.JPG" alt="" />
      </div> */}

      <select className="select" onChange={changeLanguage} name="" id="">
        <option selected={getLanguage() === "ru"} value="ru">
          Узб
        </option>
        <option selected={getLanguage() === "uz"} value="uz">
          Uzb
        </option>
      </select>

      <div className="mob_box">
        <img src="/img/logo2.png" alt="" className="logo" />
        <img data-aos="fade-right" src="/img/head_1.png" alt="" />
        <img data-aos="fade-left" src="/img/head_2.png" alt="" />
      </div>

      <div className="container">
        <div className="row z-index">
          <div className="col-lg-8 mx-auto z-index">
            {/* <div onClick={login} className="nav_login">
              Login
            </div> */}
            <div data-aos-delay="500" className="logo">
              <img className="d-lg-block d-none" src={logo} alt="" />
              {/* <img
                className="d-lg-none d-block"
                src={"/img/logoWhite.svg"}
                alt=""
              /> */}
            </div>
            <h1 data-aos-delay="800" data-aos="fade-up" className="bold">
              {getText("h_n_1")} <br />
              {getText("h_n_2")}
            </h1>
            <p data-aos-delay="900" data-aos="fade-up" className="roman">
              {getText("h_n_3")}
            </p>
            <p data-aos-delay="1000" data-aos="fade-up">
              {getText("h_n_4")}
            </p>
            <p data-aos-delay="1100" data-aos="fade-up">
              {getText("h_n_5")}
              <span>“MY PSIXOLOG”</span> {getText("h_n_7")}
            </p>
          </div>
        </div>
        {/* <div className="blur"></div> */}
      </div>
    </div>
  );
};

export default Header;
