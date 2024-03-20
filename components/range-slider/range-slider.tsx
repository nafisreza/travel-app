import React from "react";
import { Box, Slider } from "@mui/material";

type RangeSliderProps = {
  onChange: (newValue: number[]) => void;
};

function valuetext(value: number) {
  return `${value}°C`;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ onChange }) => {
  const [value, setValue] = React.useState<number[]>([0, 500000]);

//   const handleChange = (
//     event: Event,
//     newValue: number | number[]
//   ) => {
//     setValue(newValue as number[]);
//     onChange(newValue as number[]);
//   };

  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        sx={{ color: "rgb(34 197 94)" }}
        getAriaLabel={() => "Temperature range"}
        value={value}
        // onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max={10000}
      />
      <div className="">
        <div className="flex justify-between">
          <span className="text-sm">BDT {value[0]}</span>
          <span className="text-sm">BDT {value[1]}</span>
        </div>
      </div>
    </Box>
  );
};

export default RangeSlider;
