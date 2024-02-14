import { VisaDetails } from "@/components/flight/visa-details/visa-details"
import App from "../../app"
import ContainerMain from "@/components/container/main"
import ResultOrSearch from "@/components/search-form/result-or-form"
import { CalendarSearch, Edit, Home2, Truck, User } from "iconsax-react"
import Home from "@/app/page"

export type PageProps = {}

const Page: React.FC<PageProps> = () => {
    return (
        <App>
            <ResultOrSearch />
            <ContainerMain className="flex gap-8 items-start">
                <div className="flex-grow p-4 md:p-8 rounded-xl bg-white shadow space-y-6">
                    <div className="flex gap-8 justify-between items-center">
                        <div className="space-y-3">
                            <div className="">
                                <h5 className="text-xl font-semibold text-gray-800">Order #GPO1002510</h5>
                            </div>
                            <ul className="flex flex-col items-start space-y-3 text-gray-600 text-sm">
                                <li className="flex justify-start items-start gap-2">
                                    <div className="flex gap-2 items-center">
                                        <CalendarSearch className="w-5 h-5" />
                                        17 Dec 2023  12:00PM
                                    </div>
                                </li>
                                <li className="flex justify-start items-start gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Home2 className="w-5 h-5" />
                                        Vendor: <button type="button" className="text-green-600 bg-green-100 font-medium rounded-lg text-sm px-2 py-1 focus:outline-none">Guideasy Private Limited.</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <table>
                            <tbody>
                                <tr className="">
                                    <td className="px-2 py-2 whitespace-nowrap">Status:</td>
                                    <td className="px-2 py-2 text-end">
                                        <button type="button" className="text-green-600 bg-green-100 font-medium rounded-lg text-sm px-2 py-1 focus:outline-none">Pending</button>
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="px-2 py-2 whitespace-nowrap">Payment Status:</td>
                                    <td className="px-2 py-2 text-end">Wallet</td>
                                </tr>
                                <tr className="">
                                    <td className="px-2 py-2 whitespace-nowrap">Payment Method:</td>
                                    <td className="px-2 py-2 text-end">Pending</td>
                                </tr>
                                <tr className="">
                                    <td className="px-2 py-2 whitespace-nowrap">Cupon:</td>
                                    <td className="px-2 py-2 text-end">N/A</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase bg-green-100">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            #
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Order Item
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Qty
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-end">
                                            Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b">
                                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            1
                                        </td>
                                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Thailand Visa
                                        </td>
                                        <td className="px-6 py-4">
                                            1
                                        </td>
                                        <td className="px-6 py-4 text-end">
                                            4450 BDT
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            2
                                        </td>
                                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Turkey Visa
                                        </td>
                                        <td className="px-6 py-4">
                                            1
                                        </td>
                                        <td className="px-6 py-4 text-end">
                                            14450 BDT
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td scope="row" className=""></td>
                                        <td scope="row" className=""></td>
                                        <td className="px-6 py-2 text-end">
                                            Subtotal:
                                        </td>
                                        <td className="px-6 py-2 text-end">
                                            18900 BDT
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td scope="row" className=""></td>
                                        <td scope="row" className=""></td>
                                        <td className="px-6 py-2 text-end">
                                            Discount:
                                        </td>
                                        <td className="px-6 py-2 text-end">
                                            -0 BDT
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td scope="row" className=""></td>
                                        <td scope="row" className=""></td>
                                        <td className="px-6 py-2 text-end">
                                            Cupon Discount:
                                        </td>
                                        <td className="px-6 py-2 text-end">
                                            -0 BDT
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td scope="row" className=""></td>
                                        <td scope="row" className=""></td>
                                        <td className="px-6 py-2 text-end">
                                            Courier Charge:
                                        </td>
                                        <td className="px-6 py-2 text-end">
                                            120 BDT
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td scope="row" className=""></td>
                                        <td scope="row" className=""></td>
                                        <td className="px-6 py-2 text-end">
                                            VAT 5%:
                                        </td>
                                        <td className="px-6 py-2 text-end">
                                            102 BDT
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td scope="row" className=""></td>
                                        <td scope="row" className=""></td>
                                        <td className="px-6 py-2 text-end font-semibold text-gray-600">
                                            Total:
                                        </td>
                                        <td className="px-6 py-2 text-end font-semibold text-gray-600">
                                            19300 BDT
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 w-full max-w-md">
                    <div className="bg-white rounded-xl shadow">
                        <form className="">
                            <div className="p-4 lg:px-6 space-y-4">
                                <h3 className="font-semibold text-lg flex items-center gap-2"><User className="w-5 h-5" />Customer Information</h3>
                                <figure className="flex gap-5 items-center rounded-2xl bg-white">
                                    <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="profile" className="w-16 h-16 md:w-20 md:h-20 rounded-full" />
                                    <div className="space-y-1">
                                        <div className="">
                                            <h5 className="text-lg font-semibold text-gray-800">Tanvir Mahmud</h5>
                                            <p className="text-sm text-gray-600">1 Order</p>
                                        </div>
                                        <ul className="flex flex-col items-start space-y-1 text-gray-600 text-sm">
                                            <li className="flex justify-start items-start gap-2">
                                                <a href="tel:+8801775893233" className="flex gap-2 items-center hover:underline">
                                                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.3084 15.2751C18.3084 15.5751 18.2417 15.8834 18.1 16.1834C17.9584 16.4834 17.775 16.7667 17.5334 17.0334C17.125 17.4834 16.675 17.8084 16.1667 18.0167C15.6667 18.2251 15.125 18.3334 14.5417 18.3334C13.6917 18.3334 12.7834 18.1334 11.825 17.7251C10.8667 17.3167 9.90835 16.7667 8.95835 16.0751C8.00002 15.3751 7.09169 14.6001 6.22502 13.7417C5.36669 12.8751 4.59169 11.9667 3.90002 11.0167C3.21669 10.0667 2.66669 9.11675 2.26669 8.17508C1.86669 7.22508 1.66669 6.31675 1.66669 5.45008C1.66669 4.88341 1.76669 4.34175 1.96669 3.84175C2.16669 3.33341 2.48335 2.86675 2.92502 2.45008C3.45835 1.92508 4.04169 1.66675 4.65835 1.66675C4.89169 1.66675 5.12502 1.71675 5.33335 1.81675C5.55002 1.91675 5.74169 2.06675 5.89169 2.28341L7.82502 5.00842C7.97502 5.21675 8.08335 5.40841 8.15835 5.59175C8.23335 5.76675 8.27502 5.94175 8.27502 6.10008C8.27502 6.30008 8.21669 6.50008 8.10002 6.69175C7.99169 6.88341 7.83335 7.08341 7.63335 7.28341L7.00002 7.94175C6.90835 8.03341 6.86669 8.14175 6.86669 8.27508C6.86669 8.34175 6.87502 8.40008 6.89169 8.46675C6.91669 8.53341 6.94169 8.58341 6.95835 8.63341C7.10835 8.90841 7.36669 9.26675 7.73335 9.70008C8.10835 10.1334 8.50835 10.5751 8.94169 11.0167C9.39169 11.4584 9.82502 11.8667 10.2667 12.2417C10.7 12.6084 11.0584 12.8584 11.3417 13.0084C11.3834 13.0251 11.4334 13.0501 11.4917 13.0751C11.5584 13.1001 11.625 13.1084 11.7 13.1084C11.8417 13.1084 11.95 13.0584 12.0417 12.9667L12.675 12.3417C12.8834 12.1334 13.0834 11.9751 13.275 11.8751C13.4667 11.7584 13.6584 11.7001 13.8667 11.7001C14.025 11.7001 14.1917 11.7334 14.375 11.8084C14.5584 11.8834 14.75 11.9917 14.9584 12.1334L17.7167 14.0917C17.9334 14.2417 18.0834 14.4167 18.175 14.6251C18.2584 14.8334 18.3084 15.0417 18.3084 15.2751Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} />
                                                    </svg>
                                                    +880 177 589 3233
                                                </a>
                                            </li>
                                            <li className="flex justify-start items-start gap-2">
                                                <a href="mailto:tanvir@guideasy.com" className="flex gap-2 items-center hover:underline">
                                                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.1667 17.0834H5.83335C3.33335 17.0834 1.66669 15.8334 1.66669 12.9167V7.08341C1.66669 4.16675 3.33335 2.91675 5.83335 2.91675H14.1667C16.6667 2.91675 18.3334 4.16675 18.3334 7.08341V12.9167C18.3334 15.8334 16.6667 17.0834 14.1667 17.0834Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M14.1666 7.5L11.5583 9.58333C10.7 10.2667 9.29164 10.2667 8.43331 9.58333L5.83331 7.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    tanvir@guideasy.com
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </figure>
                            </div>
                            <hr className="mx-4 md:mx-6" />
                            <div className="p-4 lg:px-6 space-y-4">
                                <div className="w-full flex justify-between items-center text-gray-800">
                                    <h3 className="font-semibold text-lg flex items-center gap-2"><Truck className="w-5 h-5" />Documents Collection Info</h3>
                                    <div className=""><button type="button" className=""><Edit className="w-5 h-5" /></button></div>
                                </div>
                                <table className="w-full text-sm text-left rtl:text-right text-gray-900 font-medium">
                                    <tbody>
                                        <tr className="">
                                            <td className="px-2 py-2 whitespace-nowrap">Name: </td>
                                            <td className="px-2 py-2">Tanvir Mahmud</td>
                                        </tr>
                                        <tr className="">
                                            <td className="px-2 py-2 whitespace-nowrap">Mobile No: </td>
                                            <td className="px-2 py-2">+880 177 589 3233</td>
                                        </tr>
                                        <tr className="">
                                            <td className="px-2 py-2 whitespace-nowrap">Floor/Flat: </td>
                                            <td className="px-2 py-2">-</td>
                                        </tr>
                                        <tr className="">
                                            <td className="px-2 py-2 whitespace-nowrap">House No: </td>
                                            <td className="px-2 py-2">-</td>
                                        </tr>
                                        <tr className="">
                                            <td className="px-2 py-2 whitespace-nowrap">Road No: </td>
                                            <td className="px-2 py-2">-</td>
                                        </tr>
                                        <tr className="">
                                            <td className="px-2 py-2 whitespace-nowrap">Address: </td>
                                            <td className="px-2 py-2">Uttara</td>
                                        </tr>
                                        <tr className="">
                                            <td className="px-2 py-2 whitespace-nowrap">City: </td>
                                            <td className="px-2 py-2">Dhaka</td>
                                        </tr>
                                        <tr className="">
                                            <td className="px-2 py-2 whitespace-nowrap">Country: </td>
                                            <td className="px-2 py-2">Bangladesh</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                    <div className="bg-white rounded-xl shadow">
                        <form className="">
                            <div className="p-4 lg:px-6 space-y-4">
                                <h3 className="font-semibold text-lg flex items-center gap-2"><User className="w-5 h-5" />Vendor Information</h3>
                                <figure className="flex gap-5 items-center rounded-2xl bg-white">
                                    <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="profile" className="w-16 h-16 md:w-20 md:h-20 rounded-full" />
                                    <div className="space-y-1">
                                        <div className="">
                                            <h5 className="text-lg font-semibold text-gray-800">Guideasy Private Limited</h5>
                                            <p className="text-sm text-gray-600">5006 Order</p>
                                        </div>
                                        <ul className="flex flex-col items-start space-y-1 text-gray-600 text-sm">
                                            <li className="flex justify-start items-start gap-2">
                                                <a href="tel:++8809611900200" className="flex gap-2 items-center hover:underline">
                                                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.3084 15.2751C18.3084 15.5751 18.2417 15.8834 18.1 16.1834C17.9584 16.4834 17.775 16.7667 17.5334 17.0334C17.125 17.4834 16.675 17.8084 16.1667 18.0167C15.6667 18.2251 15.125 18.3334 14.5417 18.3334C13.6917 18.3334 12.7834 18.1334 11.825 17.7251C10.8667 17.3167 9.90835 16.7667 8.95835 16.0751C8.00002 15.3751 7.09169 14.6001 6.22502 13.7417C5.36669 12.8751 4.59169 11.9667 3.90002 11.0167C3.21669 10.0667 2.66669 9.11675 2.26669 8.17508C1.86669 7.22508 1.66669 6.31675 1.66669 5.45008C1.66669 4.88341 1.76669 4.34175 1.96669 3.84175C2.16669 3.33341 2.48335 2.86675 2.92502 2.45008C3.45835 1.92508 4.04169 1.66675 4.65835 1.66675C4.89169 1.66675 5.12502 1.71675 5.33335 1.81675C5.55002 1.91675 5.74169 2.06675 5.89169 2.28341L7.82502 5.00842C7.97502 5.21675 8.08335 5.40841 8.15835 5.59175C8.23335 5.76675 8.27502 5.94175 8.27502 6.10008C8.27502 6.30008 8.21669 6.50008 8.10002 6.69175C7.99169 6.88341 7.83335 7.08341 7.63335 7.28341L7.00002 7.94175C6.90835 8.03341 6.86669 8.14175 6.86669 8.27508C6.86669 8.34175 6.87502 8.40008 6.89169 8.46675C6.91669 8.53341 6.94169 8.58341 6.95835 8.63341C7.10835 8.90841 7.36669 9.26675 7.73335 9.70008C8.10835 10.1334 8.50835 10.5751 8.94169 11.0167C9.39169 11.4584 9.82502 11.8667 10.2667 12.2417C10.7 12.6084 11.0584 12.8584 11.3417 13.0084C11.3834 13.0251 11.4334 13.0501 11.4917 13.0751C11.5584 13.1001 11.625 13.1084 11.7 13.1084C11.8417 13.1084 11.95 13.0584 12.0417 12.9667L12.675 12.3417C12.8834 12.1334 13.0834 11.9751 13.275 11.8751C13.4667 11.7584 13.6584 11.7001 13.8667 11.7001C14.025 11.7001 14.1917 11.7334 14.375 11.8084C14.5584 11.8834 14.75 11.9917 14.9584 12.1334L17.7167 14.0917C17.9334 14.2417 18.0834 14.4167 18.175 14.6251C18.2584 14.8334 18.3084 15.0417 18.3084 15.2751Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} />
                                                    </svg>
                                                    +880 9611 900 200
                                                </a>
                                            </li>
                                            <li className="flex justify-start items-start gap-2">
                                                <a href="mailto:support@guideasy.com" className="flex gap-2 items-center hover:underline">
                                                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.1667 17.0834H5.83335C3.33335 17.0834 1.66669 15.8334 1.66669 12.9167V7.08341C1.66669 4.16675 3.33335 2.91675 5.83335 2.91675H14.1667C16.6667 2.91675 18.3334 4.16675 18.3334 7.08341V12.9167C18.3334 15.8334 16.6667 17.0834 14.1667 17.0834Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M14.1666 7.5L11.5583 9.58333C10.7 10.2667 9.29164 10.2667 8.43331 9.58333L5.83331 7.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    support@guideasy.com
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </figure>
                            </div>
                        </form>
                    </div>
                </div>
            </ContainerMain>
        </App >
    )
}

export default Page