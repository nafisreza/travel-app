'use client'

import ContainerMain from "@/components/container/main"
import App from "../app"
import CreditHistory from "./CreditHistory"
import Payment from "./Payment"

type Props = {}

const Page: React.FC<Props> = () => {
    return (
        <App>
                  <div>
        <p className="px-5 mt-5 text-lg font-semibold ml-5">Add Credit</p>
      </div>
      <ContainerMain className="flex justify-center items-start gap-12">
        <div className="rounded-xl bg-white shadow">
        <CreditHistory/>
        </div>
        <Payment/>
      </ContainerMain>
        </App>
    )
}

export default Page;