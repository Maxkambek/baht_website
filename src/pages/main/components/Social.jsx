import social1 from "@/assets/insta.svg";
import social2 from "@/assets/tg.svg";
// import social3 from "@/assets/fb.svg";
import social4 from "@/assets/youtube.svg";
import social5 from "@/assets/tiktok.svg";
import Aos from "aos";
import { useEffect } from "react";

import { getText } from "../../../locale";


const Social = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1500,
    });
  }, []);
  return (
    <div className="Social">
      <div data-aos-delay="500" data-aos="fade-right" className="leftPat">
        <img src="/patLeft.png" alt="" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 data-aos-delay="500" data-aos="fade-up" className="bold">
              {getText('h_n_23')}
            </h1>
            <div className="wrap">
              <a
                data-aos-delay="500"
                data-aos="fade-right"
                target="_blank"
                href="https://instagram.com/bahtwoman_uz?igshid=MzMyNGUyNmU2YQ=="
              >
                <img src={social1} alt="" />
              </a>
              <a
                data-aos-delay="500"
                data-aos="fade-up"
                target="_blank"
                href="https://t.me/bahtwoman_uz"
              >
                <img src={social2} alt="" />
              </a>
              {/* <a target="_blank" href="#">
                <img src={social3} alt="" />
              </a> */}
              <a
                data-aos-delay="500"
                data-aos="fade-up"
                target="_blank"
                href="https://youtube.com/@bahtwomanuz2979?si=xy_DoOXG-WyWlupB"
              >
                <img src={social4} alt="" />
              </a>
              <a
                data-aos-delay="500"
                data-aos="fade-left"
                target="_blank"
                href="https://www.tiktok.com/@bahtwoman.uz?_t=8hY2UgRcX3K&_r=1 "
              >
                <img src={social5} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
