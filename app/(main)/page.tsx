import CourseSearcher from "./_components/course-searcher";
import Slogan from "./_components/slogan";
import SupportedPlatform from "./_components/supported-platform";

const Page: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="max-w-[780px] w-full flex flex-col gap-y-4">
        <Slogan />
        <CourseSearcher />
        <SupportedPlatform />
      </div>
    </div>
  );
};

export default Page;