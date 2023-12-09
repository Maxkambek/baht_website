import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setPhoneNumber } from "../../redux/UserSlice";
import { getText } from "../../locale";

const PhoneNumberPage = () => {
  const [phone, setPhone] = useState(localStorage.getItem("phone") || "");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changePhone = (e) => {
    e.preventDefault();
    dispatch(setPhoneNumber({ phone }));
    localStorage.setItem("phone", phone);
    navigate("/education", { replace: true });
  };
  return (
    <div className="PhoneNumberPage ">
      <div className="center">
        <form onSubmit={changePhone} className="cards">
          <h1>4. {getText("inp_q_9")}</h1>

          <input
            placeholder={getText("inp_q_9")}
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control "
            required
          />

          <button type="submit" className="btn myBtn">
            {getText("next")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PhoneNumberPage;
