import RecentTransections from "./recent-transection";

const AccountCard = () => {
    return (
        <div className="w-full bg-green-500/10 rounded-lg px-2 py-6 flex flex-col lg:flex-row xl:flex-col gap-4">
            <div className="rounded-lg space-y-4 px-4">
                <div className="flex justify-between">
                <h3 className="text-green-500 font-semibold text-lg">Account Card</h3>
                <a href="" className="bg-black px-[8px] text-green-500 rounded-md font-bold">+</a>
                </div>
                <div className="text-white ">
                    <div className="bg-green-500 p-4 rounded-t-lg">
                        <h2 className="text-white font-semibold tracking-wider">GUIDEASY</h2>
                        <h2 className="text-white my-5">3475 7381 3759 ****</h2>
                    </div>
                    <div className="bg-green-400 flex justify-between p-4 items-end rounded-b-lg">
                        <div>
                            <p className="text-[10px] text-gray-50/70">TOTAL BALANCE</p>
                            <p className="text-sm">3,422,424 USD</p>
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-50/70">EXP. DATE</p>
                            <p className="text-sm">04 / 24</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountCard;