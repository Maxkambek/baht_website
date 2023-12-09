import { useNavigate } from "react-router-dom";
import { setAges } from "../../redux/UserSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getText } from "../../locale";

const AgePage = () => {
  const [age, setAge] = useState(localStorage.getItem("age") || "");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeAge = (e) => {
    localStorage.setItem("age", age);
    e.preventDefault();
    dispatch(setAges({ age }));
    navigate("/location", { replace: true });
  };
  return (
    <div className="AgePage ">
      <div className="center">
        <form onSubmit={changeAge} className="cards">
          <h1>{getText("reg_ques_3")}</h1>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="text"
            placeholder={getText("inp_q_4")}
            className="form-control"
          />

          <button type="submit" className="btn myBtn">
            {getText("next")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgePage;
