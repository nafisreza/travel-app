'use client';

import App from "../../app"
import ContainerMain from "@/components/container/main"
import VisaSearchCard from "@/components/card/flight/VisaSearchCard"
import ResultOrSearch from "@/components/search-form/result-or-form";
import HolidaySearchBar from "./HolidaySearchBar";

type Props = {}

const Page: React.FC<Props> = () => {
    return (
        <App>
            <HolidaySearchBar/>
            <ContainerMain className="space-y-8">
                <VisaSearchCard />
            </ContainerMain>
        </App>
    )
}

export default Page