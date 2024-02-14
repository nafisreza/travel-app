import Image from 'next/image'

export const CardItem: React.FC = () => {
    return (
        <div className="flex flex-wrap justify-between items-center p-4 bg-white text-gray-800 rounded-xl space-y-3 md:space-y-6 shadow">
            <figure className="flex gap-3 items-center">
                <img src="/assets/images/flight.png" alt="profile" className="w-16 md:w-20 h-24 md:h-28 object-cover" />
                <div className='space-y-1'>
                    <h5 className="text-base font-medium">Thynk Travels</h5>
                    <p className="text-sm">Travel Visa</p>
                </div>
            </figure>
            <div className='flex flex-col sm:items-end gap-1'>
                <p className="text-sm">Start From</p>
                <h5 className="text-base font-medium">Case of Hit &amp; Run</h5>
                <p className="text-sm">Earn BDT 400</p>
            </div>
        </div>
    )
}

export default function SearchResult() {
    return (
        <section className="space-y-2">
            <h1 className="text-xl font-semibold" id="multiplefeatures">Multiple Features</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
            </div>
        </section>
    )
}
