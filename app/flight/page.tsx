'use client'

import VisaSearchForm from "@/components/search-form/visa-search-form"
import Card from "../dashboard/card"
import SearchResult from "../dashboard/results"
import App from "../app"

type Props = {}

const Page: React.FC<Props> = () => {
    return (
        <App>
            <main className="px-4 sm:px-8 py-4 sm:py-8 space-y-8">
                <VisaSearchForm />
                <SearchResult />
                <Card />
            </main>
        </App>
    )
}

export default Page;