import { cn } from "@/lib/utils";
import { studentEvaluationColor, scoreColor } from "@/lib/text-color";


interface CourseDetailInfoProps {
  workLoad: string; // 学习所需时间
  status: string; // 开课状态
  difficulty: string; // 课程难度
  studentRecommendationIndex: number; // 学生推荐度 (0-1)
  finalScore: number; // 课程综合评分
  prerequisites: string | null; //
}


const CourseDetailInfo: React.FC<CourseDetailInfoProps> = (info) => {

  const statusColor = info.status === "已结束" ? "text-gray-500" : "text-green-500";

  return (
    <CourseDetailInfoCard>
      <CourseDetailInfoItem>
        <CourseDetailInfoTitle>
          学习所需时间
        </CourseDetailInfoTitle>
        <CourseDetailInfoValue>
          {info.workLoad}
        </CourseDetailInfoValue>
      </CourseDetailInfoItem>

      <CourseDetailInfoItem>
        <CourseDetailInfoTitle>
          难度
        </CourseDetailInfoTitle>
        <CourseDetailInfoValue>
          {info.difficulty}
        </CourseDetailInfoValue>
      </CourseDetailInfoItem>

      {
        info.prerequisites &&
        <CourseDetailInfoItem>
          <CourseDetailInfoTitle>
            先修课
          </CourseDetailInfoTitle>
          <CourseDetailInfoValue>
            {info.prerequisites}
          </CourseDetailInfoValue>
        </CourseDetailInfoItem>
      }

      <CourseDetailInfoItem>
        <CourseDetailInfoTitle>
          课程状态
        </CourseDetailInfoTitle>
        <CourseDetailInfoValue className={statusColor}>
          {info.status}
        </CourseDetailInfoValue>
      </CourseDetailInfoItem>

      <CourseDetailInfoItem>
        <CourseDetailInfoTitle>
          学生推荐度
        </CourseDetailInfoTitle>
        <CourseDetailInfoValue className={studentEvaluationColor(info.studentRecommendationIndex)}>
          {info.studentRecommendationIndex === 0 ? "暂无" : `${info.studentRecommendationIndex}%`}
        </CourseDetailInfoValue>
      </CourseDetailInfoItem>

      <CourseDetailInfoItem>
        <CourseDetailInfoTitle>
          综合推荐度
        </CourseDetailInfoTitle>
        <CourseDetailInfoValue className={scoreColor(info.finalScore)}>
          {info.finalScore}%
        </CourseDetailInfoValue>
      </CourseDetailInfoItem>
    </CourseDetailInfoCard>
  );
};

export default CourseDetailInfo;


const CourseDetailInfoCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-fit px-6 py-4 rounded-2xl border bg-card flex gap-x-8">
      {children}
    </div>
  );
}

const CourseDetailInfoItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col gap-y-2">
      {children}
    </div>
  );
}

const CourseDetailInfoTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <h2 className="text-sm text-gray-400">
      {children}
    </h2>
  );
}

interface CourseDetailInfoValueProps {
  children: React.ReactNode;
  className?: string;
}
const CourseDetailInfoValue: React.FC<CourseDetailInfoValueProps> = ({ children, className }) => {
  return (
    <p className={cn(className, "text-xl font-bold")}>
      {children}
    </p>
  );
}
