import ContainerMain from "@/components/container/main"
import Card from "../dashboard/card"
import App from "../app"
import VisaSearch from "@/components/search-form/visa-search"
import VisaSlider from "@/components/swiper/visa-slider/VisaSlider"

type Props = {}

const Page: React.FC<Props> = () => {
    return (
        <App>
            <ContainerMain className="space-y-8">
                <VisaSearch />
                <VisaSlider/>
            </ContainerMain>
        </App>
    )
}

export default Page;