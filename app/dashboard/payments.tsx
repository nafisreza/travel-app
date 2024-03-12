import ProgressLine from "@/components/progress-bar/ProgressLine";
import { FaHouseChimney } from "react-icons/fa6";
import { MdContacts, MdFastfood, MdSettingsApplications } from "react-icons/md";

export default function Payments() {
    return (
      <div className="bg-green-500/10 px-6 py-4 rounded-xl 2xl:p-10">
        <p className="text-xl mb-6 text-green-500 font-semibold">Payments</p>
  
        {/* Progressline components */}
        <ProgressLine label="Account" remainingBalance={4000} totalBalance={8000}>
          <MdContacts className="text-2xl text-green-500" />
        </ProgressLine>
  
        <ProgressLine
          label="Software"
          remainingBalance={5460}
          totalBalance={9120}
        >
          <MdSettingsApplications className="text-2xl text-green-500" />
        </ProgressLine>
  
        <ProgressLine
          label="Rent House"
          remainingBalance={5460}
          totalBalance={6245}
        >
          <FaHouseChimney className="text-2xl text-green-500" />
        </ProgressLine>
  
        <ProgressLine label="Food" remainingBalance={3460} totalBalance={9120}>
          <MdFastfood className="text-2xl text-green-500" />
        </ProgressLine>
      </div>
    );
  }