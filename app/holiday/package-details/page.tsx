"use client";

import App from "../../app";
import ContainerMain from "@/components/container/main";
import PackageDetailsSummary from "./PackageDetailsSummary"
import HolidayTripPlan from "./HolidayTripPlan";
import { HolidayDetails } from "./HolidayDetails";


export type PageProps = {};

const Page: React.FC<PageProps> = () => {
  return (
    <App>
      <div>
        <p className="px-5 mt-5 text-lg font-semibold ml-5">Package Details</p>
      </div>
      <ContainerMain className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 p-4 md:p-8 rounded-xl bg-white shadow-md space-y-6">
          <HolidayDetails/>
        </div>
        <PackageDetailsSummary/>
      </ContainerMain>
    </App>
  );
};

export default Page;
