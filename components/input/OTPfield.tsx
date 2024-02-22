import React, { FC, useEffect, useRef, useState } from "react";
import Button from "../buttons/Button";
import NewPasswordInput from "./NewPasswordInput";

interface OTPFieldProps {
    onValidateOTP: () => void;
  }
  
  const OTPField: FC<OTPFieldProps> = ({ onValidateOTP }): JSX.Element => {
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0);
  
    const inputRef = useRef<HTMLInputElement>(null);
  
    const handleOnChange = (
      { target }: React.ChangeEvent<HTMLInputElement>,
      index: number
    ): void => {
      const { value } = target;
      const newOtp: string[] = [...otp];
      newOtp[index] = value.substring(value.length - 1);
  
      if (!value) setActiveOtpIndex(index - 1);
      else setActiveOtpIndex(index + 1);
  
      setOtp(newOtp);
    };
  
    const handleOnKeyDown = (e, index) => {
      if (e.key === "Tab") {
        e.preventDefault();
        setActiveOtpIndex(activeOtpIndex + 1);
      }
      if (e.key === "Backspace" && !e.target.value) {
        e.preventDefault();
        setActiveOtpIndex(activeOtpIndex - 1);
      }
    };
  
    useEffect(() => {
      inputRef.current?.focus();
    }, [activeOtpIndex]);
  
    return (
      <>
        <p className="text-md font-bold">Enter 6 digit code sent to your mail.</p>
        <div className="flex justify-center items-center space-x-2 px-6 py-10">
          {otp.map((_, index) => (
            <React.Fragment key={index}>
              <input
                ref={index === activeOtpIndex ? inputRef : null}
                type="number"
                className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition"
                onChange={(e) => handleOnChange(e, index)}
                onKeyDown={handleOnKeyDown}
                value={otp[index]}
              />
              {index === otp.length - 1 ? null : (
                <span className="w-2 py-0.5 bg-gray-400" />
              )}
            </React.Fragment>
          ))}
        </div>
        <Button classes="py-3 px-10" onClick={onValidateOTP}>
          Validate
        </Button>
      </>
    );
  };
  
  export default OTPField;
