import React from "react";
import FeatureIcon from "../Shared/FeatureIcon";
import ListItem from "../Shared/ListItem";

type Props = {
    icon: React.ComponentType<{className: string}>, 
    header: string, 
    subtitle: string,
    listItems: string[],
    isLeft: boolean
};

export default function Feature({ icon: Icon, header, subtitle, listItems, isLeft }: Props) {
    return (
        <div className="w-full lg:pl-[100] flex flex-col lg:flex-row overflow-x-hidden" style={{direction: isLeft ? "ltr" : "rtl"}}>
            <div className="flex flex-col gap-8 lg:w-[50%] flex-shrink-0 px-4" style={{direction: "ltr"}}>
                <FeatureIcon icon={ Icon }/>
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-semibold">{ header }</h3>
                    <p className="text-slate-600">{ subtitle }</p>
                </div>
                <ul className="text-slate-600 flex flex-col gap-4 lg:gap-5">
                    { listItems.map(ListItem) }
                </ul>
            </div>
            <img src="/app-screenshot.png" alt="app screenshot" className={`pt-10 lg:pt-0 ${!isLeft && "lg:pr-32"}`}/>
        </div>
    );
}