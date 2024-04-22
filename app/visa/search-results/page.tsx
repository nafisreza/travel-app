'use client';

import App from "../../app"
import ContainerMain from "@/components/container/main"
import VisaSearchCard from "@/components/card/flight/VisaSearchCard"
import VisaSearchSummary from "@/components/search-form/VisaSearchSummary";
import axios from "axios";
import { useEffect } from "react";

type Props = {}

const Page: React.FC<Props> = () => {

    useEffect(() => {
        const fetchVisas = async () => {
          try {
            const response = await axios.get(`http://endorse.guideasy.com/api/v1/client-management/packages/9aedbe05-ffe8-42f9-a1df-d0982b605845/products/9aedb861-2ca1-47db-b02d-a630351bcb36`, {
              headers: {
                Authorization: "Bearer 354|SRmsDVJRGG7gE6nPDNptMUgAFvnXxtRWMP1J9V9aeac014f2",
                Accept: "application/json",
                "Content-Type": "application/json",
                "Accept-Language": "en",
                'X-App-Latitude': 23.6101974,
                'X-App-Longitude': 90.4597919,
                'X-App-Currency': 'BDT'
              },
            });
            console.log(response.data.payload)
          } catch (error) {
            console.error("Error fetching visas:", error);
          }
        };
    
        fetchVisas();
      }, []);

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