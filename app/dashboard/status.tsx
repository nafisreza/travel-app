import { FaDollarSign } from "react-icons/fa6"


export const CardItem: React.FC = () => {
    return (
        <div className="px-3 sm:px-5 py-2 sm:py-3 flex items-center gap-2 sm:gap-4 lg:gap-5 bg-green-500/10 rounded-2xl text-green-500">
            <div className="flex-shrink-0 h-10 sm:h-12 w-10 sm:w-12 flex items-center justify-center rounded-xl bg-gray-900 shadow-gray-900 /50 dark:bg-accent dark:shadow-accent/50">
                <FaDollarSign className="text-2xl text-green-500" />
            </div>
            <div className="flex-grow">
                <p className="font-medium text-sm md:text-base text-gray-500">Income</p>
                <p className="font-medium text-green-500 dark:text-navy-100">
                    <span className="sm:text-xl md:text-2xl lg:text-3xl font-semibold whitespace-nowrap">$41,210</span>
                </p>
            </div>
        </div>
    )
}

export default function Card() {
    return (
        <section className="space-y-2">
            <h1 className="h3">Multiple Features</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 lg:gap-6">
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
            </div>
        </section>
    )
}
