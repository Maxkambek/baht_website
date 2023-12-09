import { useState } from "react";
import InputMask from "react-input-mask";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RegistrationLayout } from "../../components";
import axios from "axios";
import { API_PATH, TOKEN } from "../../constants";
import { Checkbox } from "@mui/material";

const Login = () => {
  const [phone, setPhone] = useState("+998");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const login = () => {
    if (phone.length !== 19) {
      toast.error("Phone number must be at least 19 characters.");
      return;
    }
    axios
      .post(API_PATH + "/user/login/", { phone, password })
      .then((res) => {
        navigate("/dashboard");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem(TOKEN, res.data.token);
      })
      .catch((err) => {
        toast.error("Ma'lumotlaringizni to'g'ri kiriting");
      });
  };
  return (
    <div className="RegisterPhone Register">
      <RegistrationLayout />
      <div className="container">
        <div className="row">
          <div className="col-12 registerCenter">
            <div className="cards">
              <h1>Tizimga kirish</h1>

              <div className="cardBody">
                <InputMask
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  mask="+998 (99) 999-99-99"
                  maskChar=""
                  id="phone"
                  type="text"
                  placeholder="+998 (_) _ _ _"
                  className="form-control"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                />
                <button onClick={() => login()} className="btn myBtn">
                  Kirish
                </button>

                <Link to={"/register"}>Akkauntingiz yo'qmi?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
