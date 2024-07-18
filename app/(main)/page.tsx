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
    <div className="w-full h-full p-4 flex flex-col items-center justify-center">
        <section className={cn(
          "max-w-[800px] w-full transition-all duration-500 mb-4",
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

        <section className="max-w-[800px] w-full mb-4">
          <CourseSearcher />
        </section>

        <div className={cn(
          "max-w-[800px] w-full transition-all duration-500 overflow-hidden",
          status === "search" && "hidden"
        )}>
          <SupportedPlatform />
        </div>
    </div>
  );
};

export default Page;