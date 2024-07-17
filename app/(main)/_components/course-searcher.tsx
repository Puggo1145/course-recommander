// components
import { Button } from "@/components/ui/button";
// icons
import { SendHorizonalIcon } from "lucide-react";

const CourseSearcher: React.FC = () => {
    return (
        <div className="w-[780px] rounded-full overflow-hidden p-3
        bg-white dark:bg-secondary flex items-center justify-between">
            <input
                type="text"
                placeholder="Mooc 大学的 Python 课程怎么样？"
                className="ml-4 flex-1 h-full outline-none bg-transparent"
            />
            <Button size="icon" className="rounded-full dark:bg-background">
                <SendHorizonalIcon size={18} className="text-background dark:text-white" />
            </Button>
        </div>
    );
};

export default CourseSearcher;