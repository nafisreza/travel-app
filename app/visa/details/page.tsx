"use client";

import { VisaDetails } from "@/components/flight/visa-details/visa-details";
import App from "../../app";
import ContainerMain from "@/components/container/main";
import Accordion from "./Accordion";
import VisaDetailsMap from "./VisaDetailsMap";
import VisaDetailsSummary from "./VisaDetailsSummary";
import { useEffect, useState } from "react";
import axios from "axios";


export type PageProps = {};

const Page: React.FC<PageProps> = () => {
  const [visaDetails, setVisaDetails] = useState<any>(null);

  useEffect(() => {
    const fetchVisaDetails = async () => {
      try {
        const response = await axios.get(
          `http://endorse.guideasy.com/api/v1/client-management/packages/9aedbe05-ffe8-42f9-a1df-d0982b605845/products/9aedb861-2ca1-47db-b02d-a630351bcb36`,
          {
            headers: {
              Authorization: "Bearer 354|SRmsDVJRGG7gE6nPDNptMUgAFvnXxtRWMP1J9V9aeac014f2",
              Accept: "application/json",
              "Content-Type": "application/json",
              "Accept-Language": "en",
              'X-App-Latitude': 23.6101974,
              'X-App-Longitude': 90.4597919,
              'X-App-Currency': 'BDT'
            },
          }
        );
        setVisaDetails(response.data.payload);
      } catch (error) {
        console.error("Error fetching visas:", error);
      }
    };

    fetchVisaDetails();
  }, []);

  return (
    <App>
      <div>
        <p className="px-5 mt-5 text-lg font-semibold ml-5">Visa Details</p>
      </div>
_{
  visaDetails &&
  <ContainerMain className="grid lg:grid-cols-3 gap-8 items-start">
  <div className="lg:col-span-2 p-4 md:p-8 rounded-xl bg-white shadow-md space-y-6">
    <VisaDetails visaDetails={visaDetails}/>
    <div className="space-y-3">
   
      <div className="mb-8">
        <h1 className="text-green-700 font-semibold text-md">Requisites:</h1>
        {visaDetails.requisites.map((requisite: any) => (
          <li type="1">{requisite}</li>
        ))}
      </div>
        {visaDetails.documents.map((document: any) => (
          <Accordion key={document.title} title={document.title} body={document.paper.map((item: string, index: number) => <li key={index}>{item}</li>)} />
        ))}
    </div>
    <VisaDetailsMap visaDetails={visaDetails} />
  </div>
  <VisaDetailsSummary visaDetails={visaDetails}/>
</ContainerMain>
}
    </App>
  );
};

export default Page;
