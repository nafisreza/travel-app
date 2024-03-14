import ContainerMain from "@/components/container/main";
import App from "../app";
import VisaSearch from "@/components/search-form/visa-search";
import VisaSlider from "@/components/swiper/visa-slider/VisaSlider";
import { LocationProvider } from "../contexts/LocationContext";
import HolidaySearch from "./holiday-search";

type Props = {};

const Page: React.FC<Props> = () => {
  return (
    <App>
      <ContainerMain className="space-y-8">
        <div className="flex flex-col justify-center items-center">
          <h1
            className="text-xl font-semibold justify-center"
            id="multiplefeatures"
          >
            Search Holiday Package
          </h1>
          <div className="lg:ml-[180px]">
            <HolidaySearch />
          </div>
        </div>
        <div className="mx-12">
          <h1 className="text-md font-semibold" id="multiplefeatures">
            Holiday Offer
          </h1>
          <VisaSlider />
        </div>
      </ContainerMain>
    </App>
  );
};

export default Page;
