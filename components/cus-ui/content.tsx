import { cn } from "@/lib/utils";

interface ContentProps {
    children?: React.ReactNode;
    paddingX?: number;
    paddingY?: number;
}

const Content: React.FC<ContentProps> = ({
    children,
    paddingX = 4,
    paddingY = 4,
}) => {
    const contentStyle = {
        padding: `py-${paddingY} px-${paddingX}`,
    }

    return (
        <div className={cn("w-full mt-4", contentStyle)}>
            {children}
        </div>
    );
};

export default Content;