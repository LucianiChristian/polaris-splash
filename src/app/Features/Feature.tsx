import { CircleCheckBig } from "lucide-react";
import React from "react";
import FeatureIcon from "../Shared/FeatureIcon";

type Props = {
    icon: React.ComponentType<{className: string}>, 
    header: string, 
    subtitle: string,
    listItems: string[]
};

export default function Feature({ icon: Icon, header, subtitle, listItems }: Props) {
    return (
        <div className="w-full lg:pl-[116] flex flex-col lg:flex-row overflow-x-hidden">
            <div className="flex flex-col gap-8 lg:w-[50%] flex-shrink-0">
                <FeatureIcon icon={ Icon }/>
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-semibold">{ header }</h3>
                    <p className="text-slate-600">{ subtitle }</p>
                </div>
                <ul className="text-slate-600 flex flex-col gap-4 lg:gap-5">
                    {
                        listItems.map(item => (
                            <li className="flex items-center gap-3" key={item}>
                                <CircleCheckBig  />
                                { item }
                            </li>
                        ))
                    }
                </ul>
            </div>
            <img src="/app-screenshot.png" alt="app screenshot" className="pt-10 lg:pt-0"/>
        </div>
    );
}