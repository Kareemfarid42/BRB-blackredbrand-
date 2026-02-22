export default function TrustBar() {
    return (
        <div className="w-full bg-zinc-950 border-y border-white/5 py-4">
            <div className="mx-auto max-w-6xl px-4 flex items-center justify-center gap-8 text-sm font-bold tracking-widest uppercase text-white/60">
                <div>Limited Quantities</div>
                <span className="text-white/20">|</span>
                <div className="flex items-center gap-3">
                    <span className="text-yellow-500 text-lg">★★★★★</span>
                    <span>Rated 4.8/5 by Customers</span>
                </div>
            </div>
        </div>
    );
}
