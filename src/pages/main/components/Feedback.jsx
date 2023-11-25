import logo from "@/assets/logo.svg";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import axios from "axios";
import { useState, useEffect } from "react";
import { BOT_TOKEN, CHAT_ID } from "../../../constants";
import Aos from "aos";
import { getText } from "../../../locale";

const Feedback = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1500,
    });
  }, []);

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("+998");

  const [mes, setMes] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  let text = `Name: ${name}.%0APhone number: ${phone}.%0AMessage: ${mes}`;

  const sendFeedback = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (phone.length !== 19) {
      toast.error("Phone number is required. Try again.");
      setIsLoading(false);
    } else {
      const { data } = axios.post(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
      );
      toast.success(`Ma'lumotlaringiz jo'natildi!`);
      setIsLoading(false);
      setName("");
      setPhone("+998");
    }
  };
  return (
    <>
      <div className="Feedback">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h1 data-aos-delay="500" data-aos="fade-up" className="bold">
                {getText("h_n_24")}
              </h1>
              <form onSubmit={sendFeedback} className="cards">
                <input
                  data-aos-delay="500"
                  data-aos="fade-up"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={getText(`feed_inp_1`)}
                  type="text"
                  className="form-control "
                />

                <InputMask
                  data-aos-delay="500"
                  data-aos="fade-up"
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
                  data-aos-delay="500"
                  data-aos="fade-up"
                  value={mes}
                  onChange={(e) => setMes(e.target.value)}
                  placeholder={getText(`feed_inp_2`)}
                  type="text"
                  className="form-control "
                />

                <button
                  data-aos-delay="500"
                  data-aos="fade-up"
                  disabled={isLoading}
                  type="submit"
                  className="btn myBtn roman"
                >
                  {isLoading && (
                    <i className="spinner-border spinner-border-sm text-dark me-2"></i>
                  )}
                  {getText("h_n_25")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="Logo">
        <img src={logo} alt="" />
      </div>
    </>
  );
};

export default Feedback;
