// components
import Radar from "./radar";
import Rate from "./rate";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
// types
import type { Course } from "@/types/course";


interface IRadarWithDataProps {
    radar: Course["radar"];
}

const RadarWithData: React.FC<IRadarWithDataProps> = ({ radar }) => {
    return (
        <div className="flex flex-col items-center">
            <Radar data={radar} />
            <div className="w-full space-y-8">
                <SubIndexSection title="课程受欢迎程度子指标">
                    <PopularityIndexSubIndexBento data={radar.popularityIndex.subIndexes} />
                </SubIndexSection>
                <SubIndexSection title="教学互动度子指标">
                    <InteractionIndexBento data={radar.interactionIndex.subIndexes} />
                </SubIndexSection>
                <SubIndexSection title="资源丰富度子指标">
                    <ResourcesRichnessIndexBento data={radar.resourcesRichnessIndex.subIndexes} />
                </SubIndexSection>
            </div>
        </div>
    );
};



interface IInteractionIndexBentoProps {
    data: Course["radar"]["interactionIndex"]["subIndexes"];
}
const InteractionIndexBento = ({
    data
}: IInteractionIndexBentoProps) => {
    const interactionIndexSubSub = [
        {
            name: "发布课时课程讨论",
            description: "",
            className: "col-span-1",
            background: <NumberIndex value={data.discussionCount} unit="个" />
        },
        {
            name: "已发布公告数",
            description: "",
            className: "col-span-1",
            background: <NumberIndex value={data.announcementCount} unit="个" />
        },
        {
            name: "论坛发帖率",
            description: "",
            className: "col-span-1",
            background: <Rate rate={data.postCount} />
        },
        {
            name: "学生回帖率",
            description: "",
            className: "col-span-1",
            background: <Rate rate={data.studentReplyRate} />
        },
        {
            name: "教师回帖率",
            description: "",
            className: "col-span-1",
            background: <Rate rate={data.teacherReplyRate} />
        },
    ]

    return (
        <BentoGrid className="lg:grid-rows-1 grid-cols-5">
            {interactionIndexSubSub.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
    )
}

interface IPopularityIndexSubIndexBentoProps {
    data: Course["radar"]["popularityIndex"]["subIndexes"];
}
const PopularityIndexSubIndexBento = ({
    data
}: IPopularityIndexSubIndexBentoProps) => {
    const popularityIndexSub = [
        {
            name: "平均观看时长",
            description: "",
            className: "col-span-1",
            background: <NumberIndex value={data.averageWatchDuration} unit="分钟" />
        },
        {
            name: "选课人数",
            description: "",
            className: "col-span-1",
            background: <NumberIndex value={data.studentCount} unit="人" />
        },
        {
            name: "视频完成率",
            description: "",
            className: "col-span-1",
            background: <Rate rate={data.videoCompletionRate} />
        },
        {
            name: "富文本观看率",
            description: "",
            className: "col-span-1",
            background: <Rate rate={data.richTextWatchRate} />
        },
        {
            name: "PDF 观看率",
            description: "",
            className: "col-span-1",
            background: <Rate rate={data.pdfWatchRate} />
        },
    ]

    return (
        <BentoGrid className="lg:grid-rows-1 grid-cols-5">
            {popularityIndexSub.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
    )
}


interface IResourcesRichnessIndexBentoProps {
    data: Course["radar"]["resourcesRichnessIndex"]["subIndexes"];
}
const ResourcesRichnessIndexBento = ({
    data
}: IResourcesRichnessIndexBentoProps) => {
    const resourcesRichnessIndexSub = [
        {
            name: "关联慕课堂数",
            description: "",
            className: "col-span-1",
            background: <NumberIndex value={data.relatedCourseCount} unit="门" />
        },
        {
            name: "已发布作业数",
            description: "",
            className: "col-span-1",
            background: <NumberIndex value={data.homeworkCount} unit="个" />
        },
        {
            name: "已发布 PDF 文档数",
            description: "",
            className: "col-span-1",
            background: <NumberIndex value={data.pdfCount} unit="个" />
        },
        {
            name: "已发布富文本数",
            description: "",
            className: "col-span-1",
            background: <NumberIndex value={data.richTextCount} unit="个" />
        },
    ]

    return (
        <BentoGrid className="lg:grid-rows-1 grid-cols-4">
            {resourcesRichnessIndexSub.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
    )
}



const SubIndexSection = ({
    title,
    children
}: {
    title: string;
    children: React.ReactNode;
}) => {
    return (
        <section className="w-full space-y-2">
            <h2 className="text-lg font-bold">{title}</h2>
            {children}
        </section>
    )
}

const NumberIndex = ({
    value,
    unit
}: {
    value: number,
    unit: string
}) => {
    return (
        <div className="min-h-[200px] size-full flex flex-col items-center justify-center">
            <span className="text-4xl font-bold">{value}</span>
            <span className="ml-1 text-sm text-muted-foreground justify-end">{unit}</span>
        </div>
    )
}

export default RadarWithData;