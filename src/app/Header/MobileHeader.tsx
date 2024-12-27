import {MobileNavMenu} from "@/app/Header/MobileNavMenu";

export default function MobileHeader() {
    return (
        <div className="flex justify-between items-center px-3 py-4">
            <div className="flex items-center gap-10">
                <div className="flex items-center gap-4">
                    <img src="/polaris-logo.png" alt="polaris logo" width={60}/>
                    <div className="text-xl font-semibold">Polaris North Star</div>
                </div>
            </div>
            <MobileNavMenu />
        </div>
    );
}
