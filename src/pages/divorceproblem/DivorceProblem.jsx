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

const DivorceProblem = () => {
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
          <h1>9.5. {getText("ans15_1")}</h1>
          <div className="ans_h3">{getText("ans15_2")}</div>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                value={getText("ans15_3")}
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
                label={getText("ans15_3")}
                onChange={(e) => collectData("15.1", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans15_4")}
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
                label={getText("ans15_4")}
                onChange={(e) => collectData("15.2", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans15_5")}
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
                label={getText("ans15_5")}
                onChange={(e) => collectData("15.3", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans15_6")}
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
                label={getText("ans15_6")}
                onChange={(e) => collectData("15.4", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans15_7")}
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
                label={getText("ans15_7")}
                onChange={(e) => collectData("15.5", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans15_8")}
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
                label={getText("ans15_8")}
                onChange={(e) => collectData("15.6", e.target.value)}
              />
              <FormControlLabel
                value={getText("ans15_9")}
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
                label={getText("ans15_9")}
                onChange={(e) => collectData("15.7", e.target.value)}
              />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                onChange={handleChange}
              >
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
                        value={getText("ans15_10")}
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
                        label={getText("ans15_10")}
                        onChange={(e) => collectData("15.8", e.target.value)}
                      />
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="ans_h3">{getText("ans15_11")}</div>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_12")}
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
                        label={getText("ans15_12")}
                        onChange={(e) => collectData("15.9", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_13")}
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
                        label={getText("ans15_13")}
                        onChange={(e) => collectData("15.10", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_14")}
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
                        label={getText("ans15_14")}
                        onChange={(e) => collectData("15.11", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_15")}
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
                        label={getText("ans15_15")}
                        onChange={(e) => collectData("15.12", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_16")}
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
                        label={getText("ans15_16")}
                        onChange={(e) => collectData("15.13", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_17")}
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
                        label={getText("ans15_17")}
                        onChange={(e) => collectData("15.14", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_18")}
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
                        label={getText("ans15_18")}
                        onChange={(e) => collectData("15.15", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_19")}
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
                        label={getText("ans15_19")}
                        onChange={(e) => collectData("15.16", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_20")}
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
                        label={getText("ans15_20")}
                        onChange={(e) => collectData("15.17", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_21")}
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
                        label={getText("ans15_21")}
                        onChange={(e) => collectData("15.18", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_22")}
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
                        label={getText("ans15_22")}
                        onChange={(e) => collectData("15.19", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_23")}
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
                        label={getText("ans15_23")}
                        onChange={(e) => collectData("15.20", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_24")}
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
                        label={getText("ans15_24")}
                        onChange={(e) => collectData("15.21", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_25")}
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
                        label={getText("ans15_25")}
                        onChange={(e) => collectData("15.22", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_26")}
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
                        label={getText("ans15_26")}
                        onChange={(e) => collectData("15.23", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_27")}
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
                        label={getText("ans15_27")}
                        onChange={(e) => collectData("15.24", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_28")}
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
                        label={getText("ans15_28")}
                        onChange={(e) => collectData("15.25", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_29")}
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
                        label={getText("ans15_29")}
                        onChange={(e) => collectData("15.26", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_30")}
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
                        label={getText("ans15_30")}
                        onChange={(e) => collectData("15.27", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_31")}
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
                        label={getText("ans15_31")}
                        onChange={(e) => collectData("15.28", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_32")}
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
                        label={getText("ans15_32")}
                        onChange={(e) => collectData("15.29", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_33")}
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
                        label={getText("ans15_33")}
                        onChange={(e) => collectData("15.30", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_34")}
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
                        label={getText("ans15_34")}
                        onChange={(e) => collectData("15.31", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_35")}
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
                        label={getText("ans15_35")}
                        onChange={(e) => collectData("15.32", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_36")}
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
                        label={getText("ans15_36")}
                        onChange={(e) => collectData("15.33", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_37")}
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
                        label={getText("ans15_37")}
                        onChange={(e) => collectData("15.34", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_38")}
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
                        label={getText("ans15_38")}
                        onChange={(e) => collectData("15.35", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_39")}
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
                        label={getText("ans15_39")}
                        onChange={(e) => collectData("15.36", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_40")}
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
                        label={getText("ans15_40")}
                        onChange={(e) => collectData("15.37", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_41")}
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
                        label={getText("ans15_41")}
                        onChange={(e) => collectData("15.38", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_42")}
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
                        label={getText("ans15_42")}
                        onChange={(e) => collectData("15.39", e.target.value)}
                      />
                      <div className="d-flex">
                        <input
                          placeholder={getText("ans15_43")}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </RadioGroup>
            </FormLabel>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                onChange={handleChange}
              >
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    expandIcon={<img src={down} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_44")}
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
                        label={getText("ans15_44")}
                        onChange={(e) => collectData("15.40", e.target.value)}
                      />
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="ans_h3">{getText("ans15_45")}</div>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_46")}
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
                        label={getText("ans15_46")}
                        onChange={(e) => collectData("15.41", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_47")}
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
                        label={getText("ans15_47")}
                        onChange={(e) => collectData("15.42", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_48")}
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
                        label={getText("ans15_48")}
                        onChange={(e) => collectData("15.43", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_49")}
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
                        label={getText("ans15_49")}
                        onChange={(e) => collectData("15.44", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_50")}
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
                        label={getText("ans15_50")}
                        onChange={(e) => collectData("15.45", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_51")}
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
                        label={getText("ans15_51")}
                        onChange={(e) => collectData("15.46", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_52")}
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
                        label={getText("ans15_52")}
                        onChange={(e) => collectData("15.47", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_53")}
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
                        label={getText("ans15_53")}
                        onChange={(e) => collectData("15.48", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_54")}
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
                        label={getText("ans15_54")}
                        onChange={(e) => collectData("15.49", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_55")}
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
                        label={getText("ans15_55")}
                        onChange={(e) => collectData("15.50", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_56")}
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
                        label={getText("ans15_56")}
                        onChange={(e) => collectData("15.51", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_57")}
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
                        label={getText("ans15_57")}
                        onChange={(e) => collectData("15.52", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_58")}
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
                        label={getText("ans15_58")}
                        onChange={(e) => collectData("15.53", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_59")}
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
                        label={getText("ans15_59")}
                        onChange={(e) => collectData("15.54", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_60")}
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
                        label={getText("ans15_60")}
                        onChange={(e) => collectData("15.55", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_61")}
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
                        label={getText("ans15_61")}
                        onChange={(e) => collectData("15.56", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_62")}
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
                        label={getText("ans15_62")}
                        onChange={(e) => collectData("15.57", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_63")}
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
                        label={getText("ans15_63")}
                        onChange={(e) => collectData("15.58", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_64")}
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
                        label={getText("ans15_64")}
                        onChange={(e) => collectData("15.59", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans15_65")}
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
                        label={getText("ans15_65")}
                        onChange={(e) => collectData("15.60", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <div className="d-flex">
                        <FormControlLabel
                          value={getText("ans15_66")}
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
                          label={getText("ans15_66")}
                          onChange={(e) => collectData("15.61", e.target.value)}
                        />
                        <div className="ps-5">
                          <input
                            placeholder={getText("ans15_67")}
                            type="text"
                            className="form-control w-100"
                          />
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </RadioGroup>
            </FormLabel>
          </FormControl>

          <button
            onClick={() => navigate("/after-divorce-problem")}
            className="btn myBtn"
          >
            {getText("next")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DivorceProblem;
