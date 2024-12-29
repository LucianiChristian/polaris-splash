import FeatureIcon from "../Shared/FeatureIcon";

type Props = {
    icon: React.ComponentType<{className: string}>, 
    header: string, 
    subtitle: string
};

export default function Feature({ icon: Icon, header, subtitle }: Props) {
    return (
        <div className="flex flex-col items-center text-center gap-5 max-w-[50ch]">
            <FeatureIcon icon={ Icon }/>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-medium">{ header }</h3>
                <p className="text-slate-600">{ subtitle }</p>
            </div>
        </div>
    );
}