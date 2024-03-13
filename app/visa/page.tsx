import ContainerMain from "@/components/container/main"
import Card from "../dashboard/card"
import App from "../app"
import VisaSearch from "@/components/search-form/visa-search"
import VisaSlider from "@/components/swiper/visa-slider/VisaSlider"
import { LocationProvider } from "../contexts/LocationContext"

type Props = {}

const Page: React.FC<Props> = () => {
    return (
        <App>
            <ContainerMain className="space-y-8">
                <div className="flex flex-col justify-center items-center">
                <h1 className='text-xl font-semibold justify-center' id='multiplefeatures'>
				Search Visa
			</h1>
                <div className="lg:ml-[180px]"><VisaSearch /></div>
                </div>
                <div className="mx-12">
                <VisaSlider/>
                </div>
            </ContainerMain>
        </App>
    )
}

export default Page;