import React from "react";
import { RegistrationLayout } from "../../components";
import { useNavigate } from "react-router-dom";
import { getText } from "../../locale";

const EndQuestionsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="EndQuestionsPage Register">
      <RegistrationLayout />
      <div className="">
        <div className="">
          <div className=" registerCenter">
            <div className="modalCard">
              <h2>
                {getText('modal_end_1')}
              </h2>
              <h3> {getText('modal_end_2')}</h3>
              <h5>
              {getText('modal_end_3')}
              </h5>
              <h4>
              {getText('modal_end_4')}
              </h4>
              <h5>
              {getText('modal_end_5')}
              </h5>
              <button
                onClick={() => navigate("/start-questions-modal")}
                className="btn myBtn"
              >
                {getText('next_2')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndQuestionsPage;
