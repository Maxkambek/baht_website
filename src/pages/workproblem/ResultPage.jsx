import React, { useEffect, useState } from "react";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";
import vector3 from "../../assets/vector3.png";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { API_PATH, CONFIG, USER_INFO } from "../../constants";
import { getText } from "../../locale";
import axios from "axios";

const ResultPage = () => {
  // const data = [];
  // const allData = JSON.parse(localStorage.getItem(USER_INFO));
  // Object.entries(allData).forEach(([key, value]) => {
  //   data.push(value);
  // });

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(API_PATH + "/uz/question/result-test/", CONFIG).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <div className="NavigationLayout ResultPage">
        <div className="row">
          <div className="col-12 top">
            <Link to="/" className="logo nav_110_logo">
              <img src={logo} alt="" />
            </Link>
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
          <div className="col-12">
            <div className="container">
              <div className="result_h"> {getText("result_page_h")}</div>
            </div>
          </div>
          <div className="col-12 muommo_page">
            <div className="container">
              <div className="result_p">
                {getText("result_page_p")} {data?.length}
              </div>
              {data &&
                data.map((item, index) => (
                  <div key={index} className="result_item">
                    <p
                      dangerouslySetInnerHTML={{ __html: item.question.name }}
                    ></p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 buy_btn">
            <div className="container">
              <Link to="/buy" className="lib_h_buy">
                {getText("result_page_buy")}
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default ResultPage;
