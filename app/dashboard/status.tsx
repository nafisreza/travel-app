import StatusCard from "@/components/card/StatusCard";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaMoneyCheck } from "react-icons/fa6";


export default function Card() {
    return (
        <section className="space-y-2">
            <h1 className="h3">Account Status</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 lg:gap-6">
                <StatusCard title="Balance" amount="$41,210"><MdAccountBalanceWallet size="24"/></StatusCard>
                <StatusCard title="Income" amount="$23,450"><FaSackDollar size="24"/></StatusCard>
                <StatusCard title="Expenses" amount="$51,240"><FaMoneyCheck size="24"/></StatusCard>
                <StatusCard title="Deposited" amount="$16,234"><AiFillDollarCircle size="24"/></StatusCard>

            </div>
        </section>
    )
}
