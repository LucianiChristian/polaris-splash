import {Button} from "@/components/ui/button";
import SignUpButton from "./Header/SignUpButton";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center gap-16 py-8 sm:py-16 px-4 bg-slate-100">
            <div className="flex flex-col items-center gap-8 max-w-[768]">
                <img src="/polaris-logo.png" alt="polaris logo" height={156} width={156}/>
                <div className="flex flex-col items-center gap-6 text-center">
                    <h1 className="text-4xl sm:text-6xl font-semibold">Polaris North Star</h1>
                    <p className="text-[18] sm:text-xl text-slate-600">A powerful management tool with an integrated planning system to help teams and individuals stay aligned and achieve their goals.</p>
                </div>
                <SignUpButton className="w-full sm:w-auto" size="lg"/>
            </div>    
            <img src="/app-screenshot.png" alt="app screenshot" className="max-w-[792] w-full"/>
        </section>
    );
}