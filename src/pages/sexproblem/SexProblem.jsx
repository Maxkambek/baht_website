import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { getText } from "../../locale";
import { useState } from "react";
import { USER_INFO } from "../../constants";
import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";

const SexProblem = () => {
  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState({});

  const collectData = (index, value) => {
    if (data.index) {
      data.index = value;
    } else {
      data[index] = value;
    }

    const existingData = JSON.parse(localStorage.getItem(USER_INFO));
    const newData = { ...existingData, ...data };

    localStorage.setItem(USER_INFO, JSON.stringify(newData));
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const navigate = useNavigate();
  return (
    <div className="ChildrenPage ">
      <div className="center">
        <div className="cards w-100">
          <h1>9.8. {getText("ans18_1")}</h1>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
              className="for_gap"
            >
              <FormControlLabel
                value={getText("ans18_2")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans18_2")}
                onChange={(e) => collectData("18.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_3")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans18_3")}
                onChange={(e) => collectData("18.2", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_4")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans18_4")}
                onChange={(e) => collectData("18.3", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_5")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans18_5")}
                onChange={(e) => collectData("18.4", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_6")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans18_6")}
                onChange={(e) => collectData("18.5", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_7")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans18_7")}
                onChange={(e) => collectData("18.6", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_8")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans18_8")}
                onChange={(e) => collectData("18.7", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_9")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans18_9")}
                onChange={(e) => collectData("18.8", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_10")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans18_10")}
                onChange={(e) => collectData("18.9", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_11")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans18_11")}
                onChange={(e) => collectData("18.10", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_12")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans18_12")}
                onChange={(e) => collectData("18.11", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_13")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans18_13")}
                onChange={(e) => collectData("18.12", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_14")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans18_14")}
                onChange={(e) => collectData("18.13", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_15")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans18_15")}
                onChange={(e) => collectData("18.14", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans18_16")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans18_16")}
                onChange={(e) => collectData("18.15", e.target.value)}
              />

              <button
                onClick={() => navigate("/child-problem")}
                className="btn myBtn"
              >
                {getText("next")}
              </button>
            </RadioGroup>
          </FormControl>

          {/* <button onClick={() => navigate("/children")} className="btn myBtn">
              Keyingi savol
            </button> */}
        </div>
      </div>
    </div>
  );
};

export default SexProblem;
