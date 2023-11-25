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
import { CircleRounded, CircleSharp } from "@mui/icons-material";
import check from "../../../public/img/check.svg";
import checked from "../../../public/img/checked.svg";
import { CheckCircle } from "@mui/icons-material";
import { CheckCircleOutline, RadioButtonUnchecked } from "@mui/icons-material";

const MoralProblem2 = () => {
  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState({});

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const navigate = useNavigate();

  const collectData = (index, value) => {
    if (data.index) {
      data.index = value;
    } else {
      data[index] = value;
    }
    console.log(data);
    const existingData = JSON.parse(localStorage.getItem(USER_INFO));
    const newData = { ...existingData, ...data };

    localStorage.setItem(USER_INFO, JSON.stringify(newData));
  };
  return (
    <>
      <FormControl component="fieldset">
        <RadioGroup>
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
                  value={getText("ans10_3")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.1", e.target.value)}
                  label={getText("ans10_3")}
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="ans_h3">{getText("ans10_4")}</div>
              <Typography>
                <FormControlLabel
                  onChange={(e) => collectData("10.2", e.target.value)}
                  value={getText("ans10_5")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_5")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  onChange={(e) => collectData("10.3", e.target.value)}
                  value={getText("ans10_6")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_6")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_7")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.4", e.target.value)}
                  label={getText("ans10_7")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  onChange={(e) => collectData("10.5", e.target.value)}
                  value={getText("ans10_8")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_8")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_9")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.6", e.target.value)}
                  label={getText("ans10_9")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_10")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.7", e.target.value)}
                  label={getText("ans10_10")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_11")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.8", e.target.value)}
                  label={getText("ans10_11")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_12")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.9", e.target.value)}
                  label={getText("ans10_12")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_13")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.10", e.target.value)}
                  label={getText("ans10_13")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_14")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.11", e.target.value)}
                  label={getText("ans10_14")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_15")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.12", e.target.value)}
                  label={getText("ans10_15")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_16")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.13", e.target.value)}
                  label={getText("ans10_16")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_17")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.14", e.target.value)}
                  label={getText("ans10_17")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_18")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.15", e.target.value)}
                  label={getText("ans10_18")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_19")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.16", e.target.value)}
                  label={getText("ans10_19")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_20")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.17", e.target.value)}
                  label={getText("ans10_20")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_21")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.18", e.target.value)}
                  label={getText("ans10_21")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <div className="ans_h3">{getText("ans10_22")}</div>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_23")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.19", e.target.value)}
                  label={getText("ans10_23")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_24")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.20", e.target.value)}
                  label={getText("ans10_24")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_25")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.21", e.target.value)}
                  label={getText("ans10_25")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_26")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.22", e.target.value)}
                  label={getText("ans10_26")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_27")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.23", e.target.value)}
                  label={getText("ans10_27")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_28")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.24", e.target.value)}
                  label={getText("ans10_28")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_29")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.25", e.target.value)}
                  label={getText("ans10_29")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_30")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.26", e.target.value)}
                  label={getText("ans10_30")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_31")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.27", e.target.value)}
                  label={getText("ans10_31")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_32")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.28", e.target.value)}
                  label={getText("ans10_32")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_33")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.29", e.target.value)}
                  label={getText("ans10_33")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_34")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.30", e.target.value)}
                  label={getText("ans10_34")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_35")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.31", e.target.value)}
                  label={getText("ans10_35")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_36")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.32", e.target.value)}
                  label={getText("ans10_36")}
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
          onChange={handleChange}
        >
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
                  value={getText("ans10_37")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.33", e.target.value)}
                  label={getText("ans10_37")}
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="ans_h3">{getText("ans10_38")}</div>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_39")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.34", e.target.value)}
                  label={getText("ans10_39")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_40")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.35", e.target.value)}
                  label={getText("ans10_40")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_41")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.36", e.target.value)}
                  label={getText("ans10_41")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_42")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.37", e.target.value)}
                  label={getText("ans10_42")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_43")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.38", e.target.value)}
                  label={getText("ans10_43")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_44")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.39", e.target.value)}
                  label={getText("ans10_44")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_45")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.40", e.target.value)}
                  label={getText("ans10_45")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_46")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.41", e.target.value)}
                  label={getText("ans10_46")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_47")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.42", e.target.value)}
                  label={getText("ans10_47")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_48")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.43", e.target.value)}
                  label={getText("ans10_48")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_49")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.44", e.target.value)}
                  label={getText("ans10_49")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_50")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.45", e.target.value)}
                  label={getText("ans10_50")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_51")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.46", e.target.value)}
                  label={getText("ans10_51")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_52")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.47", e.target.value)}
                  label={getText("ans10_52")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_53")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.48", e.target.value)}
                  label={getText("ans10_53")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_54")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.49", e.target.value)}
                  label={getText("ans10_54")}
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
          onChange={handleChange}
        >
          <Accordion
            expanded={
              expanded === "panel4" ||
              expanded === "panel100" ||
              expanded === "panel101" ||
              expanded === "panel102" ||
              expanded === "panel103" ||
              expanded === "panel104"
            }
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<img src={down} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography>
                <FormControlLabel
                  value={getText("ans10_55")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.50", e.target.value)}
                  label={getText("ans10_55")}
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="ans_h3">{getText("ans10_56")}</div>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_57")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.51", e.target.value)}
                  label={getText("ans10_57")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography></Typography>
              <Accordion
                expanded={
                  expanded === "panel100" ||
                  expanded === "panel101" ||
                  expanded === "panel102"
                }
                onChange={handleChange("panel100")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_58")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      onChange={(e) => collectData("10.52", e.target.value)}
                      label={getText("ans10_58")}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_59")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      onChange={(e) => collectData("10.53", e.target.value)}
                      label={getText("ans10_59")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_60")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      onChange={(e) => collectData("10.54", e.target.value)}
                      label={getText("ans10_60")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_61")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      onChange={(e) => collectData("10.55", e.target.value)}
                      label={getText("ans10_61")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_62")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      onChange={(e) => collectData("10.56", e.target.value)}
                      label={getText("ans10_62")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_63")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      onChange={(e) => collectData("10.57", e.target.value)}
                      label={getText("ans10_63")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_64")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      onChange={(e) => collectData("10.58", e.target.value)}
                      label={getText("ans10_64")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_65")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      onChange={(e) => collectData("10.59", e.target.value)}
                      label={getText("ans10_65")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_66")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      onChange={(e) => collectData("10.60", e.target.value)}
                      label={getText("ans10_66")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <Accordion
                      expanded={expanded === "panel101"}
                      onChange={handleChange("panel101")}
                    >
                      <AccordionSummary
                        expandIcon={<img src={down} />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                      >
                        <FormControlLabel
                          value={getText("ans10_67")}
                          control={
                            <Checkbox
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                              icon={<RadioButtonUnchecked />}
                              checkedIcon={<CheckCircle />}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.61", e.target.value)
                          }
                          label={getText("ans10_67")}
                        />
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <FormControlLabel
                            value={getText("ans10_68")}
                            control={
                              <Checkbox
                                sx={{
                                  color: "silver",
                                  "&.Mui-checked": {
                                    color: "#FFD0D4",
                                  },
                                }}
                                icon={<RadioButtonUnchecked />}
                                checkedIcon={<CheckCircle />}
                              />
                            }
                            onChange={(e) =>
                              collectData("10.62", e.target.value)
                            }
                            label={getText("ans10_68")}
                          />
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails>
                        <Typography>
                          <FormControlLabel
                            value={getText("ans10_69")}
                            control={
                              <Checkbox
                                sx={{
                                  color: "silver",
                                  "&.Mui-checked": {
                                    color: "#FFD0D4",
                                  },
                                }}
                                icon={<RadioButtonUnchecked />}
                                checkedIcon={<CheckCircle />}
                              />
                            }
                            onChange={(e) =>
                              collectData("10.63", e.target.value)
                            }
                            label={getText("ans10_69")}
                          />
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <Accordion
                      expanded={expanded === "panel102"}
                      onChange={handleChange("panel102")}
                    >
                      <AccordionSummary
                        expandIcon={<img src={down} />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                      >
                        <FormControlLabel
                          value={getText("ans10_70")}
                          control={
                            <Checkbox
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                              icon={<RadioButtonUnchecked />}
                              checkedIcon={<CheckCircle />}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.64", e.target.value)
                          }
                          label={getText("ans10_70")}
                        />
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <FormControlLabel
                            value={getText("ans10_71")}
                            control={
                              <Checkbox
                                sx={{
                                  color: "silver",
                                  "&.Mui-checked": {
                                    color: "#FFD0D4",
                                  },
                                }}
                                icon={<RadioButtonUnchecked />}
                                checkedIcon={<CheckCircle />}
                              />
                            }
                            onChange={(e) =>
                              collectData("10.65", e.target.value)
                            }
                            label={getText("ans10_71")}
                          />
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails>
                        <Typography>
                          <FormControlLabel
                            value={getText("ans10_72")}
                            control={
                              <Checkbox
                                sx={{
                                  color: "silver",
                                  "&.Mui-checked": {
                                    color: "#FFD0D4",
                                  },
                                }}
                                icon={<RadioButtonUnchecked />}
                                checkedIcon={<CheckCircle />}
                              />
                            }
                            onChange={(e) =>
                              collectData("10.66", e.target.value)
                            }
                            label={getText("ans10_72")}
                          />
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_73")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      onChange={(e) => collectData("10.67", e.target.value)}
                      label={getText("ans10_73")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_74")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      onChange={(e) => collectData("10.68", e.target.value)}
                      label={getText("ans10_74")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_75")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      onChange={(e) => collectData("10.69", e.target.value)}
                      label={getText("ans10_75")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_76")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      onChange={(e) => collectData("10.70", e.target.value)}
                      label={getText("ans10_76")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_77")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      onChange={(e) => collectData("10.71", e.target.value)}
                      label={getText("ans10_77")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_78")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      onChange={(e) => collectData("10.72", e.target.value)}
                      label={getText("ans10_78")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_79")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      onChange={(e) => collectData("10.73", e.target.value)}
                      label={getText("ans10_79")}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_80")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      onChange={(e) => collectData("10.74", e.target.value)}
                      label={getText("ans10_80")}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_81")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.75", e.target.value)}
                  label={getText("ans10_81")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_82")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.76", e.target.value)}
                  label={getText("ans10_82")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_83")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.77", e.target.value)}
                  label={getText("ans10_83")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_84")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.78", e.target.value)}
                  label={getText("ans10_84")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_85")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.79", e.target.value)}
                  label={getText("ans10_85")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_86")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.80", e.target.value)}
                  label={getText("ans10_86")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_87")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.81", e.target.value)}
                  label={getText("ans10_87")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_88")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.82", e.target.value)}
                  label={getText("ans10_88")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_89")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.83", e.target.value)}
                  label={getText("ans10_89")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_90")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.84", e.target.value)}
                  label={getText("ans10_90")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_91")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.85", e.target.value)}
                  label={getText("ans10_91")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_92")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.86", e.target.value)}
                  label={getText("ans10_92")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_93")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.87", e.target.value)}
                  label={getText("ans10_93")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_94")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.88", e.target.value)}
                  label={getText("ans10_94")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_95")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.89", e.target.value)}
                  label={getText("ans10_95")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_96")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.90", e.target.value)}
                  label={getText("ans10_96")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_97")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.91", e.target.value)}
                  label={getText("ans10_97")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_98")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.92", e.target.value)}
                  label={getText("ans10_98")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_99")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.93", e.target.value)}
                  label={getText("ans10_99")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_100")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.94", e.target.value)}
                  label={getText("ans10_100")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_101")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.95", e.target.value)}
                  label={getText("ans10_101")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_102")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.96", e.target.value)}
                  label={getText("ans10_102")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_103")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.97", e.target.value)}
                  label={getText("ans10_103")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_104")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.98", e.target.value)}
                  label={getText("ans10_104")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_105")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.99", e.target.value)}
                  label={getText("ans10_105")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_106")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.100", e.target.value)}
                  label={getText("ans10_106")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_107")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.101", e.target.value)}
                  label={getText("ans10_107")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_108")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.102", e.target.value)}
                  label={getText("ans10_108")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_109")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.103", e.target.value)}
                  label={getText("ans10_109")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_110")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.104", e.target.value)}
                  label={getText("ans10_110")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_111")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.105", e.target.value)}
                  label={getText("ans10_111")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_112")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.106", e.target.value)}
                  label={getText("ans10_112")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_113")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.107", e.target.value)}
                  label={getText("ans10_113")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_114")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.108", e.target.value)}
                  label={getText("ans10_114")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <Accordion
                  expanded={expanded === "panel103"}
                  onChange={handleChange("panel103")}
                >
                  <AccordionSummary
                    expandIcon={<img src={down} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography>
                      <FormControlLabel
                        value={getText("ans10_115")}
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
                        onChange={(e) => collectData("10.109", e.target.value)}
                        label={getText("ans10_115")}
                      />
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans10_116")}
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
                        onChange={(e) => collectData("10.110", e.target.value)}
                        label={getText("ans10_116")}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans10_117")}
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
                        onChange={(e) => collectData("10.111", e.target.value)}
                        label={getText("ans10_117")}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans10_118")}
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
                        onChange={(e) => collectData("10.112", e.target.value)}
                        label={getText("ans10_118")}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans10_119")}
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
                        onChange={(e) => collectData("10.113", e.target.value)}
                        label={getText("ans10_119")}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans10_120")}
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
                        onChange={(e) => collectData("10.114", e.target.value)}
                        label={getText("ans10_120")}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans10_121")}
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
                        onChange={(e) => collectData("10.115", e.target.value)}
                        label={getText("ans10_121")}
                      />
                    </Typography>
                  </AccordionDetails>
                </Accordion>
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
          onChange={handleChange}
        >
          <Accordion
            expanded={
              expanded === "panel5" ||
              expanded === "panel105" ||
              expanded === "panel106" ||
              expanded === "panel107"
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
                  value={getText("ans10_122")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.116", e.target.value)}
                  label={getText("ans10_122")}
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="ans_h3">{getText("ans10_123")}</div>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_124")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_124")}
                  onChange={(e) => collectData("10.117", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_125")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_125")}
                  onChange={(e) => collectData("10.118", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <Accordion
                  expanded={expanded === "panel105"}
                  onChange={handleChange("panel105")}
                >
                  <AccordionSummary
                    expandIcon={<img src={down} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <FormControlLabel
                      value={getText("ans10_126")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_126")}
                      onChange={(e) => collectData("10.119", e.target.value)}
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans10_127")}
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
                        label={getText("ans10_127")}
                        onChange={(e) => collectData("10.120", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans10_128")}
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
                        label={getText("ans10_128")}
                        onChange={(e) => collectData("10.121", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <Accordion
                  expanded={expanded === "panel106"}
                  onChange={handleChange("panel106")}
                >
                  <AccordionSummary
                    expandIcon={<img src={down} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <FormControlLabel
                      value={getText("ans10_129")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_129")}
                      onChange={(e) => collectData("10.122", e.target.value)}
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans10_130")}
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
                        label={getText("ans10_130")}
                        onChange={(e) => collectData("10.123", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography>
                      <FormControlLabel
                        value={getText("ans10_131")}
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
                        label={getText("ans10_131")}
                        onChange={(e) => collectData("10.124", e.target.value)}
                      />
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_132")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_132")}
                  onChange={(e) => collectData("10.125", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_133")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_133")}
                  onChange={(e) => collectData("10.126", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_134")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_134")}
                  onChange={(e) => collectData("10.127", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_135")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_135")}
                  onChange={(e) => collectData("10.128", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_136")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_136")}
                  onChange={(e) => collectData("10.129", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_137")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_137")}
                  onChange={(e) => collectData("10.130", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_138")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_138")}
                  onChange={(e) => collectData("10.131", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_139")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_139")}
                  onChange={(e) => collectData("10.132", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_140")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_140")}
                  onChange={(e) => collectData("10.133", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_141")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_141")}
                  onChange={(e) => collectData("10.134", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_142")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_142")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_143")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_143")}
                  onChange={(e) => collectData("10.135", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_144")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_144")}
                  onChange={(e) => collectData("10.136", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_145")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_145")}
                  onChange={(e) => collectData("10.137", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_146")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_146")}
                  onChange={(e) => collectData("10.138", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_147")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_147")}
                  onChange={(e) => collectData("10.139", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_148")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_148")}
                  onChange={(e) => collectData("10.140", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_149")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_149")}
                  onChange={(e) => collectData("10.141", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_150")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_150")}
                  onChange={(e) => collectData("10.142", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_151")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_151")}
                  onChange={(e) => collectData("10.143", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_152")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_152")}
                  onChange={(e) => collectData("10.144", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_153")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_153")}
                  onChange={(e) => collectData("10.145", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_154")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_154")}
                  onChange={(e) => collectData("10.146", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_155")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_155")}
                  onChange={(e) => collectData("10.147", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_156")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_156")}
                  onChange={(e) => collectData("10.148", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_157")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_157")}
                  onChange={(e) => collectData("10.149", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_158")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_158")}
                  onChange={(e) => collectData("10.150", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion
                expanded={expanded === "panel107"}
                onChange={handleChange("panel107")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_159")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_159")}
                      onChange={(e) => collectData("10.151", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_160")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_160")}
                      onChange={(e) => collectData("10.152", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_161")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_161")}
                      onChange={(e) => collectData("10.153", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_162")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_162")}
                      onChange={(e) => collectData("10.154", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_163")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_163")}
                      onChange={(e) => collectData("10.155", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_164")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_164")}
                      onChange={(e) => collectData("10.156", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_165")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_165")}
                  onChange={(e) => collectData("10.157", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_166")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_166")}
                  onChange={(e) => collectData("10.158", e.target.value)}
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
          onChange={handleChange}
        >
          <Accordion
            expanded={expanded === "panel6" || expanded === "pane1"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<img src={down} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography>
                <FormControlLabel
                  value={getText("ans10_167")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_167")}
                  onChange={(e) => collectData("10.159", e.target.value)}
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* <div className="ans_h3">{getText("ans10_168")}</div> */}
              <Typography>
                <FormControlLabel
                  value={getText("ans10_168")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.160", e.target.value)}
                  label={getText("ans10_168")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              {/* <div className="ans_h3">{getText("ans10_168")}</div> */}
              <Typography>
                <FormControlLabel
                  value={getText("ans10_169")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.161", e.target.value)}
                  label={getText("ans10_169")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              {/* <div className="ans_h3">{getText("ans10_168")}</div> */}
              <Typography>
                <FormControlLabel
                  value={getText("ans10_170")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.162", e.target.value)}
                  label={getText("ans10_170")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <div className="ans_h3">{getText("ans10_171")}</div>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_172")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.163", e.target.value)}
                  label={getText("ans10_172")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_173")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.164", e.target.value)}
                  label={getText("ans10_173")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_174")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.165", e.target.value)}
                  label={getText("ans10_174")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_175")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.166", e.target.value)}
                  label={getText("ans10_175")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_176")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.167", e.target.value)}
                  label={getText("ans10_176")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_177")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.168", e.target.value)}
                  label={getText("ans10_177")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_178")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.169", e.target.value)}
                  label={getText("ans10_178")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_179")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.170", e.target.value)}
                  label={getText("ans10_179")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_180")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.171", e.target.value)}
                  label={getText("ans10_180")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_181")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.172", e.target.value)}
                  label={getText("ans10_181")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_182")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.173", e.target.value)}
                  label={getText("ans10_182")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_183")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.174", e.target.value)}
                  label={getText("ans10_183")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_184")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.175", e.target.value)}
                  label={getText("ans10_184")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_185")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.176", e.target.value)}
                  label={getText("ans10_185")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_186")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.177", e.target.value)}
                  label={getText("ans10_186")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_187")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.178", e.target.value)}
                  label={getText("ans10_187")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_188")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.179", e.target.value)}
                  label={getText("ans10_188")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_189")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.180", e.target.value)}
                  label={getText("ans10_189")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_190")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.181", e.target.value)}
                  label={getText("ans10_190")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_191")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.182", e.target.value)}
                  label={getText("ans10_191")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_192")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.183", e.target.value)}
                  label={getText("ans10_192")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_193")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.184", e.target.value)}
                  label={getText("ans10_193")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_194")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.185", e.target.value)}
                  label={getText("ans10_194")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_195")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.186", e.target.value)}
                  label={getText("ans10_195")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_196")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.187", e.target.value)}
                  label={getText("ans10_196")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_197")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.188", e.target.value)}
                  label={getText("ans10_197")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_198")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.189", e.target.value)}
                  label={getText("ans10_198")}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_199")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.190", e.target.value)}
                  label={getText("ans10_199")}
                />
              </Typography>
            </AccordionDetails>

            <AccordionDetails>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  onChange={handleChange}
                >
                  <Accordion
                    expanded={expanded === "pane1"}
                    onChange={handleChange("pane1")}
                  >
                    <AccordionSummary
                      expandIcon={<img src={down} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_200")}
                          control={
                            <Checkbox
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                              icon={<RadioButtonUnchecked />}
                              checkedIcon={<CheckCircle />}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.191", e.target.value)
                          }
                          label={getText("ans10_200")}
                        />
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {/* <div className="ans_h3">{getText("ans10_4")}</div> */}
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_201")}
                          control={
                            <Checkbox
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                              icon={<RadioButtonUnchecked />}
                              checkedIcon={<CheckCircle />}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.192", e.target.value)
                          }
                          label={getText("ans10_201")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      {/* <div className="ans_h3">{getText("ans10_4")}</div> */}
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_202")}
                          control={
                            <Checkbox
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                              icon={<RadioButtonUnchecked />}
                              checkedIcon={<CheckCircle />}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.193", e.target.value)
                          }
                          label={getText("ans10_202")}
                        />
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      {/* <div className="ans_h3">{getText("ans10_4")}</div> */}
                      <Typography>
                        <FormControlLabel
                          value={getText("ans10_203")}
                          control={
                            <Checkbox
                              sx={{
                                color: "silver",
                                "&.Mui-checked": {
                                  color: "#FFD0D4",
                                },
                              }}
                              icon={<RadioButtonUnchecked />}
                              checkedIcon={<CheckCircle />}
                            />
                          }
                          onChange={(e) =>
                            collectData("10.194", e.target.value)
                          }
                          label={getText("ans10_203")}
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          onChange={handleChange}
        >
          <Accordion
            expanded={
              expanded === "panel7" ||
              expanded === "panel110" ||
              expanded === "panel111" ||
              expanded === "panel112" ||
              expanded === "panel113" ||
              expanded === "panel114" ||
              expanded === "panel115" ||
              expanded === "panel116" ||
              expanded === "panel117" ||
              expanded === "panel118" ||
              expanded === "panel119" ||
              expanded === "panel120"
            }
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              expandIcon={<img src={down} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography>
                <FormControlLabel
                  value={getText("ans10_204")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  onChange={(e) => collectData("10.195", e.target.value)}
                  label={getText("ans10_204")}
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Accordion
                expanded={expanded === "panel110"}
                onChange={handleChange("panel110")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_205")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_205")}
                      onChange={(e) => collectData("10.196", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_206")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_206")}
                      onChange={(e) => collectData("10.197", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_207")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_207")}
                      onChange={(e) => collectData("10.198", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion
                expanded={expanded === "panel111"}
                onChange={handleChange("panel111")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_208")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_208")}
                      onChange={(e) => collectData("10.199", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_209")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_209")}
                      onChange={(e) => collectData("10.200", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_210")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_210")}
                      onChange={(e) => collectData("10.201", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion
                expanded={expanded === "panel112"}
                onChange={handleChange("panel112")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_211")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_211")}
                      onChange={(e) => collectData("10.202", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_212")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_212")}
                      onChange={(e) => collectData("10.203", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_213")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_213")}
                      onChange={(e) => collectData("10.204", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_214")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_214")}
                      onChange={(e) => collectData("10.205", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion
                expanded={expanded === "panel113"}
                onChange={handleChange("panel113")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_211")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_211")}
                      onChange={(e) => collectData("10.206", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_212")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_212")}
                      onChange={(e) => collectData("10.207", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_213")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_213")}
                      onChange={(e) => collectData("10.208", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_214")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_214")}
                      onChange={(e) => collectData("10.209", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion
                expanded={expanded === "panel114"}
                onChange={handleChange("panel114")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_215")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_215")}
                      onChange={(e) => collectData("10.210", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_216")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_216")}
                      onChange={(e) => collectData("10.211", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_217")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_217")}
                      onChange={(e) => collectData("10.212", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion
                expanded={expanded === "panel115"}
                onChange={handleChange("panel115")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_218")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_218")}
                      onChange={(e) => collectData("10.213", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_219")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_219")}
                      onChange={(e) => collectData("10.214", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_220")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_220")}
                      onChange={(e) => collectData("10.215", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion
                expanded={expanded === "panel116"}
                onChange={handleChange("panel116")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_221")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_221")}
                      onChange={(e) => collectData("10.216", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_222")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_222")}
                      onChange={(e) => collectData("10.217", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_223")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_223")}
                      onChange={(e) => collectData("10.218", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_224")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_224")}
                      onChange={(e) => collectData("10.219", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion
                expanded={expanded === "panel117"}
                onChange={handleChange("panel117")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_225")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_225")}
                      onChange={(e) => collectData("10.220", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_226")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_226")}
                      onChange={(e) => collectData("10.221", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_227")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_227")}
                      onChange={(e) => collectData("10.222", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion
                expanded={expanded === "panel118"}
                onChange={handleChange("panel118")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_228")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_228")}
                      onChange={(e) => collectData("10.223", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_229")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_229")}
                      onChange={(e) => collectData("10.224", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_230")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_230")}
                      onChange={(e) => collectData("10.225", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_231")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_231")}
                      onChange={(e) => collectData("10.226", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion
                expanded={expanded === "panel119"}
                onChange={handleChange("panel119")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_228")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_228")}
                      onChange={(e) => collectData("10.227", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_229")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_229")}
                      onChange={(e) => collectData("10.228", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_230")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_230")}
                      onChange={(e) => collectData("10.229", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_231")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_231")}
                      onChange={(e) => collectData("10.230", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion
                expanded={expanded === "panel120"}
                onChange={handleChange("panel120")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_232")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_232")}
                      onChange={(e) => collectData("10.231", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_233")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_233")}
                      onChange={(e) => collectData("10.232", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_234")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_234")}
                      onChange={(e) => collectData("10.233", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_235")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_235")}
                      onChange={(e) => collectData("10.234", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          onChange={handleChange}
        >
          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              expandIcon={<img src={down} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography>
                <FormControlLabel
                  value={getText("ans10_236")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_236")}
                  onChange={(e) => collectData("10.235", e.target.value)}
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="ans_h3">{getText("ans10_237")}</div>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_238")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_238")}
                  onChange={(e) => collectData("10.236", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_239")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_239")}
                  onChange={(e) => collectData("10.237", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_240")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_240")}
                  onChange={(e) => collectData("10.238", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_241")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_241")}
                  onChange={(e) => collectData("10.239", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_242")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_242")}
                  onChange={(e) => collectData("10.240", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_243")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_243")}
                  onChange={(e) => collectData("10.241", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_244")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_244")}
                  onChange={(e) => collectData("10.242", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_245")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_245")}
                  onChange={(e) => collectData("10.243", e.target.value)}
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
          onChange={handleChange}
        >
          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              expandIcon={<img src={down} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography>
                <FormControlLabel
                  value={getText("ans10_246")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_246")}
                  onChange={(e) => collectData("10.244", e.target.value)}
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_247")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_247")}
                  onChange={(e) => collectData("10.245", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_248")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_248")}
                  onChange={(e) => collectData("10.246", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_249")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_249")}
                  onChange={(e) => collectData("10.247", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_250")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_250")}
                  onChange={(e) => collectData("10.248", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_251")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_251")}
                  onChange={(e) => collectData("10.249", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_252")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_252")}
                  onChange={(e) => collectData("10.250", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_253")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_253")}
                  onChange={(e) => collectData("10.251", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_254")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_254")}
                  onChange={(e) => collectData("10.252", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_255")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_255")}
                  onChange={(e) => collectData("10.253", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_256")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_256")}
                  onChange={(e) => collectData("10.254", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_257")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_257")}
                  onChange={(e) => collectData("10.255", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_258")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_258")}
                  onChange={(e) => collectData("10.256", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_259")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_259")}
                  onChange={(e) => collectData("10.257", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion
                expanded={expanded === "panel9"}
                onChange={handleChange("panel9")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <div className="ans_h3">{getText("ans10_260")}</div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_261")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_261")}
                      onChange={(e) => collectData("10.258", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_262")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_262")}
                      onChange={(e) => collectData("10.259", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_263")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_263")}
                      onChange={(e) => collectData("10.260", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_264")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_264")}
                      onChange={(e) => collectData("10.261", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_265")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_265")}
                      onChange={(e) => collectData("10.262", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_266")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_266")}
                      onChange={(e) => collectData("10.263", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_267")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_267")}
                      onChange={(e) => collectData("10.264", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_268")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_268")}
                      onChange={(e) => collectData("10.265", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_269")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_269")}
                      onChange={(e) => collectData("10.266", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_270")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_270")}
                      onChange={(e) => collectData("10.267", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_271")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_271")}
                      onChange={(e) => collectData("10.268", e.target.value)}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          onChange={handleChange}
        >
          <Accordion
            expanded={expanded === "panel10"}
            onChange={handleChange("panel10")}
          >
            <AccordionSummary
              expandIcon={<img src={down} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography>
                <FormControlLabel
                  value={getText("ans10_272")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_272")}
                  onChange={(e) => collectData("10.269", e.target.value)}
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_273")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_273")}
                  onChange={(e) => collectData("10.270", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_274")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_274")}
                  onChange={(e) => collectData("10.271", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_275")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_275")}
                  onChange={(e) => collectData("10.272", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_276")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_276")}
                  onChange={(e) => collectData("10.273", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_277")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_277")}
                  onChange={(e) => collectData("10.274", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_278")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_278")}
                  onChange={(e) => collectData("10.275", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_279")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_279")}
                  onChange={(e) => collectData("10.276", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_280")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_280")}
                  onChange={(e) => collectData("10.277", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_281")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_281")}
                  onChange={(e) => collectData("10.278", e.target.value)}
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
          onChange={handleChange}
        >
          <Accordion
            expanded={
              expanded === "panel11" ||
              expanded === "panel130" ||
              expanded === "panel131" ||
              expanded === "panel132" ||
              expanded === "panel133"
            }
            onChange={handleChange("panel11")}
          >
            <AccordionSummary
              expandIcon={<img src={down} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography>
                <FormControlLabel
                  value={getText("ans10_282")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_282")}
                  onChange={(e) => collectData("10.279", e.target.value)}
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Accordion
                expanded={expanded === "panel130"}
                onChange={handleChange("panel130")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_283")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_283")}
                      onChange={(e) => collectData("10.280", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_284")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_284")}
                    onChange={(e) => collectData("10.281", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_285")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_285")}
                    onChange={(e) => collectData("10.282", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_286")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_286")}
                    onChange={(e) => collectData("10.283", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_287")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_287")}
                    onChange={(e) => collectData("10.284", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_288")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_288")}
                    onChange={(e) => collectData("10.285", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_289")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_289")}
                    onChange={(e) => collectData("10.286", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_290")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_290")}
                    onChange={(e) => collectData("10.287", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_291")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_291")}
                    onChange={(e) => collectData("10.288", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_292")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_292")}
                    onChange={(e) => collectData("10.289", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_293")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_293")}
                    onChange={(e) => collectData("10.290", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_294")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_294")}
                    onChange={(e) => collectData("10.291", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_295")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_295")}
                    onChange={(e) => collectData("10.292", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_296")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_296")}
                    onChange={(e) => collectData("10.293", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_297")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_297")}
                    onChange={(e) => collectData("10.294", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_298")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_298")}
                    onChange={(e) => collectData("10.295", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_299")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_299")}
                    onChange={(e) => collectData("10.296", e.target.value)}
                  />
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion
                expanded={expanded === "panel131"}
                onChange={handleChange("panel131")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>
                    <FormControlLabel
                      value={getText("ans10_300")}
                      control={
                        <Checkbox
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label={getText("ans10_300")}
                      onChange={(e) => collectData("10.297", e.target.value)}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_301")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_301")}
                    onChange={(e) => collectData("10.298", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_302")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_302")}
                    onChange={(e) => collectData("10.299", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_303")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_303")}
                    onChange={(e) => collectData("10.300", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_304")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_304")}
                    onChange={(e) => collectData("10.301", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_305")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_305")}
                    onChange={(e) => collectData("10.302", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_306")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_306")}
                    onChange={(e) => collectData("10.303", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_307")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_307")}
                    onChange={(e) => collectData("10.304", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_308")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_308")}
                    onChange={(e) => collectData("10.305", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_309")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_309")}
                    onChange={(e) => collectData("10.306", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_310")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_310")}
                    onChange={(e) => collectData("10.307", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_311")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    onChange={(e) => collectData("10.308", e.target.value)}
                    label={getText("ans10_311")}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_312")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_312")}
                    onChange={(e) => collectData("10.309", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_313")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_313")}
                    onChange={(e) => collectData("10.310", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_314")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_314")}
                    onChange={(e) => collectData("10.311", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_315")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_315")}
                    onChange={(e) => collectData("10.312", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_316")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_316")}
                    onChange={(e) => collectData("10.313", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_317")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_317")}
                    onChange={(e) => collectData("10.314", e.target.value)}
                  />
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_318")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_318")}
                onChange={(e) => collectData("10.315", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_319")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                onChange={(e) => collectData("10.316", e.target.value)}
                label={getText("ans10_319")}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_320")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                onChange={(e) => collectData("10.317", e.target.value)}
                label={getText("ans10_320")}
              />
            </AccordionDetails>
            <AccordionDetails>
              <Accordion
                expanded={expanded === "panel132"}
                onChange={handleChange("panel132")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <FormControlLabel
                    value={getText("ans10_321")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_321")}
                    onChange={(e) => collectData("10.318", e.target.value)}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_322")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_322")}
                    onChange={(e) => collectData("10.319", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_323")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_323")}
                    onChange={(e) => collectData("10.320", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_324")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_324")}
                    onChange={(e) => collectData("10.321", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_325")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_325")}
                    onChange={(e) => collectData("10.322", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_326")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_326")}
                    onChange={(e) => collectData("10.323", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_327")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_327")}
                    onChange={(e) => collectData("10.324", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_328")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_328")}
                    onChange={(e) => collectData("10.325", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_329")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_329")}
                    onChange={(e) => collectData("10.326", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_330")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_330")}
                    onChange={(e) => collectData("10.327", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_331")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_331")}
                    onChange={(e) => collectData("10.328", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_332")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_332")}
                    onChange={(e) => collectData("10.329", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_333")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_333")}
                    onChange={(e) => collectData("10.330", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_334")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_334")}
                    onChange={(e) => collectData("10.331", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_335")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_335")}
                    onChange={(e) => collectData("10.332", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_336")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_336")}
                    onChange={(e) => collectData("10.333", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_337")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_337")}
                    onChange={(e) => collectData("10.334", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_338")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_338")}
                    onChange={(e) => collectData("10.335", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_339")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_339")}
                    onChange={(e) => collectData("10.336", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_340")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_340")}
                    onChange={(e) => collectData("10.337", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_341")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_341")}
                    onChange={(e) => collectData("10.338", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_342")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_342")}
                    onChange={(e) => collectData("10.339", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_343")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    onChange={(e) => collectData("10.340", e.target.value)}
                    label={getText("ans10_343")}
                  />
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>

            <AccordionDetails>
              <Accordion
                expanded={expanded === "panel133"}
                onChange={handleChange("panel133")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <FormControlLabel
                    value={getText("ans10_344")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_344")}
                    onChange={(e) => collectData("10.341", e.target.value)}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_345")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_345")}
                    onChange={(e) => collectData("10.342", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_346")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_346")}
                    onChange={(e) => collectData("10.343", e.target.value)}
                  />
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_347")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_347")}
                onChange={(e) => collectData("10.344", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_348")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_348")}
                onChange={(e) => collectData("10.345", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_349")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_349")}
                onChange={(e) => collectData("10.346", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_350")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_350")}
                onChange={(e) => collectData("10.347", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_351")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_351")}
                onChange={(e) => collectData("10.348", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_353")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_353")}
                onChange={(e) => collectData("10.349", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_354")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_354")}
                onChange={(e) => collectData("10.350", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_355")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_355")}
                onChange={(e) => collectData("10.351", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_356")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_356")}
                onChange={(e) => collectData("10.352", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_357")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_357")}
                onChange={(e) => collectData("10.353", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_358")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_358")}
                onChange={(e) => collectData("10.354", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_359")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_359")}
                onChange={(e) => collectData("10.355", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_360")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_360")}
                onChange={(e) => collectData("10.356", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_361")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_361")}
                onChange={(e) => collectData("10.357", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_362")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_362")}
                onChange={(e) => collectData("10.358", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_363")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_363")}
                onChange={(e) => collectData("10.359", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_364")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_364")}
                onChange={(e) => collectData("10.360", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_365")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_365")}
                onChange={(e) => collectData("10.361", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_366")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_366")}
                onChange={(e) => collectData("10.362", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_367")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_367")}
                onChange={(e) => collectData("10.363", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_368")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_368")}
                onChange={(e) => collectData("10.364", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_369")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_369")}
                onChange={(e) => collectData("10.365", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_370")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_370")}
                onChange={(e) => collectData("10.366", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_371")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_371")}
                onChange={(e) => collectData("10.367", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_372")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_372")}
                onChange={(e) => collectData("10.368", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_373")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_373")}
                onChange={(e) => collectData("10.369", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_374")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_374")}
                onChange={(e) => collectData("10.370", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_375")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_375")}
                onChange={(e) => collectData("10.371", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_376")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_376")}
                onChange={(e) => collectData("10.372", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_377")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_377")}
                onChange={(e) => collectData("10.373", e.target.value)}
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                value={getText("ans10_378")}
                control={
                  <Checkbox
                    sx={{
                      color: "silver",
                      "&.Mui-checked": {
                        color: "#FFD0D4",
                      },
                    }}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                  />
                }
                label={getText("ans10_378")}
                onChange={(e) => collectData("10.374", e.target.value)}
              />
            </AccordionDetails>
          </Accordion>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          onChange={handleChange}
        >
          <Accordion
            expanded={expanded === "panel12" || expanded === "panel140"}
            onChange={handleChange("panel12")}
          >
            <AccordionSummary
              expandIcon={<img src={down} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography>
                <FormControlLabel
                  value={getText("ans10_379")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_379")}
                  onChange={(e) => collectData("10.375", e.target.value)}
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <FormControlLabel
                  value={getText("ans10_380")}
                  control={
                    <Checkbox
                      sx={{
                        color: "silver",
                        "&.Mui-checked": {
                          color: "#FFD0D4",
                        },
                      }}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label={getText("ans10_380")}
                  onChange={(e) => collectData("10.376", e.target.value)}
                />
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion
                expanded={expanded === "panel140"}
                onChange={handleChange("panel140")}
              >
                <AccordionSummary
                  expandIcon={<img src={down} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <FormControlLabel
                    value={getText("ans10_381")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_381")}
                    onChange={(e) => collectData("10.377", e.target.value)}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_382")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_382")}
                    onChange={(e) => collectData("10.378", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_383")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_383")}
                    onChange={(e) => collectData("10.379", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_384")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_384")}
                    onChange={(e) => collectData("10.380", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_385")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_385")}
                    onChange={(e) => collectData("10.381", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_386")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_386")}
                    onChange={(e) => collectData("10.382", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_387")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_387")}
                    onChange={(e) => collectData("10.383", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_388")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_388")}
                    onChange={(e) => collectData("10.384", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_389")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_389")}
                    onChange={(e) => collectData("10.385", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_390")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_390")}
                    onChange={(e) => collectData("10.386", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_391")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_391")}
                    onChange={(e) => collectData("10.387", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_392")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_392")}
                    onChange={(e) => collectData("10.388", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_393")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_393")}
                    onChange={(e) => collectData("10.389", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_394")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_394")}
                    onChange={(e) => collectData("10.390", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_395")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_395")}
                    onChange={(e) => collectData("10.391", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_396")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    onChange={(e) => collectData("10.392", e.target.value)}
                    label={getText("ans10_396")}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_397")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    onChange={(e) => collectData("10.393", e.target.value)}
                    label={getText("ans10_397")}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_398")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_398")}
                    onChange={(e) => collectData("10.394", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_399")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_399")}
                    onChange={(e) => collectData("10.395", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_400")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_400")}
                    onChange={(e) => collectData("10.396", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_401")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_401")}
                    onChange={(e) => collectData("10.397", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_402")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    onChange={(e) => collectData("10.398", e.target.value)}
                    label={getText("ans10_402")}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_403")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_403")}
                    onChange={(e) => collectData("10.399", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_404")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_404")}
                    onChange={(e) => collectData("10.400", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_405")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_405")}
                    onChange={(e) => collectData("10.401", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_406")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_406")}
                    onChange={(e) => collectData("10.402", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_407")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_407")}
                    onChange={(e) => collectData("10.403", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_408")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_408")}
                    onChange={(e) => collectData("10.404", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_409")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_409")}
                    onChange={(e) => collectData("10.405", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_410")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_410")}
                    onChange={(e) => collectData("10.406", e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <FormControlLabel
                    value={getText("ans10_411")}
                    control={
                      <Checkbox
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                      />
                    }
                    label={getText("ans10_411")}
                    onChange={(e) => collectData("10.407", e.target.value)}
                  />
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default MoralProblem2;
