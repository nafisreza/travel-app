'use client';

import App from "../../app"
import ContainerMain from "@/components/container/main"
import VisaSearchCard from "@/components/card/flight/VisaSearchCard"
import VisaSearchSummary from "@/components/search-form/VisaSearchSummary";
import axios from "axios";
import { useEffect } from "react";

type Props = {}

const Page: React.FC<Props> = () => {

    return (
        <App>
            <VisaSearchSummary />
            <ContainerMain className="space-y-8">
                <VisaSearchCard />
            </ContainerMain>
        </App>
    )
}

export default Page