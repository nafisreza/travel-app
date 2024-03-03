"use client";

import Status from "./status";
import LineChart from "@/components/charts/line-chart";
import AccountCard from "./account-card";
import BarChart from "@/components/charts/bar-chart";
import Payments from "./payment";
import RecentTransections from "./recent-transection";
import App from "../app";
import ProgressLine from "@/components/progress-bar/ProgressLine";
import { FaDollarSign } from "react-icons/fa6";
import { MdContacts, MdSettingsApplications, MdFastfood } from "react-icons/md";
import { FaHouseChimney } from "react-icons/fa6";

export default function Home() {
  return (
    <App>
      <main className="p-3 xs:px-4 sm:px-8 py-3 xs:py-4 sm:py-8">
        <div className="space-y-8 lg:space-y-12">
          <Status />
          <div className="flex flex-col xl:grid xl:grid-cols-3 gap-4">
            <div className="xl:col-span-2 space-y-12">
              <div>
                <LineChart />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="">
                  <BarChart />
                </div>
                <div className="bg-green-500/10 p-4 rounded-xl">
                  <p className="text-xl mb-6 text-green-500 font-semibold">
                    Payments

                    {/* Progressline components */}
                  </p>
                  <ProgressLine
                    label="Account"
                    remainingBalance={4000}
                    totalBalance={8000}
                    visualParts={[
                      {
                        color: "#1FCB4F",
                      },
                    ]}
                  >
                    <MdContacts className="text-2xl text-green-500" />
                  </ProgressLine>

                  <ProgressLine
                    label="Software"
                    remainingBalance={5460}
                    totalBalance={9120}
                    visualParts={[
                      {
                        color: "#1FCB4F",
                      },
                    ]}
                  >
                    <MdSettingsApplications className="text-2xl text-green-500" />
                  </ProgressLine>

                  <ProgressLine
                    label="Rent House"
                    remainingBalance={5460}
                    totalBalance={6245}
                    visualParts={[
                      {
                        color: "#1FCB4F",
                      },
                    ]}
                  >
                    <FaHouseChimney className="text-2xl text-green-500" />
                  </ProgressLine>

                  <ProgressLine
                    label="Food"
                    remainingBalance={3460}
                    totalBalance={9120}
                    visualParts={[
                      {
                        color: "#1FCB4F",
                      },
                    ]}
                  >
                    <MdFastfood className="text-2xl text-green-500" />
                  </ProgressLine>


                </div>
              </div>
            </div>
            <div className="xl:col-span-1 space-y-4">
              <div className="flex sm:grid xl:flex flex-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <AccountCard />
                </div>
                <div>
                  <RecentTransections />
                </div>
                <div>
                  <Payments />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </App>
  );
}
