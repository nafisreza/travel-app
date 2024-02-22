import Status from './status'
import LineChart from '@/components/charts/line-chart'
import AccountCard from './account-card'
import BarChart from '@/components/charts/bar-chart'
import Payments from './payment'
import RecentTransections from './recent-transection'
import App from '../app'

export default function Home() {
  return (
    <App>
      <main className="p-3 xs:px-4 sm:px-8 py-3 xs:py-4 sm:py-8">
        <div className="space-y-8 lg:space-y-12">
          <Status />
          <div className="flex flex-col xl:grid xl:grid-cols-3 gap-4">
            <div className="xl:col-span-2 space-y-4">
              <div><LineChart /></div>
              <div className="hidden xl:block"><BarChart /></div>
            </div>
            <div className="xl:col-span-1 space-y-4">
              {/* flex (sm: to xl: grid) flex */}
              <div className="flex sm:grid xl:flex flex-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div><AccountCard /></div>
                <div><RecentTransections /></div>
                <div><Payments /></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </App>
  )
}
