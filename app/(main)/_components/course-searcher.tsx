"use client"

import { useState } from "react";
// utils
import { cn } from "@/lib/utils";
// components
import { Button } from "@/components/ui/button";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
// icons
import { SearchIcon } from "lucide-react";

const CourseSearcher: React.FC = () => {
    const [isFocused, setIsFocused] = useState(false);

    const onFocus = () => setIsFocused(true);
    const onBlur = () => setIsFocused(false);

    return (
        <div className={cn("relative w-[780px] rounded-full overflow-hidden p-3", 
        "bg-white dark:bg-secondary shadow-balance flex items-center justify-between",
        "transition-all duration-500",
        isFocused ? "my-8 scale-105" : "mt-0 scale-100")}>
            {
                !isFocused &&
                <AnimatedShinyText className="absolute left-7 pointer-events-none">
                    <span className="text-md">
                        有哪些适合初学者的 Python 课程？
                    </span>
                </AnimatedShinyText>
            }
            <input
                type="text"
                placeholder=""
                className="ml-4 flex-1 h-full outline-none bg-transparent"
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Button size="icon" className="rounded-full dark:bg-background">
                <SearchIcon size={18} className="text-background dark:text-white" />
            </Button>
        </div>
    );
};

export default CourseSearcher;