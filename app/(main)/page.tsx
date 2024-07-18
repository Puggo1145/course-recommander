"use client";

// components
import CourseSearcher from "./_components/course-searcher";
import Slogan from "./_components/slogan";
import SupportedPlatform from "./_components/supported-platform";
import Searcher from "./_components/searcher";
// libs
import { cn } from "@/lib/utils";
// stores
import { useQuery } from "@/stores/query";


const Page: React.FC = () => {
  const { status } = useQuery();

  return (
    <div className="w-full h-full py-4 flex items-center justify-center">
      <div className="max-w-[780px] h-full w-full flex flex-col justify-center">
        <section className={cn(
          "transition-all duration-500 mb-4",
          status === "search" && "-mt-[50px] opacity-0 filter: blur-5",
        )}>
          <Slogan />
        </section>

        <section className={cn(
          "w-full h-0 overflow-hidden",
          "transition-all duration-500",
          status === "search" && "flex-1",
        )}>
          {
            status === "search" &&
            <Searcher />
          }
        </section>

        <CourseSearcher />

        <div className={cn(
          "mt-4 transition-all duration-500 overflow-hidden",
          status === "search" && "mt-9 -mb-[80px] opacity-0 filter: blur-5"
        )}>
          <SupportedPlatform />
        </div>
      </div>
    </div>
  );
};

export default Page;