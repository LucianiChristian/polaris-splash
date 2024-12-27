import {BookOpen, CircleCheckBig} from "lucide-react";
import React from "react";

type Props = {
    icon: React.ComponentType<{className: string}>, 
    header: string, 
    subtitle: string,
    listItems: string[]
};

export default function Feature({ icon: Icon, header, subtitle, listItems }: Props) {
    return (
        <div className="w-full pl-[116] flex flex-col md:flex-row overflow-x-hidden">
            <div className="flex flex-col gap-8 w-[50%] flex-shrink-0">
                <Icon className="text-blue-500"/>
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-semibold">{ header }</h3>
                    <p className="text-slate-600">{ subtitle }</p>
                </div>
                <ul className="text-slate-600 flex flex-col gap-5">
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
            <img src="/app-screenshot.png" alt="app screenshot"/>
        </div>
    );
}