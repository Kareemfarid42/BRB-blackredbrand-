interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    alt: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "BLACK RED HOODIE",
        price: "$75",
        image: "https://images.unsplash.com/photo-1520975958221-6c6f2b9b5b11?auto=format&fit=crop&w=900&q=70",
        alt: "Black Red Hoodie",
    },
    {
        id: 2,
        name: "BLACK RED SWEATPANTS",
        price: "$65",
        image: "https://images.unsplash.com/photo-1520975867597-0b2737d64f06?auto=format&fit=crop&w=900&q=70",
        alt: "Black Red Sweatpants",
    },
    {
        id: 3,
        name: "ESSENCE HOODIE",
        price: "$75",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=70",
        alt: "Essence Hoodie",
    },
    {
        id: 4,
        name: "BLACK RED PUFFER JACKET",
        price: "$115",
        image: "https://images.unsplash.com/photo-1520975693416-35a66b1fdbf8?auto=format&fit=crop&w=900&q=70",
        alt: "Black Red Puffer Jacket",
    },
    {
        id: 5,
        name: "BLVCKRED LONGSLEEVE",
        price: "$45",
        image: "https://images.unsplash.com/photo-1520975869871-0d91f3b1d6b2?auto=format&fit=crop&w=900&q=70",
        alt: "BLVCKRED Longsleeve",
    },
];

export default function Collection() {
    return (
        <section id="collection" className="mx-auto max-w-[1400px] px-4 py-20 bg-black">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-black tracking-widest uppercase">
                    LIMITED DROP • PREMIUM STREETWEAR • BUILT TO STAND OUT
                </h2>
                <p className="mt-2 text-sm text-red-600 font-bold tracking-[0.2em] uppercase">
                    Wear something that represents individuality, confidence, and originality
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {products.map((product) => (
                    <article key={product.id} className="flex flex-col group">
                        <div className="aspect-[4/5] overflow-hidden bg-zinc-900 mb-6">
                            <img
                                src={product.image}
                                alt={product.alt}
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="text-center flex flex-col flex-1">
                            <h3 className="font-black text-sm tracking-widest uppercase text-white/90">
                                {product.name}
                            </h3>
                            <div className="mt-2 font-bold text-white/60">{product.price}</div>
                            <button className="mt-auto pt-6 w-full bg-red-700 hover:bg-red-800 py-3 font-black text-xs tracking-widest uppercase transition-colors">
                                SHOP NOW
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
