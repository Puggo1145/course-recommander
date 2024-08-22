import { cn } from "@/lib/utils";
import { scoreColor } from "@/lib/text-color";


const CourseFinalScore: React.FC<{ finalScore: number }> = ({ finalScore }) => {
    return (
        <div className="flex flex-col">
            <p className="text-sm text-gray-400">
                推荐度
            </p>
            <div className="flex items-end gap-x-1">
                <p className={cn(scoreColor(finalScore), "text-3xl font-bold leading-none")}>
                    {finalScore}
                </p>
                <span className="text-sm text-gray-400">%</span>
            </div>
        </div>
    );
};

export default CourseFinalScore;