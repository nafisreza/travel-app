'use client'

import FlightSearch from "@/components/search-form/flight-search"
import SearchResult from "../dashboard/search-results-card"
import App from "../app"
import VisaSlider from "@/components/swiper/visa-slider/VisaSlider"

type Props = {}

const Page: React.FC<Props> = () => {
    return (
        <App>
            <main className="px-4 sm:px-8 py-4 sm:py-8 space-y-8">
                <div className="">
                <FlightSearch />
                </div>
                <SearchResult />
                <VisaSlider/>
            </main>
        </App>
    )
}

export default Page;