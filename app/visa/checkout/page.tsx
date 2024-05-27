'use client';

import App from "../../app"
import ContainerMain from "@/components/container/main"
import { SelectCountry } from "@/components/input/select/CountrySelect"
import SelectPhoneCode from "@/components/input/select/SelectPhoneCode"
import { IoWalletSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import axios from "axios";
import PaymentGateway from './PaymentGateway'

type Props = {}

const Page: React.FC<Props> = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const count = searchParams.get('count') || '1';
    const totalFee = searchParams.get('totalFee') || '0';

    const packageId = searchParams.get("packageId");
    const productId = searchParams.get("productId"); 

    const vat = parseInt(totalFee) * 0.05
    const deliveryFee = 150

    const payableAmount = parseInt(totalFee) + vat + deliveryFee

    const handleSubmit = (e: any) => {
        e.preventDefault();
        router.replace('/visa/order-details');
    };

    const [bookingData, setBookingData] = useState<any>(null);

    const PARTNER_API = process.env.NEXT_PUBLIC_PARTNER_API

    useEffect(() => {
        const fetchVisaBookingDetails = async () => {
          try {
            const response = await axios.get(
              `${PARTNER_API}/packages/${packageId}/products/${productId}/bookings`,
              {
                headers: {
                  Authorization: "Bearer 354|SRmsDVJRGG7gE6nPDNptMUgAFvnXxtRWMP1J9V9aeac014f2",
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  "Accept-Language": "en",
                  'X-App-Latitude': 23.6101974,
                  'X-App-Longitude': 90.4597919,
                  'X-App-Currency': 'BDT'
                },
              }
            );
            setBookingData(response.data.payload);
          } catch (error) {
            console.error("Error fetching visas:", error);
          }
        };
        fetchVisaBookingDetails();
    }, []);


    const travelers = bookingData?.travelers || [];

    const priceId = bookingData?.prices.id;

    return (
        <App>
            <ContainerMain className="">
                <form className="grid lg:grid-cols-3 gap-8 items-start" onSubmit={handleSubmit}>
                    <div className="lg:col-span-2 p-4 md:p-8 rounded-xl bg-white shadow">
                        <div className="w-full rounded-lg text-center">
                            <div className="w-full space-y-6 lg:space-y-10">
                                
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                                    <div className="md:col-span-2 relative">
                                        <select className="w-full rounded-lg border bg-white py-3 md:py-4 px-4 text-base text-body-color placeholder:text-gray-500 outline-none focus:border-primary focus-visible:shadow-none">
                                            {travelers.map((traveler: any) => (
                                                <option key={traveler.id} value={traveler.id}>{traveler.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="w-full flex items-center max-w-md mx-auto">
                                    <div className="w-full h-[1px] bg-gray-300"></div>
                                    <div className="px-2 whitespace-nowrap text-gray-500">Or, Enter traveler details below</div>
                                    <div className="w-full h-[1px] bg-gray-300"></div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                                    <div className="md:col-span-2 relative">
                                        <input type="text" placeholder="Full Name (as per passport)" name="businessName" className="w-full rounded-lg border bg-white py-3 md:py-4 px-4 text-base text-body-color placeholder:text-gray-500 outline-none focus:border-primary focus-visible:shadow-none" />
                                    </div>
                                    <div className="relative">
                                        <div className="w-full rounded-lg border bg-white text-base text-body-color placeholder:text-gray-500 flex items-center gap-2">
                                            {/* <SelectPhoneCode /> */}
                                            <input type="text" placeholder="Phone" name="phone" className="h-full w-full py-3 lg:py-4 outline-none focus-visible:shadow-none" required />
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <input type="email" placeholder="Email" name="email" className="w-full rounded-lg border bg-white py-3 md:py-4 px-4 text-base text-body-color placeholder:text-gray-500 outline-none focus:border-primary focus-visible:shadow-none" required />
                                    </div>
                                    <div className="relative">
                                        <input type="text" placeholder="Passport No" name="passportNo" className="w-full rounded-lg border bg-white py-3 md:py-4 px-4 text-base text-body-color placeholder:text-gray-500 outline-none focus:border-primary focus-visible:shadow-none" />
                                    </div>
                                    <div className="relative">
                                        <input type="text" placeholder="Passport Expiry Date" name="passportDate" className="w-full rounded-lg border bg-white py-3 md:py-4 px-4 text-base text-body-color placeholder:text-gray-500 outline-none focus:border-primary focus-visible:shadow-none" />
                                    </div>
                                    <div className="relative">
                                        <input type="text" placeholder="City" name="city" className="w-full rounded-lg border bg-white py-3 md:py-4 px-4 text-base text-body-color placeholder:text-gray-500 outline-none focus:border-primary focus-visible:shadow-none" />
                                    </div>
                                    <div className="relative">
                                        <input type="text" placeholder="Country" name="country" className="w-full rounded-lg border bg-white py-3 md:py-4 px-4 text-base text-body-color placeholder:text-gray-500 outline-none focus:border-primary focus-visible:shadow-none" />
                                    </div>
                                    <div className="md:col-span-2 relative">
                                        <textarea name="" id="" cols={30} rows={5} placeholder="Passport & Documents Collection Address" className="w-full rounded-lg border bg-white py-3 md:py-4 px-4 text-base text-body-color placeholder:text-gray-500 outline-none focus:border-primary focus-visible:shadow-none"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow max-w-md">
                        <h3 className="border-b font-semibold p-4 lg:px-6 text-lg">Booking Summary</h3>
                        <div className="items-center flex flex-col gap-6 px-4 lg:px-6  py-4">
                            <div className="w-full relative overflow-x-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-900 font-medium">
                                    <tbody>
                                        <tr className="">
                                        <td className="py-2 whitespace-nowrap">{count}x Single Entry Visa</td>
                                            <td className="py-2 text-end">BDT {totalFee}</td>
                                        </tr>
                                        <tr className="">
                                            <td className="py-2 whitespace-nowrap">Courier Charge</td>
                                            <td className="py-2 text-end">BDT {deliveryFee}</td>
                                        </tr>
                                        <tr className="">
                                            <td className="py-2 whitespace-nowrap">VAT 5%</td>
                                            <td className="py-2 text-end">BDT {vat}</td>
                                        </tr>
                                        <tr className="">
                                            <td className="py-2 font-bold whitespace-nowrap">Total</td>
                                            <td className="py-2 font-bold text-end">BDT {payableAmount}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="">
                                <button className="items-center px-8 py-3 bg-green-500 font-medium gap-2 hover:bg-green-600 inline-flex rounded-lg text-center text-white" type="submit">
                                <IoWalletSharp size="20" /> Wallet Pay (no charge)
                                </button>
                            </div>
                            <div className="w-full flex items-center">
                                <div className="w-full h-[1px] bg-gray-300"></div>
                                <div className="px-2 whitespace-nowrap text-gray-500">with 2% extra gateway charge</div>
                                <div className="w-full h-[1px] bg-gray-300"></div>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center">
                                <PaymentGateway priceId={priceId}/>
                            </div>
                        </div>
                    </div>
                </form>
            </ContainerMain>
        </App >
    )
}

export default Page

