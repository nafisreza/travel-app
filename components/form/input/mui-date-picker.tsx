"use client"

import React, { useEffect, useRef, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs, { Dayjs } from 'dayjs';
import './calender.css';

export type OptionProps = {
    date: any;
    handleOpen: () => void;
    bottomText: String;
}

export const CustomDatePicker: React.FC<OptionProps> = ({ date, handleOpen, bottomText }) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate(),
        month = dateObj.toLocaleString('default', { month: 'long' }),
        year = dateObj.getFullYear(),
        weekDay = dateObj.toLocaleString('default', { weekday: 'long' });
    return (
        <button type='button' className="h-14 w-full py-2 divide-x flex items-center border rounded-xl hover:border-gray-400" onClick={handleOpen}>
            <div className="h-full min-w-[3.75rem] flex justify-center items-center font-semibold">{day}</div>
            <div className="w-full border-l pl-3 text-start">
                <h5 className="text-sm font-medium">{month} {year}, {weekDay} </h5>
                <p className='text-xs text-gray-400'>{bottomText}</p>
            </div>
        </button>
    )
}

export default function MUIDatePicker({bottomText}) {
    const [date, setdate] = useState<Dayjs>(dayjs(new Date()));
    const [open, setopen] = useState<boolean>(false);
    const wrapperRefMUI = useRef<HTMLDivElement | null>(null);

    function handleChange(value: any): void {
        if (!value) return;
        if (value) setdate(value);
        setopen(false);
    }

    useEffect(() => {
        if (!wrapperRefMUI.current) return;
        [`click`, `touchstart`].forEach((type) => {
            document.addEventListener(`click`, (evt: any) => {
                if (wrapperRefMUI.current?.contains(evt.target)) return;
                setopen(false);
            });
        });
    });

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="w-full relative" ref={wrapperRefMUI}>
                <CustomDatePicker date={date} handleOpen={() => { setopen(!open) }} bottomText={bottomText} />
                {
                    open &&
                    <div className="absolute top-full left-0 bg-white shadow-lg border">
                        <DateCalendar
                        slotProps={{
                            leftArrowIcon: {
                              sx: { color: "#1eb649", fontSize: "2rem" }
                            },
                            rightArrowIcon: {
                              sx: { color: "#1eb649", fontSize: "2rem" }
                            },
                            calendarHeader: {
                              sx: {
                                position: "relative",
                                "& .MuiPickersArrowSwitcher-root": {
                                  width: 0
                                },
                                "& .MuiPickersCalendarHeader-labelContainer": {
                                  margin: "auto"
                                },
                                "& .MuiIconButton-edgeEnd": {
                                  position: "absolute",
                                  left: 0,
                                  top: 0,
                                  bottom: 0
                                },
                                "& .MuiIconButton-edgeStart": {
                                  position: "absolute",
                                  right: 0,
                                  top: 0,
                                  bottom: 0
                                }
                              }
                            }
                          }}
                        openTo='day' defaultValue={date} onChange={handleChange} />
                    </div>
                }
            </div>
        </LocalizationProvider>
    );
}