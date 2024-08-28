import { cn } from "@/lib/utils";

interface ContentProps {
    title?: string;
    children?: React.ReactNode;
    paddingX?: number;
    paddingY?: number;
}

const Content: React.FC<ContentProps> = ({
    title,
    children,
    paddingX = 4,
    paddingY = 4,
}) => {
    const contentStyle = `py-${paddingY} px-${paddingX}`

    return (
        <div className={cn("w-full mt-4", contentStyle)}>
            {
                title &&
                <h2 className="text-2xl font-bold mb-4 pl-2">
                    {title}
                </h2>
            }
            {children}
        </div>
    );
};

export default Content;