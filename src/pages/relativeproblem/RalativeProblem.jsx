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

const RalativeProblem = () => {
  const [data, setData] = useState({});
  const [expanded, setExpanded] = useState(false);

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
          <h1>9.2. {getText("ans12_1")}</h1>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
              className="for_gap"
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
                      value={getText("ans12_2")}
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
                      label={getText("ans12_2")}
                      onChange={(e) => collectData("12.1", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_3")}
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
                      label={getText("ans12_3")}
                      onChange={(e) => collectData("12.2", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_4")}
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
                      label={getText("ans12_4")}
                      onChange={(e) => collectData("12.3", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_5")}
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
                      label={getText("ans12_5")}
                      onChange={(e) => collectData("12.4", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_6")}
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
                      label={getText("ans12_6")}
                      onChange={(e) => collectData("12.5", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_7")}
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
                      label={getText("ans12_7")}
                      onChange={(e) => collectData("12.6", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_8")}
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
                      label={getText("ans12_8")}
                      onChange={(e) => collectData("12.7", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_9")}
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
                      label={getText("ans12_9")}
                      onChange={(e) => collectData("12.8", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_10")}
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
                      label={getText("ans12_10")}
                      onChange={(e) => collectData("12.9", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_11")}
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
                      label={getText("ans12_11")}
                      onChange={(e) => collectData("12.10", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_12")}
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
                      label={getText("ans12_12")}
                      onChange={(e) => collectData("12.11", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_13")}
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
                      label={getText("ans12_13")}
                      onChange={(e) => collectData("12.12", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_14")}
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
                      label={getText("ans12_14")}
                      onChange={(e) => collectData("12.13", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_15")}
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
                      label={getText("ans12_15")}
                      onChange={(e) => collectData("12.14", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_16")}
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
                      label={getText("ans12_16")}
                      onChange={(e) => collectData("12.15", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_17")}
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
                      label={getText("ans12_17")}
                      onChange={(e) => collectData("12.16", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_18")}
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
                      label={getText("ans12_18")}
                      onChange={(e) => collectData("12.17", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_19")}
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
                      label={getText("ans12_19")}
                      onChange={(e) => collectData("12.18", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_20")}
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
                      label={getText("ans12_20")}
                      onChange={(e) => collectData("12.19", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_21")}
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
                      label={getText("ans12_21")}
                      onChange={(e) => collectData("12.20", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_22")}
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
                      label={getText("ans12_22")}
                      onChange={(e) => collectData("12.21", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_23")}
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
                      label={getText("ans12_23")}
                      onChange={(e) => collectData("12.22", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_24")}
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
                      label={getText("ans12_24")}
                      onChange={(e) => collectData("12.23", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_25")}
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
                      label={getText("ans12_25")}
                      onChange={(e) => collectData("12.24", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_26")}
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
                      label={getText("ans12_26")}
                      onChange={(e) => collectData("12.25", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_27")}
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
                      label={getText("ans12_27")}
                      onChange={(e) => collectData("12.26", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_28")}
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
                      label={getText("ans12_28")}
                      onChange={(e) => collectData("12.27", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_29")}
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
                      label={getText("ans12_29")}
                      onChange={(e) => collectData("12.28", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_30")}
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
                      label={getText("ans12_30")}
                      onChange={(e) => collectData("12.29", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_31")}
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
                      label={getText("ans12_31")}
                      onChange={(e) => collectData("12.30", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_32")}
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
                      label={getText("ans12_32")}
                      onChange={(e) => collectData("12.31", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_33")}
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
                      label={getText("ans12_33")}
                      onChange={(e) => collectData("12.32", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_34")}
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
                      label={getText("ans12_34")}
                      onChange={(e) => collectData("12.33", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_35")}
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
                      label={getText("ans12_35")}
                      onChange={(e) => collectData("12.34", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_36")}
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
                      label={getText("ans12_36")}
                      onChange={(e) => collectData("12.35", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_37")}
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
                      label={getText("ans12_37")}
                      onChange={(e) => collectData("12.36", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_38")}
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
                      label={getText("ans12_38")}
                      onChange={(e) => collectData("12.37", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_39")}
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
                      label={getText("ans12_39")}
                      onChange={(e) => collectData("12.38", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_40")}
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
                      label={getText("ans12_40")}
                      onChange={(e) => collectData("12.39", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_41")}
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
                      label={getText("ans12_41")}
                      onChange={(e) => collectData("12.40", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_42")}
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
                      label={getText("ans12_42")}
                      onChange={(e) => collectData("12.41", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_43")}
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
                      label={getText("ans12_43")}
                      onChange={(e) => collectData("12.42", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_44")}
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
                      label={getText("ans12_44")}
                      onChange={(e) => collectData("12.43", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_45")}
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
                      label={getText("ans12_45")}
                      onChange={(e) => collectData("12.44", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_46")}
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
                      label={getText("ans12_46")}
                      onChange={(e) => collectData("12.45", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_47")}
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
                      label={getText("ans12_47")}
                      onChange={(e) => collectData("12.46", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_48")}
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
                      label={getText("ans12_48")}
                      onChange={(e) => collectData("12.47", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_49")}
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
                      label={getText("ans12_49")}
                      onChange={(e) => collectData("12.48", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_50")}
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
                      label={getText("ans12_50")}
                      onChange={(e) => collectData("12.49", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_51")}
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
                      label={getText("ans12_51")}
                      onChange={(e) => collectData("12.50", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_52")}
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
                      label={getText("ans12_52")}
                      onChange={(e) => collectData("12.51", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_53")}
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
                      label={getText("ans12_53")}
                      onChange={(e) => collectData("12.52", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_54")}
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
                      label={getText("ans12_54")}
                      onChange={(e) => collectData("12.53", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                onChange={handleChange}
                className="for_gap"
              >
                <Accordion
                  expanded={expanded === "panel30"}
                  onChange={handleChange("panel30")}
                >
                  <AccordionSummary
                    expandIcon={<img src={down} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_55")}
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
                        label={getText("ans12_55")}
                        onChange={(e) => collectData("12.54", e.target.value)}
                      />
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_56")}
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
                        label={getText("ans12_56")}
                        onChange={(e) => collectData("12.55", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_57")}
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
                        label={getText("ans12_57")}
                        onChange={(e) => collectData("12.56", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_58")}
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
                        label={getText("ans12_58")}
                        onChange={(e) => collectData("12.57", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_59")}
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
                        label={getText("ans12_59")}
                        onChange={(e) => collectData("12.58", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_60")}
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
                        label={getText("ans12_60")}
                        onChange={(e) => collectData("12.59", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_61")}
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
                        label={getText("ans12_61")}
                        onChange={(e) => collectData("12.60", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_62")}
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
                        label={getText("ans12_62")}
                        onChange={(e) => collectData("12.61", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_63")}
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
                        label={getText("ans12_63")}
                        onChange={(e) => collectData("12.62", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_64")}
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
                        label={getText("ans12_64")}
                        onChange={(e) => collectData("12.63", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_65")}
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
                        label={getText("ans12_65")}
                        onChange={(e) => collectData("12.64", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_66")}
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
                        label={getText("ans12_66")}
                        onChange={(e) => collectData("12.65", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_67")}
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
                        label={getText("ans12_67")}
                        onChange={(e) => collectData("12.66", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_68")}
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
                        label={getText("ans12_68")}
                        onChange={(e) => collectData("12.67", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_69")}
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
                        label={getText("ans12_69")}
                        onChange={(e) => collectData("12.68", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_70")}
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
                        label={getText("ans12_70")}
                        onChange={(e) => collectData("12.69", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_71")}
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
                        label={getText("ans12_71")}
                        onChange={(e) => collectData("12.70", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_72")}
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
                        label={getText("ans12_72")}
                        onChange={(e) => collectData("12.71", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_73")}
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
                        label={getText("ans12_73")}
                        onChange={(e) => collectData("12.72", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_74")}
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
                        onChange={(e) => collectData("12.73", e.target.value)}
                        label={getText("ans12_74")}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_75")}
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
                        label={getText("ans12_75")}
                        onChange={(e) => collectData("12.74", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_76")}
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
                        label={getText("ans12_76")}
                        onChange={(e) => collectData("12.75", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_77")}
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
                        label={getText("ans12_77")}
                        onChange={(e) => collectData("12.76", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_78")}
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
                        label={getText("ans12_78")}
                        onChange={(e) => collectData("12.77", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_79")}
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
                        onChange={(e) => collectData("12.78", e.target.value)}
                        label={getText("ans12_79")}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_80")}
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
                        label={getText("ans12_80")}
                        onChange={(e) => collectData("12.79", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_81")}
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
                        label={getText("ans12_81")}
                        onChange={(e) => collectData("12.80", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_82")}
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
                        label={getText("ans12_82")}
                        onChange={(e) => collectData("12.81", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_83")}
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
                        label={getText("ans12_83")}
                        onChange={(e) => collectData("12.82", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_84")}
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
                        onChange={(e) => collectData("12.83", e.target.value)}
                        label={getText("ans12_84")}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_85")}
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
                        label={getText("ans12_85")}
                        onChange={(e) => collectData("12.84", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_86")}
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
                        label={getText("ans12_86")}
                        onChange={(e) => collectData("12.85", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_87")}
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
                        label={getText("ans12_87")}
                        onChange={(e) => collectData("12.86", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_88")}
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
                        label={getText("ans12_88")}
                        onChange={(e) => collectData("12.87", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_89")}
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
                        label={getText("ans12_89")}
                        onChange={(e) => collectData("12.88", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_90")}
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
                        label={getText("ans12_90")}
                        onChange={(e) => collectData("12.89", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_91")}
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
                        label={getText("ans12_91")}
                        onChange={(e) => collectData("12.90", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_92")}
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
                        label={getText("ans12_92")}
                        onChange={(e) => collectData("12.91", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_93")}
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
                        label={getText("ans12_93")}
                        onChange={(e) => collectData("12.92", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans12_94")}
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
                        label={getText("ans12_94")}
                        onChange={(e) => collectData("12.93", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </RadioGroup>
            </FormLabel>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              className="for_gap"
              onChange={handleChange}
            >
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_95")}
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
                      label={getText("ans12_95")}
                      onChange={(e) => collectData("12.94", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_96")}
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
                      label={getText("ans12_96")}
                      onChange={(e) => collectData("12.95", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_97")}
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
                      label={getText("ans12_97")}
                      onChange={(e) => collectData("12.96", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_98")}
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
                      label={getText("ans12_98")}
                      onChange={(e) => collectData("12.97", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_99")}
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
                      label={getText("ans12_99")}
                      onChange={(e) => collectData("12.98", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_100")}
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
                      label={getText("ans12_100")}
                      onChange={(e) => collectData("12.99", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_101")}
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
                      label={getText("ans12_101")}
                      onChange={(e) => collectData("12.100", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_102")}
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
                      label={getText("ans12_102")}
                      onChange={(e) => collectData("12.101", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_103")}
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
                      label={getText("ans12_103")}
                      onChange={(e) => collectData("12.102", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_104")}
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
                      label={getText("ans12_104")}
                      onChange={(e) => collectData("12.103", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_105")}
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
                      label={getText("ans12_105")}
                      onChange={(e) => collectData("12.104", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_106")}
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
                      label={getText("ans12_106")}
                      onChange={(e) => collectData("12.105", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_107")}
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
                      label={getText("ans12_107")}
                      onChange={(e) => collectData("12.106", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_108")}
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
                      label={getText("ans12_108")}
                      onChange={(e) => collectData("12.107", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_109")}
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
                      onChange={(e) => collectData("12.108", e.target.value)}
                      label={getText("ans12_109")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_110")}
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
                      label={getText("ans12_110")}
                      onChange={(e) => collectData("12.109", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_111")}
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
                      label={getText("ans12_111")}
                      onChange={(e) => collectData("12.110", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_112")}
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
                      label={getText("ans12_112")}
                      onChange={(e) => collectData("12.111", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_113")}
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
                      label={getText("ans12_113")}
                      onChange={(e) => collectData("12.112", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_114")}
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
                      label={getText("ans12_114")}
                      onChange={(e) => collectData("113", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_115")}
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
                      label={getText("ans12_115")}
                      onChange={(e) => collectData("12.114", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_116")}
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
                      label={getText("ans12_116")}
                      onChange={(e) => collectData("12.115", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_117")}
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
                      label={getText("ans12_117")}
                      onChange={(e) => collectData("12.116", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_118")}
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
                      label={getText("ans12_118")}
                      onChange={(e) => collectData("12.117", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_119")}
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
                      label={getText("ans12_119")}
                      onChange={(e) => collectData("12.118", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_120")}
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
                      label={getText("ans12_120")}
                      onChange={(e) => collectData("12.119", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_121")}
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
                      label={getText("ans12_121")}
                      onChange={(e) => collectData("12.120", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_122")}
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
                      label={getText("ans12_122")}
                      onChange={(e) => collectData("12.121", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_123")}
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
                      label={getText("ans12_123")}
                      onChange={(e) => collectData("12.122", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_124")}
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
                      label={getText("ans12_124")}
                      onChange={(e) => collectData("12.123", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_125")}
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
                      label={getText("ans12_125")}
                      onChange={(e) => collectData("12.124", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_126")}
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
                      label={getText("ans12_126")}
                      onChange={(e) => collectData("12.125", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_127")}
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
                      label={getText("ans12_127")}
                      onChange={(e) => collectData("12.126", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_128")}
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
                      label={getText("ans12_128")}
                      onChange={(e) => collectData("12.127", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_129")}
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
                      label={getText("ans12_129")}
                      onChange={(e) => collectData("12.128", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_130")}
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
                      label={getText("ans12_130")}
                      onChange={(e) => collectData("12.129", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_131")}
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
                      label={getText("ans12_131")}
                      onChange={(e) => collectData("12.130", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_132")}
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
                      onChange={(e) => collectData("12.131", e.target.value)}
                      label={getText("ans12_132")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_133")}
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
                      label={getText("ans12_133")}
                      onChange={(e) => collectData("12.132", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_134")}
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
                      label={getText("ans12_134")}
                      onChange={(e) => collectData("133", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_135")}
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
                      label={getText("ans12_135")}
                      onChange={(e) => collectData("12.134", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_136")}
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
                      label={getText("ans12_136")}
                      onChange={(e) => collectData("12.135", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_137")}
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
                      label={getText("ans12_137")}
                      onChange={(e) => collectData("12.136", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_138")}
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
                      label={getText("ans12_138")}
                      onChange={(e) => collectData("12.137", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_139")}
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
                      label={getText("ans12_139")}
                      onChange={(e) => collectData("12.138", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_140")}
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
                      label={getText("ans12_140")}
                      onChange={(e) => collectData("12.139", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_141")}
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
                      label={getText("ans12_141")}
                      onChange={(e) => collectData("12.140", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_142")}
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
                      label={getText("ans12_142")}
                      onChange={(e) => collectData("12.141", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_143")}
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
                      label={getText("ans12_143")}
                      onChange={(e) => collectData("12.142", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_144")}
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
                      label={getText("ans12_144")}
                      onChange={(e) => collectData("12.143", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_145")}
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
                      label={getText("ans12_145")}
                      onChange={(e) => collectData("12.144", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_146")}
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
                      label={getText("ans12_146")}
                      onChange={(e) => collectData("12.145", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_147")}
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
                      label={getText("ans12_147")}
                      onChange={(e) => collectData("12.146", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_148")}
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
                      label={getText("ans12_148")}
                      onChange={(e) => collectData("12.147", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_149")}
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
                      label={getText("ans12_149")}
                      onChange={(e) => collectData("12.148", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_150")}
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
                      label={getText("ans12_150")}
                      onChange={(e) => collectData("12.149", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_151")}
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
                      label={getText("ans12_151")}
                      onChange={(e) => collectData("12.150", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_152")}
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
                      label={getText("ans12_152")}
                      onChange={(e) => collectData("12.151", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_153")}
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
                      label={getText("ans12_153")}
                      onChange={(e) => collectData("12.152", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_154")}
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
                      label={getText("ans12_154")}
                      onChange={(e) => collectData("12.153", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_155")}
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
                      label={getText("ans12_155")}
                      onChange={(e) => collectData("12.154", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_156")}
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
                      label={getText("ans12_156")}
                      onChange={(e) => collectData("12.155", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_157")}
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
                      label={getText("ans12_157")}
                      onChange={(e) => collectData("12.156", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              className="for_gap"
              onChange={handleChange}
            >
              <Accordion
                expanded={
                  expanded === "panel5" ||
                  expanded === "panel7" ||
                  expanded === "panel8" ||
                  expanded === "panel9" ||
                  expanded === "panel10" ||
                  expanded === "panel11"
                }
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_158")}
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
                      label={getText("ans12_158")}
                      onChange={(e) => collectData("12.157", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_159")}
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
                      label={getText("ans12_159")}
                      onChange={(e) => collectData("12.158", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_160")}
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
                      label={getText("ans12_160")}
                      onChange={(e) => collectData("12.159", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_161")}
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
                      label={getText("ans12_161")}
                      onChange={(e) => collectData("12.160", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_162")}
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
                      label={getText("ans12_162")}
                      onChange={(e) => collectData("12.161", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_163")}
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
                      label={getText("ans12_163")}
                      onChange={(e) => collectData("12.162", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_164")}
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
                      label={getText("ans12_164")}
                      onChange={(e) => collectData("12.163", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_165")}
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
                      label={getText("ans12_165")}
                      onChange={(e) => collectData("12.164", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography></Typography>
                  <Accordion
                    expanded={expanded === "panel7"}
                    onChange={handleChange("panel7")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <FormControlLabel
                        value={getText("ans12_166")}
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
                        label={getText("ans12_166")}
                        onChange={(e) => collectData("12.165", e.target.value)}
                      />
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_167")}
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
                          label={getText("ans12_167")}
                          onChange={(e) =>
                            collectData("12.166", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_168")}
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
                          label={getText("ans12_168")}
                          onChange={(e) =>
                            collectData("12.167", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Accordion
                    expanded={expanded === "panel8"}
                    onChange={handleChange("panel8")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <FormControlLabel
                        value={getText("ans12_169")}
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
                        label={getText("ans12_169")}
                        onChange={(e) => collectData("12.168", e.target.value)}
                      />
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_170")}
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
                          label={getText("ans12_170")}
                          onChange={(e) =>
                            collectData("12.169", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_171")}
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
                          label={getText("ans12_171")}
                          onChange={(e) =>
                            collectData("12.170", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography></Typography>
                  <Accordion
                    expanded={expanded === "panel9"}
                    onChange={handleChange("panel9")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <FormControlLabel
                        value={getText("ans12_172")}
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
                        label={getText("ans12_172")}
                        onChange={(e) => collectData("12.171", e.target.value)}
                      />
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_173")}
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
                          label={getText("ans12_173")}
                          onChange={(e) =>
                            collectData("12.172", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_174")}
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
                          label={getText("ans12_174")}
                          onChange={(e) =>
                            collectData("12.173", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography></Typography>
                  <Accordion
                    expanded={expanded === "panel10"}
                    onChange={handleChange("panel10")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <FormControlLabel
                        value={getText("ans12_175")}
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
                        label={getText("ans12_175")}
                        onChange={(e) => collectData("12.174", e.target.value)}
                      />
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_176")}
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
                          label={getText("ans12_176")}
                          onChange={(e) =>
                            collectData("12.175", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_177")}
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
                          label={getText("ans12_177")}
                          onChange={(e) =>
                            collectData("12.176", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_178")}
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
                          label={getText("ans12_178")}
                          onChange={(e) =>
                            collectData("12.177", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography></Typography>
                  <Accordion
                    expanded={expanded === "panel11"}
                    onChange={handleChange("panel11")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <FormControlLabel
                        value={getText("ans12_179")}
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
                        onChange={(e) => collectData("12.178", e.target.value)}
                        label={getText("ans12_179")}
                      />
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_180")}
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
                          onChange={(e) =>
                            collectData("12.179", e.target.value)
                          }
                          label={getText("ans12_180")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_181")}
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
                          label={getText("ans12_181")}
                          onChange={(e) =>
                            collectData("12.180", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography>
                        <FormControlLabel
                          value={getText("ans12_182")}
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
                          label={getText("ans12_182")}
                          onChange={(e) =>
                            collectData("12.181", e.target.value)
                          }
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_183")}
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
                      label={getText("ans12_183")}
                      onChange={(e) => collectData("12.182", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans12_184")}
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
                      label={getText("ans12_184")}
                      onChange={(e) => collectData("12.183", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </RadioGroup>
          </FormControl>

          <button
            onClick={() => navigate("/current-problem")}
            className="btn myBtn"
          >
            {getText("next")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RalativeProblem;
