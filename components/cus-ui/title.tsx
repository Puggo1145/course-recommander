import { cn } from "@/lib/utils";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <h1 className={cn(className, "text-4xl font-bold text-foreground")}>
      {children}
    </h1>
  );
};

export default Title;