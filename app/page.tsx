import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Collection from "@/components/Collection";
import Reviews from "@/components/Reviews";
import BrandFeatures from "@/components/BrandFeatures";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Hero />
            <TrustBar />
            <Collection />
            <Reviews />
            <BrandFeatures />
            <CTABanner />
            <Footer />
        </main>
    );
}
