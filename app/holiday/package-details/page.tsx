"use client";

import App from "../../app";
import ContainerMain from "@/components/container/main";
import { HolidayDetails } from "./HolidayDetails";
import HolidayPriceSummary from "./HolidayPriceSummary";


export type PageProps = {};

const Page: React.FC<PageProps> = () => {
  return (
    <App>
      <div>
        <p className="px-5 mt-5 text-lg font-semibold ml-5">Package Details</p>
      </div>
      {/* <ContainerMain className=""> */}
        <div>
          <HolidayDetails/>
        </div>
        {/* <HolidayPriceSummary/> */}
      {/* </ContainerMain> */}
    </App>
  );
};

export default Page;
