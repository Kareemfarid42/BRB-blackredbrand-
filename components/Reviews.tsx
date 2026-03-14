interface Review {
    id: number;
    image: string;
    text: string;
    name: string;
    location: string;
}

const reviews: Review[] = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=900&q=70",
        text: "The quality of these hoodies is insane. Heavy and premium.",
        name: "JACOB",
        location: "Austin, TX",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=70",
        text: "Absolutely love the fit and feel. Worth every cent.",
        name: "RYAN",
        location: "Newark, NJ",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1520975869871-0d91f3b1d6b2?auto=format&fit=crop&w=900&q=70",
        text: "This is my new favorite brand. Limited drops are fire.",
        name: "DANNY",
        location: "Brooklyn, NY",
    },
];

export default function Reviews() {
    return (
        <section id="reviews" className="mx-auto max-w-[1400px] px-4 py-24 bg-black">
            <div className="text-center mb-16">
                <h3 className="text-2xl sm:text-3xl font-black tracking-widest uppercase">
                    WORN BY THOSE WHO MOVE DIFFERENT
                </h3>
                <p className="mt-2 text-sm text-red-600 font-bold tracking-[0.2em] uppercase">
                    Thousands have already joined the movement
                    <br />
                    <span className="text-white">You don’t wear Black Red</span>
                    <br />
                    YOU REPRESENT IT
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {reviews.map((review) => (
                    <div key={review.id} className="relative aspect-[4/5] overflow-hidden group">
                        <img
                            src={review.image}
                            alt={`Review by ${review.name}`}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="text-yellow-500 text-lg mb-4">★★★★★</div>
                            <p className="text-white text-lg font-medium leading-relaxed">{review.text}</p>
                            <div className="mt-6 text-xs font-black tracking-widest uppercase text-white/60">
                                {review.name}{" "}
                                <span className="text-white/30 ml-2">{review.location}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
