import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setEdu } from "../../redux/UserSlice";
import { toast } from "react-toastify";
import { getText } from "../../locale";

const EducationPage = () => {
  const [expanded, setExpanded] = useState(false);

  const [education, setEducation] = useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEdu = () => {
    if (education.length === 0) {
      toast.error("Malumotingizni tanlang.");
      return;
    }
    dispatch(setEdu({ education }));
    localStorage.setItem("education", education);
    navigate("/family-status", { replace: true });
  };
  return (
    <div className="EducationPage ">
      <div className="center">
        <div className="cards">
          <h1>5. {getText("inp_m_1")}</h1>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
              className="for_gap"
            >
              <FormControlLabel
                onChange={(e) => setEducation(e.target.value)}
                value={getText("inp_m_5")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("inp_m_5")}
              />
              <FormControlLabel
                onChange={(e) => setEducation(e.target.value)}
                value={getText("inp_m_2")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("inp_m_2")}
              />
              <FormControlLabel
                onChange={(e) => setEducation(e.target.value)}
                value={getText("inp_m_3")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("inp_m_3")}
              />
              <FormControlLabel
                onChange={(e) => setEducation(e.target.value)}
                value={getText("inp_m_4")}
                control={
                  <Radio
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                  />
                }
                label={getText("inp_m_4")}
              />
            </RadioGroup>
          </FormControl>
          <button onClick={changeEdu} type="button" className="btn myBtn">
            {getText("next")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
