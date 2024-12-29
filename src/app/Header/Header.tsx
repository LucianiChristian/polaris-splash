import MobileHeader from "@/app/Header/MobileHeader";
import DesktopHeader from "@/app/Header/DesktopHeader";

export default function Header() {
    return (
        <header className="bg-slate-100">
            <div className="md:hidden">
                <MobileHeader />
            </div>
            <div className="hidden md:block">
                <DesktopHeader />
            </div>
        </header>
    );
}