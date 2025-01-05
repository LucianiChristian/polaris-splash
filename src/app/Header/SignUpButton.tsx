import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type Props = {
    size?: "sm" | "default" | "lg" | "icon" | null | undefined;
    className?: string
};

export default function SignUpButton({ size, className } : Props) {
    return (
        <TooltipProvider delayDuration={ 0 }>
            <Tooltip>
                <TooltipTrigger>
                    <a href="#subscription-section" className="bg-blue-600 hover:bg--700 text-white py-4 px-8 rounded">
                        Sign up
                    </a>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Coming soon!</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
