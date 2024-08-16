import { cn } from "@/lib/utils";


const CourseFinalScore: React.FC<{ finalScore: number }> = ({ finalScore }) => {
    const scoreColor = () => {
        if (finalScore >= 0.8) {
            return "text-green-500";
        } else if (finalScore >= 0.5) {
            return "text-yellow-500";
        } else {
            return "text-gray-500";
        }
    };
    
    
    return (
        <div className="flex flex-col">
            <p className="text-sm text-gray-400">
                推荐度
            </p>
            <div className="flex items-end gap-x-1">
                <p className={cn(scoreColor(), "text-3xl font-bold leading-none")}>
                    {Math.floor(finalScore * 100)}
                </p>
                <span className="text-sm text-gray-400">%</span>
            </div>
        </div>
    );
};

export default CourseFinalScore;