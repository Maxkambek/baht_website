import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNames, userAction } from "../../redux/UserSlice";
import { getText } from "../../locale";

const FirstLastNamePage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeFirstLastNameChange = (e) => {
    e.preventDefault();
    dispatch(setNames({ name, surname, lastName }));
    localStorage.setItem("name", name);
    localStorage.setItem("surname", surname);
    localStorage.setItem("lastname", lastName);
    navigate("/age", { replace: true });
  };
  return (
    <div className="FirstLastNamePage ">
      <div className="center">
        <form onSubmit={changeFirstLastNameChange} className="cards">
          <h1>{getText ('reg_ques_2')}</h1>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder={getText('inp_q_1')}
            className="form-control"
            required
          />
          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            type="text"
            placeholder={getText('inp_q_2')}
            className="form-control"
            required
          />
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder={getText('inp_q_3')}
            className="form-control"
            required
          />
          <button type="submit" className="btn myBtn">
            {getText('next')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FirstLastNamePage;
