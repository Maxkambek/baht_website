/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { RegistrationLayout } from "../../../components";
import InputMask from "react-input-mask";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../../../redux/AuthSlice";
import { toast } from "react-toastify";
import { PHONE } from "../../../constants";
import { Checkbox } from "@mui/material";
import { FileViewer } from "react-file-viewer";

const RegisterPhone = () => {
  const [phone, setPhone] = useState("+998");
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const fileUrl = "/src/assets/maxfiy.docx";
  };

  const register = () => {
    if (phone.length !== 19) {
      toast.error("Phone number must be at least 19 characters.");
      return;
    }
    dispatch(authAction.register(phone));
    localStorage.setItem(PHONE, phone);
    navigate("/phone-verify");
  };
  useEffect(() => {}, [checked]);
  return (
    <div className="RegisterPhone Register">
      <RegistrationLayout />
      <div className="container">
        <div className="row">
          <div className="col-12 registerCenter">
            <div className="cards mx-auto">
              <h1>Ro’yhatdan o’tish</h1>

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
                <button onClick={() => register()} className="btn myBtn">
                  SMS jo’natish
                </button>

                <Link to={"/login"}>Akkauntingiz bormi?</Link>
                <div className="check_box mt-5">
                  <Checkbox
                    id="check"
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                  <a className="m-0" href="/maxfiy.docx">
                    <label
                      htmlFor="check"
                      onClick={() => {
                        setChecked(!checked), handleButtonClick;
                      }}
                    >
                      Siz ro'yhatdan o'tish orqali Maxfiylik siyosatiga
                      roziligingizni bildirasiz
                    </label>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPhone;
