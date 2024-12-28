import { DollarSign, List, Map, Search } from "lucide-react";
import MoreFeature from "./MoreFeature";

export default function MoreFeaturesSection() {
    return (
        <section className="flex flex-col items-center pt-16 pb-[96] gap-12 lg:gap-[96]">
            <div className="flex flex-col items-center gap-5 max-w-[768] text-center px-4" id="features">
                <p className="text-blue-500 font-semibold">Features</p>
                <h2 className="text-4xl font-semibold">Discover More Ways to Stay Ahead</h2>
                <p className="text-[18] sm:text-xl text-slate-600">Polaris enhances your planning with additional features designed to keep you organized and focused.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-8 px-16">
            {
                featuresContent.map(x => (
                    <MoreFeature icon={x.icon} header={x.header} subtitle={x.subtitle} key={x.header}/>
                ))
            }
            </div>
        </section>
    );
}

const featuresContent = [
    {
        icon: DollarSign,
        header: "Manage your spending with reports",
        subtitle: "Gain valuable insights into your personal and professional expenses. With Polaris, you can track, categorize, and review spending patterns effortlessly.",
    },
    {
        icon: List,
        header: "Record meeting minutes",
        subtitle: "Track meetings, discussions, and employee activities. Effortlessly document and organize key details from your meetings, keeping track of decisions, action items, and next steps for future reference.",
    },
    {
        icon: Map,
        header: "Capture your aspirations",
        subtitle: "Keep track of your biggest dreams and long-term objectives in one place. Polaris helps you stay motivated and make steady progress toward what matters most.",
    },
    {
        icon: Search,
        header: "Access Your Data, Anytime, Anywhere",
        subtitle: "Polaris is designed with powerful search capabilities to help you quickly locate tasks, notes, reports, and more. Whether you're looking for last month's meeting minutes or a long-term goal, it's all just a search away.",
    }
];