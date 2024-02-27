'use client'

import { VisaDetails } from "@/components/flight/visa-details/visa-details";
import App from "../../app";
import ContainerMain from "@/components/container/main";
import Link from "next/link";
import ResultOrSearch from "@/components/search-form/result-or-form";
import Accordion from "./Accordion";
import { useState } from "react";
import VisaEntryTypeSelect from "@/components/form/input/VisaEntryTypeSelect";

export const Counter = () => {
  const [count, setcount] = useState<number>(1);

  return (
    <div className="md:p-2 inline-block bg-white md:border border-gray-200 md:rounded-lg">
      <div className="flex items-center gap-x-1.5">
        <button
          type="button"
          onClick={() => {
            setcount(Math.max(count - 1, 1));
          }}
          className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
        >
          <svg
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
          </svg>
        </button>

        <input
          className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0"
          type="text"
          value={count}
          onChange={(e) => {
            setcount(parseInt(e.target.value));
          }}
        />
        <button
          type="button"
          onClick={() => {
            setcount(count + 1);
          }}
          className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
        >
          <svg
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </button>
      </div>
    </div>
  );
};


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
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104488.72128303786!2d-80.73441578457359!3d35.074922517577015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885425172b21fd49%3A0x746b0871fd403a54!2sIndian%20Trail%2C%20NC%2C%20USA!5e0!3m2!1sen!2sbd!4v1703841214528!5m2!1sen!2sbd"
              className="w-full rounded-lg"
              height={380}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow max-w-md">
          <form className="">
            <div className="flex justify-between items-center px-4 py-3">
              <p className="font-semibold">Quantity</p>
            <Counter/>
            </div>
            <VisaEntryTypeSelect/>
            <Accordion
              defaultOpen={true}
              title="Single Entry"
              body={
                <div className="items-center flex flex-col gap-6 px-4 lg:px-6 py-4">
                <div className="w-full flex justify-between items-center">
                  <ul className="w-full space-y-1 text-gray-700 list-disc">
                    <li>Entry: Single</li>
                    <li>Max Stay: 30 Days</li>
                    <li>Validity: 90 Days</li>
                  </ul>
                  <div className="w-auto">
                    <h2 className="text-xl font-semibold text-gray-700 whitespace-nowrap">
                      BDT 4800
                    </h2>
                    <p className="text-sm font-medium text-gray-400">Embassy Fee</p>
                  </div>
                </div>
                <Link
                  href="/visa/booking"
                  className="items-center px-8 py-3 bg-green-500 font-medium gap-2 hover:bg-green-600 inline-flex rounded-lg text-center text-white"
                  type="submit"
                >
                  Book now
                </Link>
              </div>
              }
            />
          </form>
        </div>
      </ContainerMain>
    </App>
  );
};

export default Page;
