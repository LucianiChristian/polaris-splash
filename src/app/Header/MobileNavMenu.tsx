import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Menu} from "lucide-react";

export function MobileNavMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu style={{height: "28px", width: "28px"}}/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-50">
                <nav>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <a href={"#features"}>Features</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a href={"#FAQ"}>FAQ</a>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}