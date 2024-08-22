import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";

import Syllabus from "./syllabus";
import KnowledgeRatePie from "../_components/knowledge-rate-pie";
import CourseEvaluationWordCloud from "./course-evaluation-wordcloud";
import StudentCountTrend from "./student-count-trend";


interface CourseBasicBentoProps {
    syllabus: string[];
    // wordCloud: { name: string, value: number }[];
    knowledgePointCoverageRate: number;
    studentCountTrend: number[];
}

const CourseBasicBento: React.FC<CourseBasicBentoProps> = ({
    syllabus,
    knowledgePointCoverageRate,
    studentCountTrend,
}) => {
    const studentCountTrendLabels = studentCountTrend.map((_, idx) => `第 ${idx + 1} 次开课`);

    const basic = [
        {
            name: "课程大纲",
            description: "课程的具体教学内容和学习目标",
            className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
            background: <Syllabus syllabus={syllabus} />,
        },
        {
            name: "课程词云",
            description: "学习者对课程的普遍评价和感受",
            className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3",
            background: <CourseEvaluationWordCloud />,
        },
        {
            name: "知识点覆盖率",
            description: "课程所教授内容的全面性",
            className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
            background: <KnowledgeRatePie knowledgeCoverageRatio={knowledgePointCoverageRate} />,
        },
        {
            name: "课程热度趋势",
            description: "课程的自开课以来的选课人数变化",
            className: "lg:col-start-1 lg:col-end-4 lg:row-start-3 lg:row-end-5",
            background: <StudentCountTrend data={studentCountTrend} labels={studentCountTrendLabels} />,
        },
    ];

    return (
        <BentoGrid className="lg:grid-rows-4 grid-cols-3">
            {basic.map((feature) => (
                <BentoCard key={feature.name} {...feature} >
                </BentoCard>
            ))}
        </BentoGrid>
    );
};

export default CourseBasicBento;