import Feature from "@/app/Features/Feature";
import {BookOpen, ChartNoAxesColumn, SubtitlesIcon, Zap} from "lucide-react";

export default function FeaturesSection() {
    return (
        <section className="flex flex-col items-center pt-16 pb-8 gap-12 lg:gap-[96]">
            <div className="flex flex-col items-center gap-5 max-w-[768] text-center px-4" id="features">
                <p className="text-blue-500 font-semibold">Features</p>
                <h2 className="text-4xl font-semibold">Plan Your Way Through Life with Precision</h2>
                <p className="text-[18] sm:text-xl text-slate-600">Just as a compass points to the North Star, Polaris guides your planning and
                    management journey with unmatched clarity and organization.</p>
            </div>
            <div className="px-4 lg:px-0 flex flex-col gap-12 lg:gap-[96]">
            {
                featuresContent.map((x, index) => (
                    <Feature 
                        icon={x.icon} 
                        header={x.header} 
                        subtitle={x.subtitle} 
                        listItems={x.listItems} 
                        key={x.header}
                        isLeft={index % 2 === 0}/>
                ))
            }
            </div>
        </section>
    );
}

const featuresContent = [
    {
        icon: BookOpen,
        header: "Daily Planner",
        subtitle: "Stay organized and on top of your day.",
        listItems: [
            "Organize your day with an intuitive to-do list and scheduling system.",
            "Jot down important notes and track your daily expenses with ease.",
            "Stay on top of priorities with reminders and progress tracking." 
        ]
    },
    {
        icon: Zap,
        header: "Project Management",
        subtitle: "Track meetings, discussions, and employee activities.",
        listItems: [
            "Record details of meetings, including discussion points and action items.",
            "Keep track of your employees' tasks and activities without directly assigning them.",
            "Stay organized with notes on project progress and key milestones."
        ]
    },
    {
        icon: ChartNoAxesColumn,
        header: "Activity Reports",
        subtitle: "Understand your progress with detailed insights.",
        listItems: [
            "Retrieve automated summaries of your progress weekly, bi-weekly, or monthly.",
            "Share detailed reports with stakeholders or team members for alignment.",
        ]
    }
];