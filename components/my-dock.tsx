"use client"

import { useEffect } from "react";
// components
import Link from "next/link";
import { Dock, DockIcon } from "./magicui/dock";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./mode-toggle";
import useFolder from "./folder";
// libs
import { cn } from "@/lib/utils";
// stores
import { useQuery } from "@/stores/query";
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
    const { status } = useQuery();
    const { isFold, setIsFold, Folder } = useFolder();

    useEffect(() => {
        if (status === "search") {
            setIsFold(true)
        } else {
            setIsFold(false)
        }
    }, [status]);

    return (
        <div className={cn(
            "fixed w-full transition-all duration-500 flex flex-col items-center",
            !isFold && "bottom-4",
            isFold && "-bottom-[60px]",
        )}>
            <Folder />
            <Dock
                direction="middle"
                className="bg-white dark:bg-secondary rounded-full mt-3 dark:border dark:border-gray-700"
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