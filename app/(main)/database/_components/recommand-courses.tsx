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
// mock data
import mockCourseData from "@/mock/course_analytics_mini.json";


const RecommandCourses: React.FC = () => {
  return (
    <div className="w-full">
      <ScrollArea className="w-full flex-1 whitespace-nowrap">
        <div className="grid grid-cols-3 gap-4">
          {
            mockCourseData.map((course, index) => (
              <Link key={index} href={`/database/${index}`}>
                <Card className="w-full rounded-2xl hover:cursor-pointer hover:bg-secondary/50">
                  <CardHeader>
                    <CardTitle className="text-xl line-clamp-1 mb-1">
                      {course.courseInfo.courseName}
                    </CardTitle>
                    <CourseBadges
                      isNationalQualityCourse={course.courseInfo.isNationalQualityCourse}
                      primaryDiscipline={course.courseInfo.primaryDiscipline.split(",")}
                      courseType={course.courseInfo.courseType.split(",")}
                    />
                  </CardHeader>
                  <CardContent>
                    <CourseFinalScore finalScore={course.scores.Final.FinalScore} />
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