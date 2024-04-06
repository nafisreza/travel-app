'use client';

import App from "../../app"
import ContainerMain from "@/components/container/main"
import VisaSearchCard from "@/components/card/flight/VisaSearchCard"
import ResultOrSearch from "@/components/search-form/VisaSearchSummary";
import HolidaySearchBar from "./HolidaySearchBar";
import HolidaySearchResults from "./HolidaySearchResults"


type Props = {}

const Page: React.FC<Props> = () => {
    return (
        <App>
            <HolidaySearchBar/>
            <ContainerMain className="space-y-8">
                <HolidaySearchResults />
            </ContainerMain>
        </App>
    )
}

export default Page