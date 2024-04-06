"use client";

import { VisaDetails } from "@/components/flight/visa-details/visa-details";
import App from "../../app";
import ContainerMain from "@/components/container/main";
import Link from "next/link";
import ResultOrSearch from "@/components/search-form/VisaSearchSummary";
import Accordion from "./Accordion";
import { useState } from "react";
import { LocationProvider } from "@/app/contexts/LocationContext";
import VisaDetailsMap from "./VisaDetailsMap";
import VisaDetailsSummary from "./VisaDetailsSummary";


export type PageProps = {};

const Page: React.FC<PageProps> = () => {
  return (
    <App>
      <div>
        <p className="px-5 mt-5 text-lg font-semibold ml-5">Visa Details</p>
      </div>
      <ContainerMain className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 p-4 md:p-8 rounded-xl bg-white shadow-md space-y-6">
          <VisaDetails />
          <div className="space-y-3">
            <Accordion
              title="Important Notes"
              body={
                <ul className="list-disc ml-10">
                  <li>Visa Fee non refundable</li>
                  <li>All rights reserved by Embassy</li>
                </ul>
              }
              defaultOpen={true}
            />
            <Accordion
              title="Job Holder"
              body={
                <ul className="list-disc ml-10">
                  <li>Visa Fee non refundable</li>
                  <li>All rights reserved by Embassy</li>
                </ul>
              }
            />
            <Accordion
              title="Businessman"
              body={
                <ul className="list-disc ml-10">
                  <li>Visa Fee non refundable</li>
                  <li>All rights reserved by Embassy</li>
                </ul>
              }
            />
            <Accordion
              title="Student"
              body={
                <ul className="list-disc ml-10">
                  <li>Visa Fee non refundable</li>
                  <li>All rights reserved by Embassy</li>
                </ul>
              }
            />
          </div>
          <VisaDetailsMap />
        </div>
        <VisaDetailsSummary/>
      </ContainerMain>
    </App>
  );
};

export default Page;
