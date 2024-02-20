import React, { FC, useEffect, useRef, useState } from "react";
import Button from "../buttons/Button";

interface Props {}

const OTPField: FC<Props> = (props): JSX.Element => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const { value } = target;
    const newOtp: string[] = [...otp];
    newOtp[index] = value.substring(value.length - 1); // Extracting only a single element from input

    if (!value) setActiveOtpIndex(index - 1);
    else setActiveOtpIndex(index + 1);

    setOtp(newOtp);
  };

  const handleOnKeyDown = (e, index) => {
    if (e.key === "Tab") {                          // When Tab is pressed go to the next input box
      e.preventDefault();
      setActiveOtpIndex(activeOtpIndex + 1);
    }
    if (e.key === "Backspace" && !e.target.value) { // When Backspace is pressed go to the previous input box
      e.preventDefault();
      setActiveOtpIndex(activeOtpIndex - 1);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();  // Change focus to the next box as soon as a key is typed
  }, [activeOtpIndex]);

  return (
    <>
      <div className="flex justify-center items-center space-x-2 px-6 py-10">
        {otp.map((_, index) => {
          return (
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
          );
        })}
      </div>
      <Button classes="py-3 px-10">Validate</Button>
    </>
  );
};

export default OTPField;
