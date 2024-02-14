import RecentTransections from "./recent-transection";

const AccountCard = () => {
    return (
        <div className="relative w-full bg-green-500/10 rounded-lg py-4 flex flex-col lg:flex-row xl:flex-col gap-4 pr-8">
            <div className="rounded-lg space-y-4 px-4">
                <h3 className="h3">Account Card</h3>
                <div className="w-full md:max-w-sm relative text-white flex items-center">
                    <img className="object-contain w-full rounded-lg shadow-xl z-[3] hover:z-[4]" loading="lazy" src="/assets/images/credit-card.png" />
                    <img className="object-contain w-[80%] rounded-lg shadow-xl z-[2] hover:z-[4] absolute -right-4" loading="lazy" src="/assets/images/credit-card.png" style={{ filter: "grayscale(0.5)" }} />
                    <img className="object-contain w-[60%] rounded-lg shadow-xl z-[1] hover:z-[4] absolute -right-8" loading="lazy" src="/assets/images/credit-card.png" style={{ filter: "grayscale(1)" }} />
                </div>
            </div>
        </div>
    )
}

export default AccountCard;