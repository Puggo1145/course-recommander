"use client"

import { useState, useEffect } from "react";
// components
import IntelliLoader from "@/components/intelli-loader";
import { Button } from "@/components/ui/button";
import SearchLinks from "./search-type/search-links";
// lib
import { cn } from "@/lib/utils";
// store
import { useQuery } from "@/stores/query";
// icons
import { ArrowLeftIcon } from "lucide-react";

const Searcher: React.FC = () => {
  const { changeStatus } = useQuery();
  const [loading, setLoading] = useState(true);

  const goBack = () => {
    changeStatus("idle");
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <header className="w-full h-[60px] flex items-center">
        <Button
          variant="ghost"
          className="hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={goBack}
        >
          <ArrowLeftIcon size={24} />
        </Button>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center gap-y-6">

        <IntelliLoader
          variants={loading ? "loading" : "success"}
          text={loading ? "正在调用引擎" : "为您推荐以下课程"}
        />

        <div className={cn(
          "mt-6 w-full overflow-hidden",
          "transition-all duration-300",
          loading ? "h-0" : "h-fit"
        )}>
          <SearchLinks />
        </div>

      </div>
    </div>
  );
};

export default Searcher;