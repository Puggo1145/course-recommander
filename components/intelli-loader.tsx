// lib
import { cn } from "@/lib/utils";

import "@/assets/css/intelli-loader.css";


interface IntelliLoaderProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variants?: "loading" | "success" | "error";
  text?: string;
}

const loaderSize = {
  sm: "size-12",
  md: "size-[92px]",
  lg: "size-[128px]",
};

const loaderVariants = {
  loading: {
    box: "flex flex-col items-center gap-y-6",
    loader: loaderSize.md
  },
  success: {
    box: "w-full flex items-center gap-x-6",
    loader: loaderSize.sm
  },
  error: {
    box: "loader-error",
    loader: loaderSize.md
  },
};


const IntelliLoader: React.FC<IntelliLoaderProps> = ({
  variants = "loading",
  size = "md",
  className = "",
  text
}) => {
  return (
    <div className={loaderVariants[variants].box}>
      <span className={cn(
        "loader transition-all duration-500",
        variants === "loading" && "loader-heatBeat",
        loaderSize[size], 
        loaderVariants[variants].loader,
        className,
      )}></span>
      {
        text &&
        <span className="text-md font-semibold text-gray-400">
          {text}
        </span>
      }
    </div>
  );
};

export default IntelliLoader;