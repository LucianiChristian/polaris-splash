type Props = {
    icon: React.ComponentType<{className: string}>, 
};

export default function FeatureIcon({ icon: Icon } : Props) {
    return (
        <div className="bg-blue-50 p-[10] w-fit rounded-full">
            <div className="bg-blue-100 p-[8] w-fit rounded-full">
                <Icon className="text-blue-500"/>
            </div>
        </div>
    );
}