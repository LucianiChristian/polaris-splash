import MobileHeader from "@/app/Header/MobileHeader";
import DesktopHeader from "@/app/Header/DesktopHeader";

export default function Header() {
    return (
        <>
            <div className="md:hidden">
                <MobileHeader />
            </div>
            <div className="hidden md:block">
                <DesktopHeader />
            </div>
        </>
    );
}