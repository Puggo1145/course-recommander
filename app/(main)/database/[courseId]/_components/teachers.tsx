"use client"

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type Teacher = {
    name: string,
    title: string,
    desc: string
}
interface ITeachersProps {
    teachers: Teacher[]
}

const Teachers: React.FC<ITeachersProps> = ({ teachers }) => {

    return (
        <div className="overflow-y-scroll h-[250px] lg:h-[360px] p-4 space-y-4">
            {
                teachers.map((teacher) => (
                    <Teacher key={teacher.name} teacher={teacher} />
                ))
            }
        </div>
    );
};


const Teacher: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            key={teacher.name}
            className="flex flex-col border p-4 rounded-xl gap-y-2"
        >
            <div className="flex items-center gap-x-2">
                <p className="font-bold">{teacher.name}</p>
                <span className="text-sm text-muted-foreground">
                    {teacher.title}
                </span>
            </div>
            <div className="flex flex-col items-center gap-y-2">
                <span className={cn("overflow-hidden h-[150px] text-sm", isExpanded && 'h-fit')}>
                    {teacher.desc}
                </span>
                <ChevronDown
                    size={16}
                    className={cn(
                        "transform transition-transform cursor-pointer",
                        isExpanded ? "rotate-180" : ""
                    )}
                    onClick={() => setIsExpanded(!isExpanded)}
                />
            </div>
        </div>
    )
}

export default Teachers;