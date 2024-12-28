import Header from "@/app/Header/Header";
import HeroSection from "@/app/HeroSection";
import FeaturesSection from "@/app/Features/FeaturesSection";
import MoreFeaturesSection from "./MoreFeatures/MoreFeaturesSection";
import SubscriptionSection from "./SubscriptionSection";

export default function Home() {
  return (
      <div>
        <Header />
        <HeroSection />
        <FeaturesSection />
        <MoreFeaturesSection />
        <SubscriptionSection />
      </div>
  );
}
