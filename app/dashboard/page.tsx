"use client";

import Status from "./status";
import LineChart from "@/components/charts/line-chart";
import AccountCard from "./credit-card";
import BarChart from "@/components/charts/bar-chart";
import RecentTransactions from "./recent-transactions";
import Payments from "./payments";
import App from "../app";
import ProgressLine from "@/components/progress-bar/ProgressLine";
import { MdContacts, MdSettingsApplications, MdFastfood } from "react-icons/md";
import { FaHouseChimney } from "react-icons/fa6";



export default function Home() {
  return (
    <App>
      <main className="p-3 xs:px-4 sm:px-8 py-3 xs:py-4 sm:py-8">
        <div className="space-y-8 lg:space-y-12">
          <Status />
          <div className="flex flex-col xl:grid xl:grid-cols-3 gap-8 2xl:gap-12">
            <div className="xl:col-span-2 space-y-12">
              <div>
                <LineChart />
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="">
                  <BarChart />
                </div>
                <Payments/>
              </div>
            </div>
            <div className="xl:col-span-1 space-y-4">
              <div className="flex sm:grid xl:flex flex-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-12">
                <div>
                  <AccountCard />
                </div>
                <div className="">
                  <RecentTransactions />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </App>
  );
}
