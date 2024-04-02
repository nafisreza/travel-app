import Button from "@/components/buttons/Button";
import { SelectCountry } from "@/components/input/select/CountrySelect";
import SelectPhoneCode from "@/components/input/select/SelectPhoneCode";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import axios from "axios";
import setPhoneCodes from '@/components/input/select/SelectPhoneCode'
import { fetchApi } from "../redux/slice/apiSlice";
import { useDispatch, useSelector } from "react-redux";

function Register() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    axios.get('https://partner.guideasy.com/api/v1/auth-management/registration')
      .then(function (response) {
        setResponse(response.data.payload);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const router = useRouter();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/dashboard");
  }

  const [emailMaskError, setEmailMaskError] = useState<boolean>(false);
  const checkEmailMask = (email: any) => {
    if (/.+@.+\.[A-Za-z]+$/.test(email)) {
      setEmailMaskError(false);
    } else {
      setEmailMaskError(true);
    }
  };

  return (
    <div className="lg:self-end md:max-w-4xl rounded-2xl md:rounded-3xl flex-shrink-0 w-full bg-black/20 grid place-items-center relative">
      <div className="w-full rounded-lg p-3 md:p-10 text-center">
        <form
          className="w-full space-y-6 lg:space-y-10"
          onSubmit={handleSubmit}
        >
          <h2 className="text-md md:text-3xl lg:text-4xl font-semibold text-white w-full">
            Become our valuable partner
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            <div className="">
              <SelectCountry/>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Business Name"
                name="businessName"
                className="w-full rounded-lg bg-white p-2 lg:py-3 md:py-4 md:px-4 md:text-base text-body-color placeholder:text-gray-500 text-xs outline-none focus:border-primary focus-visible:shadow-none"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                className="w-full rounded-lg bg-white p-2 lg:py-3 md:py-4 md:px-4 md:text-base text-body-color placeholder:text-gray-500 text-xs outline-none focus:border-primary focus-visible:shadow-none"
                required
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                className="w-full rounded-lg bg-white p-2 lg:py-3 md:py-4 md:px-4 md:text-base text-body-color placeholder:text-gray-500 text-xs outline-none focus:border-primary focus-visible:shadow-none"
              />
            </div>
            <div className="relative">
              <div className="w-full rounded-lg bg-white text-base text-body-color placeholder:text-gray-500 flex items-center gap-2">
                <SelectPhoneCode />
              </div>
            </div>
            <div className="relative">
              <input
                type="email"
                onChange={(e) => checkEmailMask(e.target.value)}
                placeholder="Email"
                name="email"
                className="w-full rounded-lg bg-white p-2 lg:py-3 md:py-4 md:px-4 md:text-base text-body-color placeholder:text-gray-500 text-xs outline-none focus:border-primary focus-visible:shadow-none"
                required
              />
              {emailMaskError ? (
                ""
              ) : (
                <p className="text-green-500 text-end text-xs font-semibold">
                  Valid email
                </p>
              )}
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="w-full rounded-lg bg-white p-2 lg:py-3 md:py-4 md:px-4 md:text-base text-body-color placeholder:text-gray-500 text-xs outline-none focus:border-primary focus-visible:shadow-none"
                required
              />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                className="w-full rounded-lg bg-white p-2 lg:py-3 md:py-4 md:px-4 md:text-base text-body-color placeholder:text-gray-500 text-xs outline-none focus:border-primary focus-visible:shadow-none"
                required
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button classes="p-3 md:py-3 md:px-6 flex gap-3 bg-green-500 rounded-sm md:mt-4">
              {" "}
              <div className="text-xs md:text-lg"> Become Our Partner</div>{" "}
              <HiArrowRight />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;