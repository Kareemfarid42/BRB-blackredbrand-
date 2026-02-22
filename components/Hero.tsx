"use client";

export default function Hero() {
    const scrollToCollection = () => {
        document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=2000&q=80"
                    alt="Black Red Winter Drop"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 grain vignette" />
            </div>

            {/* Nav */}
            <nav className="absolute top-0 w-full z-10 mx-auto max-w-6xl px-4 py-8 flex items-center justify-between left-1/2 -translate-x-1/2">
                <div className="font-black text-2xl tracking-tighter uppercase">
                    BLACK <span className="text-red-600">RED</span>
                </div>
                <div className="hidden sm:flex items-center gap-8 text-sm font-bold tracking-widest uppercase text-white/90">
                    <a href="#collection" className="hover:text-red-500 transition-colors">Collection</a>
                    <a href="#why" className="hover:text-red-500 transition-colors">Why us</a>
                    <a href="#reviews" className="hover:text-red-500 transition-colors">Reviews</a>
                </div>
            </nav>

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-20">
                <div className="max-w-xl">
                    <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-tight uppercase">
                        WINTER <br /> DROP 01
                    </h1>
                    <p className="mt-4 text-xl text-white/90 font-medium">
                        Limited Streetwear Collection
                    </p>
                    <div className="mt-8">
                        <button
                            onClick={scrollToCollection}
                            className="bg-red-700 hover:bg-red-800 px-10 py-4 font-black text-sm tracking-widest uppercase transition-all duration-300"
                        >
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
