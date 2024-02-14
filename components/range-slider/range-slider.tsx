'use client';
import * as React from 'react';
import { Box, Slider } from '@mui/material';

function valuetext(value: number) {
    return `${value}°C`;
}

export default function RangeSlider() {
    const [value, setValue] = React.useState<number[]>([2000, 3700]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Slider
                sx={{ color: "rgb(34 197 94)" }}
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
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
}