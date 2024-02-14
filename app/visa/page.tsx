import ContainerMain from "@/components/container/main"
import Card from "../_home/card"
import App from "../app"
import VisaSearch from "@/components/search-form/visa-search"

type Props = {}

const Page: React.FC<Props> = () => {
    return (
        <App>
            <ContainerMain className="space-y-8">
                <VisaSearch />
                <Card />
            </ContainerMain>
        </App>
    )
}

export default Page;