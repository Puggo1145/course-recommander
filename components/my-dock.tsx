"use client"

// components
import Link from "next/link";
import { Dock, DockIcon } from "./magicui/dock";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./mode-toggle";
// icons
import {
    SearchIcon,
    RouteIcon,
    User2Icon,
    DatabaseIcon
} from "lucide-react";


const Icons = [
    {
        icon: <SearchIcon size={24} />,
        herf: "/",
    },
    {
        icon: <RouteIcon size={24} />,
        herf: "/roadmap",
    },
    {
        icon: <DatabaseIcon size={24} />,
        herf: "/database",
    },
    {
        icon: <User2Icon size={24} />,
        herf: "/profile",
    },
]

const MyDock: React.FC = () => {
    return (
        <div className="fixed bottom-4 w-full h-fit">
            <Dock
                direction="middle"
                className="bg-white dark:bg-secondary rounded-full"
            >
                {
                    Icons.map(({ icon, herf }) => (
                        <DockIcon
                            key={herf}
                            className="hover:bg-gray-100/50 mx-2"
                        >
                            <Link href={herf}>
                                {icon}
                            </Link>
                        </DockIcon>
                    ))
                }
                <Separator orientation="vertical" />
                <DockIcon className="hover:bg-gray-100/50 mx-2">
                    <ModeToggle />
                </DockIcon>
            </Dock>
        </div>
    );
};

export default MyDock;