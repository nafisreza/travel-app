export const CardItem: React.FC = () => {
    return (
        <div className="bg-white shadow-md rounded-2xl block overflow-hidden">
            <a href="#">
                <figure className="bg-gray-50">
                    <img className="w-full aspect-[16/9] object-cover" src="/assets/images/offer/offer.png" alt="product" />
                </figure>
            </a>
        </div>
    )
}

export default function Card() {
    return (
        <section className="space-y-2">
            <h1 className="text-xl font-semibold" id="multiplefeatures">Holiday Pack</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-4">
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
            </div>
        </section>
    )
}
