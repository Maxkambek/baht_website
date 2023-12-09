import { useLocation, useNavigate } from "react-router-dom";
import down from "../../assets/down.svg";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import { API_PATH, CONFIG, USER_ID, USER_INFO } from "../../constants";
import axios from "axios";
import { toast } from "react-toastify";
import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";

const WorkProblem = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState({});

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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

  const navigate = useNavigate();

  const allData = JSON.parse(localStorage.getItem(USER_INFO));

  const finish = () => {
    const last_name = localStorage.getItem("lastname");
    const first_name = localStorage.getItem("name");
    const given_name = localStorage.getItem("surname");
    const age = localStorage.getItem("age");
    const address = localStorage.getItem("districs");
    const phone = localStorage.getItem("phone");
    const eduction = localStorage.getItem("education");
    const family_status = localStorage.getItem("family_status");
    const children = localStorage.getItem("children");
    const social_status = localStorage.getItem("social");
    console.log(CONFIG);
    axios
      .post(
        API_PATH + "/register-questions/question/",
        {
          last_name,
          first_name,
          given_name,
          age,
          address,
          phone,
          eduction,
          family_status,
          children,
          social_status,
        },
        CONFIG
      )
      .then((res) => {
        finish2(res.data.id);
      });
  };

  const finish2 = (id) => {
    Object.entries(allData).forEach(([key, value]) => {
      axios
        .post(API_PATH + "/register-questions/question-variant/", {
          index_question: key,
          variant_name: value,
          question: id,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    toast.success("Malumotingiz muvaffaqiyatli jo'natildi");
    navigate("/end-questions", { replace: true });
  };

  return (
    <div className="ChildrenPage ">
      <div className="center">
        <div className="cards w-100">
          <h1>9.10. {getText("ans20_1")}</h1>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
              className="for_gap"
            >
              <FormControlLabel
                value={getText("ans20_2")}
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
                label={getText("ans20_2")}
                onChange={(e) => collectData("20.1", e.target.value)}
              />

              <FormControlLabel
                value={getText("ans20_3")}
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
                label={getText("ans20_3")}
                onChange={(e) => collectData("20.2", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_4")}
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
                label={getText("ans20_4")}
                onChange={(e) => collectData("20.3", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_5")}
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
                label={getText("ans20_5")}
                onChange={(e) => collectData("20.4", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_6")}
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
                label={getText("ans20_6")}
                onChange={(e) => collectData("20.5", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_7")}
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
                label={getText("ans20_7")}
                onChange={(e) => collectData("20.6", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_8")}
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
                label={getText("ans20_8")}
                onChange={(e) => collectData("20.7", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_9")}
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
                label={getText("ans20_9")}
                onChange={(e) => collectData("20.8", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_10")}
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
                label={getText("ans20_10")}
                onChange={(e) => collectData("20.9", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_11")}
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
                label={getText("ans20_11")}
                onChange={(e) => collectData("20.10", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_12")}
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
                label={getText("ans20_12")}
                onChange={(e) => collectData("20.11", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_13")}
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
                label={getText("ans20_13")}
                onChange={(e) => collectData("20.12", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_14")}
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
                label={getText("ans20_14")}
                onChange={(e) => collectData("20.13", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_15")}
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
                label={getText("ans20_15")}
                onChange={(e) => collectData("20.14", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_16")}
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
                label={getText("ans20_16")}
                onChange={(e) => collectData("20.15", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_17")}
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
                label={getText("ans20_17")}
                onChange={(e) => collectData("20.16", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_18")}
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
                label={getText("ans20_18")}
                onChange={(e) => collectData("20.17", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_19")}
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
                label={getText("ans20_19")}
                onChange={(e) => collectData("20.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_20")}
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
                label={getText("ans20_20")}
                onChange={(e) => collectData("20.19", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_21")}
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
                label={getText("ans20_21")}
                onChange={(e) => collectData("20.20", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_22")}
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
                label={getText("ans20_22")}
                onChange={(e) => collectData("20.21", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_23")}
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
                label={getText("ans20_23")}
                onChange={(e) => collectData("20.22", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_24")}
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
                label={getText("ans20_24")}
                onChange={(e) => collectData("20.23", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_25")}
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
                label={getText("ans20_25")}
                onChange={(e) => collectData("20.24", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_26")}
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
                label={getText("ans20_26")}
                onChange={(e) => collectData("20.25", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_27")}
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
                label={getText("ans20_27")}
                onChange={(e) => collectData("20.26", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_28")}
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
                label={getText("ans20_28")}
                onChange={(e) => collectData("20.27", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_29")}
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
                label={getText("ans20_29")}
                onChange={(e) => collectData("20.28", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans20_30")}
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
                label={getText("ans20_30")}
                onChange={(e) => collectData("20.29", e.target.value)}
              />
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans20_31")}
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
                      label={getText("ans20_31")}
                      onChange={(e) => collectData("20.30", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans20_32")}
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
                      onChange={(e) => collectData("20.31", e.target.value)}
                      label={getText("ans20_32")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans20_33")}
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
                      onChange={(e) => collectData("20.32", e.target.value)}
                      label={getText("ans20_33")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans20_34")}
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
                      onChange={(e) => collectData("20.33", e.target.value)}
                      label={getText("ans20_34")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans20_35")}
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
                      onChange={(e) => collectData("20.34", e.target.value)}
                      label={getText("ans20_35")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans20_36")}
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
                      onChange={(e) => collectData("20.35", e.target.value)}
                      label={getText("ans20_36")}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <button
                onClick={finish}
                // onClick={() => navigate("/end-questions")}
                className="btn myBtn"
              >
                {getText("next2")}
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

export default WorkProblem;
