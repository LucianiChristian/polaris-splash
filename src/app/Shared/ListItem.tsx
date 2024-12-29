import { Check } from "lucide-react";

export default function ListItem(item: string) {
    return <li className="flex items-center gap-3" key={item}>
        <div className="text-blue-500 bg-blue-100 p-[2] rounded-full">
            <Check width={20} height={20} />
        </div>
        {item}
    </li>;
}