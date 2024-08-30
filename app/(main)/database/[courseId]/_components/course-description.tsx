"use client";

import { cn } from "@/lib/utils";
// import { ChevronDown } from "lucide-react";
// import { useState } from "react";


export const CourseDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="flex flex-col items-center mb-4">
            <div className={cn(
                "overflow-hidden flex flex-col gap-y-2", 
                // isExpanded ? "h-fit" : "h-[100px]"
            )}>
                {children}
            </div>
            {/* <ChevronDown
                size={24}
                className={cn(isExpanded && "transform rotate-180", "cursor-pointer transition-all")}
                onClick={() => setIsExpanded(!isExpanded)}
            /> */}
        </div>
    );
};

export const CourseDescriptionItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <p className="text-gray-500">
            {children}
        </p>
    );
};
