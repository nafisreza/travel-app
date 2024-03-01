'use client';

import App from "../../app"
import ContainerMain from "@/components/container/main"
import { SelectCountry } from "@/components/input/select/CountrySelect"
import SelectPhoneCode from "@/components/input/select/SelectPhoneCode"
import { IoWalletSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

type Props = {}

const Page: React.FC<Props> = () => {
    const router = useRouter();

    return (
        <App>
            <ContainerMain className="">
                <form className="grid lg:grid-cols-3 gap-8 items-start" onSubmit={(e: any) => {
                    e.preventDefault();
                    router.replace('/visa/order-details');
                }}>
                    <div className="lg:col-span-2 p-4 md:p-8 rounded-xl bg-white shadow">
                        <div className="w-full rounded-lg text-center">
                            <div className="w-full space-y-6 lg:space-y-10">
                                <SelectCountry />
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
                                            <SelectPhoneCode />
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
                                            <td className="py-2 whitespace-nowrap">1x Single Entry Visa</td>
                                            <td className="py-2 text-end">BDT 4800</td>
                                        </tr>
                                        <tr className="">
                                            <td className="py-2 whitespace-nowrap">Courier Charge</td>
                                            <td className="py-2 text-end">BDT 150</td>
                                        </tr>
                                        <tr className="">
                                            <td className="py-2 whitespace-nowrap">VAT 5%</td>
                                            <td className="py-2 text-end">BDT 120</td>
                                        </tr>
                                        <tr className="">
                                            <td className="py-2 font-bold whitespace-nowrap">Total</td>
                                            <td className="py-2 font-bold text-end">BDT 5200</td>
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
                            <div className="w-full flex items-center">
                                <img className="w-16 h-12 rounded-md max-w-xs mx-auto object-contain border p-2" src="/assets/images/payment-gateways/bkash.png" alt="payment" />
                                <img className="w-16 h-12 rounded-md max-w-xs mx-auto object-contain border p-2" src="/assets/images/payment-gateways/nagad.png" alt="payment" />
                                <img className="w-16 h-12 rounded-md max-w-xs mx-auto object-contain border p-2" src="/assets/images/payment-gateways/citybank.png" alt="payment" />
                                <img className="w-16 h-12 rounded-md max-w-xs mx-auto object-contain border p-2" src="/assets/images/payment-gateways/dbbl.png" alt="payment" />
                            </div>
                        </div>
                    </div>
                </form>
            </ContainerMain>
        </App >
    )
}

export default Page