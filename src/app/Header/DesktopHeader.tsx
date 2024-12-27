import {Button} from "@/components/ui/button";

export default function DesktopHeader() {
    return (
        <div className="flex justify-between items-center px-8 py-2">
            <div className="flex items-center gap-10">
                <div className="flex items-center gap-4">
                    <img src="/polaris-logo.png" alt="polaris logo" width={60}/>
                    <div className="text-xl font-semibold">Polaris North Star</div>
                </div>
                <nav className="flex gap-8">
                    <a href={"#features"} className="font-semibold text-slate-600">Features</a>
                    <a href={"#FAQ"} className="font-semibold text-slate-600">FAQ</a>
                </nav>
            </div>
            <Button className="bg-blue-600">Sign up</Button>
        </div>
    );
}