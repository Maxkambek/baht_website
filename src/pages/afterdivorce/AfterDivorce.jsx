import { useNavigate } from "react-router-dom";
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
import { USER_INFO } from "../../constants";
import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";

const AfterDivorce = () => {
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
  return (
    <div className="ChildrenPage ">
      <div className="center">
        <div className="cards w-100">
          <h1>9.6. {getText("ans16_1")}</h1>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
              className="for_gap"
            >
              <FormControlLabel
                value={getText("ans16_2")}
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
                label={getText("ans16_2")}
                onChange={(e) => collectData("16.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans16_3")}
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
                label={getText("ans16_3")}
                onChange={(e) => collectData("16.2", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans16_4")}
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
                label={getText("ans16_4")}
                onChange={(e) => collectData("16.3", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans16_5")}
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
                label={getText("ans16_5")}
                onChange={(e) => collectData("16.4", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans16_6")}
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
                label={getText("ans16_6")}
                onChange={(e) => collectData("16.5", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans16_7")}
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
                label={getText("ans16_7")}
                onChange={(e) => collectData("16.6", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans16_8")}
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
                label={getText("ans16_8")}
                onChange={(e) => collectData("16.7", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans16_9")}
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
                label={getText("ans16_9")}
                onChange={(e) => collectData("16.8", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans16_10")}
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
                label={getText("ans16_10")}
                onChange={(e) => collectData("16.9", e.target.value)}
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
                      value={getText("ans16_11")}
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
                      label={getText("ans16_11")}
                      onChange={(e) => collectData("16.10", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans16_12")}
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
                      label={getText("ans16_12")}
                      onChange={(e) => collectData("16.11", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans16_13")}
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
                      label={getText("ans16_13")}
                      onChange={(e) => collectData("16.12", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans16_14")}
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
                      label={getText("ans16_14")}
                      onChange={(e) => collectData("16.13", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans16_15")}
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
                      label={getText("ans16_15")}
                      onChange={(e) => collectData("16.14", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans16_16")}
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
                      label={getText("ans16_16")}
                      onChange={(e) => collectData("16.15", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans16_17")}
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
                      label={getText("ans16_17")}
                      onChange={(e) => collectData("16.16", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans16_18")}
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
                      label={getText("ans16_18")}
                      onChange={(e) => collectData("16.17", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <FormControlLabel
                value={getText("ans16_19")}
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
                label={getText("ans16_19")}
                onChange={(e) => collectData("16.18", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans16_20")}
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
                label={getText("ans16_20")}
                onChange={(e) => collectData("16.19", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans16_21")}
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
                label={getText("ans16_21")}
                onChange={(e) => collectData("16.20", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans16_22")}
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
                label={getText("ans16_22")}
                onChange={(e) => collectData("16.21", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans16_23")}
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
                label={getText("ans16_23")}
                onChange={(e) => collectData("16.22", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans16_24")}
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
                label={getText("ans16_24")}
                onChange={(e) => collectData("16.23", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans16_25")}
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
                label={getText("ans16_25")}
                onChange={(e) => collectData("16.24", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans16_26")}
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
                label={getText("ans16_26")}
                onChange={(e) => collectData("16.25", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans16_27")}
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
                label={getText("ans16_27")}
                onChange={(e) => collectData("16.26", e.target.value)}
              />
              <button
                onClick={() => navigate("/no-marriage-problem")}
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

export default AfterDivorce;
