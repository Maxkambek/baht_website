import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { API_PATH } from "../../constants";
import { setLocation } from "../../redux/UserSlice";
import { getText } from "../../locale";

const LocationPage = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [countryName, setCountryName] = useState("");

  const [regions, setRegions] = useState([]);
  const [region, setRegion] = useState("");
  const [regionName, setRegionName] = useState("");

  const [districs, setDistrics] = useState([]);
  const [distric, setDistric] = useState(
    localStorage.getItem("districs") || ""
  );
  const [districName, setDistricName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeLocation = (e) => {
    e.preventDefault();
    dispatch(setLocation(distric));
    localStorage.setItem("districs", distric);
    navigate("/phone-number", { replace: true });
  };

  useEffect(() => {
    const getCountry = async () => {
      const { data } = await axios(API_PATH + "user/country/");
      setCountries(data);
    };
    getCountry();
  }, []);

  useEffect(() => {
    const getRegion = async () => {
      const { data } = await axios(
        API_PATH + "user/regions/?country_id=" + country
      );
      setRegions(data);
    };
    getRegion();
  }, [country]);

  useEffect(() => {
    const getDistric = async () => {
      const { data } = await axios(
        API_PATH + "user/districs/?region_id=" + region
      );
      setDistrics(data);
    };
    getDistric();
  }, [region]);

  const handleChangeCountry = (e) => {
    const selectedValue = e.target.value;
    setCountryName(selectedValue);

    const selectedItem = countries.find((item) => item.name === selectedValue);
    if (selectedItem) {
      setCountry(selectedItem.id);
    }
  };

  const handleChangeRegion = (e) => {
    const selectedValue = e.target.value;
    setRegionName(selectedValue);

    const selectedItem = countries.find((item) => item.name === selectedValue);
    if (selectedItem) {
      setRegion(selectedItem.id);
    }
  };

  const handleChangeDistric = (e) => {
    const selectedValue = e.target.value;
    setDistricName(selectedValue);

    const selectedItem = countries.find((item) => item.name === selectedValue);
    if (selectedItem) {
      setDistric(selectedItem.id);
    }
  };

  return (
    <div className="LocationPage ">
      <div className="center">
        <form onSubmit={changeLocation} className="cards">
          <h1>{getText("inp_q_5")}</h1>
          {/* <select
            placeholder="Mamlakatni tanlang"
            className="form-control my_select"
            name="mamlakat"
            id="123"
            onChange={handleChangeCountry}
          >
            <option selected disabled hidden value="">
              {getText("inp_q_6")}
            </option>
            {countries &&
              countries.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
          </select> */}

          {/* <select
            placeholder=""
            className="form-control "
            name="viloyat"
            id="1234"
            onChange={handleChangeRegion}
          >
            <option selected disabled hidden value="">
              {getText("inp_q_7")}
            </option>
            {regions &&
              regions.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
          </select> */}

          <select className="form-control " name="viloyat" id="1234">
            <option selected disabled hidden value="">
              {getText("inp_q_8")}
            </option>

            <option key="1" value="Andijon viloyati">
              {getText("add_1")}
            </option>

            <option key="1" value="Andijon viloyati">
              {getText("add_2")}
            </option>

            <option key="1" value="Andijon viloyati">
              {getText("add_3")}
            </option>

            <option key="1" value="Andijon viloyati">
              {getText("add_4")}
            </option>

            <option key="1" value="Andijon viloyati">
              {getText("add_5")}
            </option>

            <option key="1" value="Andijon viloyati">
              {getText("add_6")}
            </option>

            <option key="1" value="Andijon viloyati">
              {getText("add_7")}
            </option>

            <option key="1" value="Andijon viloyati">
              {getText("add_8")}
            </option>

            <option key="1" value="Andijon viloyati">
              {getText("add_9")}
            </option>

            <option key="1" value="Andijon viloyati">
              {getText("add_10")}
            </option>

            <option key="1" value="Andijon viloyati">
              {getText("add_11")}
            </option>

            <option key="1" value="Andijon viloyati">
              {getText("add_12")}
            </option>

            <option key="1" value="Andijon viloyati">
              {getText("add_13")}
            </option>

            <option key="1" value="Andijon viloyati">
              {getText("add_14")}
            </option>
          </select>
          <input
            value={distric}
            onChange={(e) => setDistric(e.target.value)}
            type="text"
            className="form-control"
            placeholder={getText("manzil_yoz")}
          />

          <button type="submit" className="btn myBtn">
            {getText("next")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LocationPage;
