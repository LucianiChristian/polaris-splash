import {Button} from "@/components/ui/button";

export default function Header() {
    return (
        <div className="hidden md:flex justify-between items-center px-8 py-2 bg-slate-100">
            <div className="flex items-center gap-10">
                <div className="flex items-center gap-4">
                    <img src="/polaris-logo.png" alt="polaris logo" width={60}/>
                    <div className="text-xl font-semibold text-gray-900">Polaris North Star</div>
                </div>
            </div>
            <a href="#subscription-section"><Button className="bg-blue-600">Sign up</Button></a>
        </div>
    );
}