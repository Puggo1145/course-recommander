import Link from "next/link";
// ui
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import CourseBadges from "./course-badges";
import CourseFinalScore from "./course-final-score";
// types
import type { Course } from "@/types/course";


const RecommandCourses: React.FC<{ courses: Course[] }> = ({ courses }) => {
  return (
    <div className="w-full">
      <ScrollArea className="w-full flex-1 whitespace-nowrap">
        <div className="grid grid-cols-3 gap-4">
          {
            courses.map((course) => (
              <Link key={course.basicInformation.id} href={`/database/${course.basicInformation.id}`}>
                <Card className="w-full rounded-2xl hover:cursor-pointer hover:bg-secondary/50">
                  <CardHeader>
                    <CardTitle className="text-xl line-clamp-1 mb-1">
                      {course.basicInformation.name}
                    </CardTitle>
                    <CourseBadges
                      university={course.basicInformation.tags.university}
                      isNationalQualityCourse={course.basicInformation.tags.nationBest}
                      primaryDiscipline={course.basicInformation.tags.primaryDisciplines}
                      secondaryDiscipline={course.basicInformation.tags.secondaryDisciplines}
                    />
                  </CardHeader>
                  <CardContent>
                    <CourseFinalScore finalScore={course.basicInformation.finalScore} />
                  </CardContent>
                </Card>
              </Link>
            ))
          }
        </div>
      </ScrollArea>
    </div>
  );
};

export default RecommandCourses;