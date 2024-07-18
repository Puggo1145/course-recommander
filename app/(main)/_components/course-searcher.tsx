"use client"

import { useState } from "react";
// utils
import { cn } from "@/lib/utils";
// components
import { Button } from "@/components/ui/button";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
// store
import { useQuery } from "@/stores/query";
// icons
import { SearchIcon } from "lucide-react";

const CourseSearcher: React.FC = () => {
    const [isFocused, setIsFocused] = useState(false);
    const { queryStr, setQueryStr, changeStatus } = useQuery();

    
    const onFocus = () => setIsFocused(true);
    const onBlur = () => setIsFocused(false);


    const onSearch = () => {
        changeStatus("search");
    }
    // 按下回车键时触发搜索
    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && queryStr !== "") {
            onSearch();
            setIsFocused(false);
            e.currentTarget.blur();
        }
    }

    return (
        <div className={cn("relative w-[780px] rounded-full overflow-hidden p-3", 
        "bg-white dark:bg-secondary shadow-balance flex items-center justify-between",
        "transition-all duration-500",
        isFocused ? "my-8 scale-105" : "mt-0 scale-100")}>
            {
                queryStr === "" &&
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
                value={queryStr}
                onChange={(e) => setQueryStr(e.target.value)}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={e => onKeyPress(e)}
            />
            <Button
                size="icon" 
                className={cn(
                    "rounded-full dark:bg-background", 
                    queryStr === "" && "bg-gray-400 hover:bg-gray-400"
                )}
                disabled={queryStr === ""}
                onClick={onSearch}
            >
                <SearchIcon 
                    size={18} 
                    className="text-white" 
                />
            </Button>
        </div>
    );
};

export default CourseSearcher;