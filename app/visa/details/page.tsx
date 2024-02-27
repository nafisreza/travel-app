'use client'

import { VisaDetails } from "@/components/flight/visa-details/visa-details";
import App from "../../app";
import ContainerMain from "@/components/container/main";
import Link from "next/link";
import ResultOrSearch from "@/components/search-form/result-or-form";
import Accordion from "./Accordion";

export type PageProps = {};

const Page: React.FC<PageProps> = () => {
  return (
    <App>
      <ResultOrSearch />
      <ContainerMain className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 p-4 md:p-8 rounded-xl bg-white shadow space-y-6">
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
            <h3 className="border-b font-semibold p-4 lg:px-6 text-lg">
              Booking Summary
            </h3>
            <div className="items-center flex flex-col gap-6 px-4 lg:px-6 py-8">
              <div className="w-full flex justify-between items-center">
                <ul className="w-full space-y-2 text-gray-700">
                  <li>Entry: Single</li>
                  <li>Max Stay: 30 Days</li>
                  <li>Validity: 90 Days</li>
                </ul>
                <div className="w-auto">
                  <h2 className="text-2xl font-semibold text-gray-700 whitespace-nowrap">
                    BDT 4800
                  </h2>
                  <p className="text-gray-500">Embassy Fee</p>
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
          </form>
        </div>
      </ContainerMain>
    </App>
  );
};

export default Page;
