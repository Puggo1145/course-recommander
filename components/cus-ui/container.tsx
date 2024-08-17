import { cn } from "@/lib/utils";

interface ContainerProps {
    children?: React.ReactNode;
    flex?: boolean;
    flexCol?: boolean;
    Xcenter?: boolean;
    Ycenter?: boolean;
}

const Container: React.FC<ContainerProps> = ({
    children,
    flex = true,
    flexCol = true,
    Xcenter = true,
    Ycenter = true,
}) => {
    const containerStyle = cn(
        flex && "flex",
        flexCol && "flex-col",
        Xcenter && "items-center",
        Ycenter && "justify-center",
    );

    return (
        <div className={cn("w-full h-full gap-4 pb-20", containerStyle)}>
            {children}
        </div>
    );
};

export default Container;