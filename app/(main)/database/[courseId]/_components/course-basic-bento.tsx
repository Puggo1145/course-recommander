import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";

import { Badge } from "@/components/ui/badge";
import KnowledgeRatePie from "../_components/knowledge-rate-pie";
import CourseEvaluationWordCloud from "./course-evaluation-wordcloud";


interface CourseBasicBentoProps {
    disciplines: string;
    courseTeam: string;
    knowledgePointCoverageRate: number;
}

const CourseBasicBento: React.FC<CourseBasicBentoProps> = ({
    courseTeam,
    knowledgePointCoverageRate,
}) => {
    const basic = [
        {
            name: "课程团队",
            description: "本课程由以下老师出品",
            className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
            content:
                <div className="flex gap-x-2">
                    {
                        <div className="overflow-x-scroll flex flex-wrap items-center gap-2">
                            {
                                courseTeam.split('、').map((name, index) => (
                                    <Badge key={index}>{name}</Badge>
                                ))
                            }
                        </div>
                    }
                </div>,
        },
        {
            name: "课程词云",
            description: "课程词云反映了学习者对课程的普遍评价和感受",
            className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4",
            background: 
            <div className="w-full h-full relative">
                <CourseEvaluationWordCloud />,
            </div>
        },
        {
            name: "知识点覆盖率",
            description: "知识点覆盖率体现了课程所教授内容的全面性",
            className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
            background: <KnowledgeRatePie coverageRate={Math.floor(knowledgePointCoverageRate * 100)} />,
        },
    ];

    return (
        <>
            <h2 className="text-3xl font-bold mb-4 pl-2">
                课程速览
            </h2>
            <BentoGrid className="lg:grid-rows-3 grid-cols-2">
                {basic.map((feature) => (
                    <BentoCard key={feature.name} {...feature} >
                        {feature.content}
                    </BentoCard>
                ))}
            </BentoGrid>
        </>
    );
};

export default CourseBasicBento;