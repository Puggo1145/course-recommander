import { cn } from "@/lib/utils";
import { studentEvaluationColor } from "@/lib/text-color";


interface CourseDetailInfoProps {
  sessionStatus: string;
  totalPublishedVideoDuration: number; // 发布视频总时长
  prerequisiteCourses: number; // 先修课程: 0 - 无, 1 - 有
  studentEvaluation: number; // 学生推荐度 (0-1)
  finalScore: number; // 课程综合评分
}


const CourseDetailInfo: React.FC<CourseDetailInfoProps> = (info) => {

  const sessionStatusColor = info.sessionStatus === "已结束" ? "text-gray-500" : "text-green-500";

  return (
    <CourseDetailInfoCard>
      <CourseDetailInfoItem>
        <CourseDetailInfoTitle>
          学习所需时间
        </CourseDetailInfoTitle>
        <CourseDetailInfoValue>
          {Math.floor(info.totalPublishedVideoDuration / 69)} 小时
        </CourseDetailInfoValue>
      </CourseDetailInfoItem>

      <CourseDetailInfoItem>
        <CourseDetailInfoTitle>
          课程状态
        </CourseDetailInfoTitle>
        <CourseDetailInfoValue className={sessionStatusColor}>
          {info.sessionStatus}
        </CourseDetailInfoValue>
      </CourseDetailInfoItem>

      <CourseDetailInfoItem>
        <CourseDetailInfoTitle>
          先修课
        </CourseDetailInfoTitle>
        <CourseDetailInfoValue>
          {info.prerequisiteCourses ? "有" : "无"}
        </CourseDetailInfoValue>
      </CourseDetailInfoItem>

      <CourseDetailInfoItem>
        <CourseDetailInfoTitle>
          学生推荐度
        </CourseDetailInfoTitle>
        <CourseDetailInfoValue className={studentEvaluationColor(info.studentEvaluation)}>
          {info.studentEvaluation === 0 ? "暂无" : `${Math.floor(info.studentEvaluation * 100)}%`}
        </CourseDetailInfoValue>
      </CourseDetailInfoItem>

      <CourseDetailInfoItem>
        <CourseDetailInfoTitle>
          综合推荐度
        </CourseDetailInfoTitle>
        <CourseDetailInfoValue>
          {Math.floor(info.finalScore * 100)}%
        </CourseDetailInfoValue>
      </CourseDetailInfoItem>
    </CourseDetailInfoCard>
  );
};

export default CourseDetailInfo;


const CourseDetailInfoCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="px-6 py-4 rounded-2xl border bg-card flex gap-x-8">
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
