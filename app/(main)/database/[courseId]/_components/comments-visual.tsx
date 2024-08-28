
// components
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import CourseEvaluationWordCloud from "./course-evaluation-wordcloud";
import Lda from "./lda";
// types
import type { WordCloud } from "./course-evaluation-wordcloud";


interface ICommentsVisualProps {
    positiveWordCloud: WordCloud[];
    negativeWordCloud: WordCloud[];
    LDA: {
        A: string,
        B: string,
        C: string,
    }
}

const CommentsVisual: React.FC<ICommentsVisualProps> = ({
    positiveWordCloud,
    negativeWordCloud,
    LDA,
}) => {
    const basic = [
        {
            name: "积极评价词云",
            description: "学习者对课程的积极评价关键词",
            className: "lg:col-start-1 lg:col-end-2 lg:row-span-3",
            background: <CourseEvaluationWordCloud data={positiveWordCloud} />,
        },
        {
            name: "消极评价词云",
            description: "学习者对课程的消极评价关键词",
            className: "lg:col-start-2 lg:col-end-3 lg:row-span-3",
            background: <CourseEvaluationWordCloud data={negativeWordCloud} />,
        },
        {
            name: "课程主题提取分析",
            description: "课程定位、优点和不足总结",
            className: "lg:col-start-3 lg:col-end-4 lg:row-span-3",
            background: <Lda {...LDA} />,
        },
    ];

    return (
        <BentoGrid className="lg:grid-rows-3 grid-cols-3">
            {basic.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
    );
};

export default CommentsVisual;
