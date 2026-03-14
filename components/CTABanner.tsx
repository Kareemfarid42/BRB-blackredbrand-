"use client";

export default function CTABanner() {
    const scrollToCollection = () => {
        document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=2000&q=80"
                    alt="CTA Banner"
                    className="h-full w-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-black/80" />
            </div>
            <div className="relative mx-auto max-w-[1400px] px-4 py-28 text-center">
                <p className="text-xs font-black tracking-[0.4em] uppercase text-red-600 mb-6">
                    Winter Drop 01 — Available Now
                </p>
                <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase leading-none">
                    Don&apos;t Miss
                    <br />
                    The Drop
                </h2>
                <p className="mt-6 text-white/60 text-lg max-w-lg mx-auto">
                    Limited quantities. No restocks.
                    <br />
                    Once it&apos;s gone, it&apos;s gone for good.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={scrollToCollection}
                        className="bg-red-700 hover:bg-red-800 px-14 py-5 font-black text-sm tracking-widest uppercase transition-all duration-300"
                    >
                        SHOP THE DROP
                    </button>
                    <a
                        href="#reviews"
                        className="border border-white/20 hover:border-white/50 px-14 py-5 font-black text-sm tracking-widest uppercase transition-all duration-300 text-white/70 hover:text-white"
                    >
                        READ REVIEWS
                    </a>
                </div>
            </div>
        </section>
    );
}
