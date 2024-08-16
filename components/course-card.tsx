
// components
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Skeleton } from "./ui/skeleton";


const CardContentTexts = ({
    // icon,
    label,
    content
}: {
    icon?: React.ReactNode,
    label: string,
    content: string | number | null
}) => {
    return (
        <section className="flex flex-col">
            <p className="text-sm text-muted-foreground">{label}</p>
            {
                !content &&
                <Skeleton className="w-14 h-[28px]" />
            }
            {
                content &&
                <span className="text-lg font-semibold text-foreground">
                    {content}
                </span>
            }
        </section>
    )
}

type CourseChapter = {
    title: string;
    duration: string;
}
export interface CourseLinks {
    platform: "Mooc" | "Bilibili" | "Coursera" | "Udemy";
    title: string;
    desc?: string;
    rating: number;
    level: "初级" | "中级" | "高级";
    duration: number;
    totalChapters: number | null;
    chapters: CourseChapter[];
}

const BadgeColor = {
    "Mooc": "#66c579",
    "Bilibili": "#479fd1",
    "Coursera": "#2355ca",
    "Udemy": "#2c2c2c"
}

const CourseCard: React.FC<{ courseLink: CourseLinks }> = ({ courseLink }) => {
    return (
        <Card className="w-[360px] rounded-2xl">
            <CardHeader>
                <div className="flex items-center gap-x-2">
                    {
                        courseLink && courseLink.platform &&
                        <Badge style={{ backgroundColor: BadgeColor[courseLink.platform]}}>
                            {courseLink.platform}
                        </Badge>
                    }
                    {
                        !courseLink &&
                        <Skeleton className="w-20 h-[20px]" />
                    }
                    {
                        courseLink &&
                        <CardTitle className="text-xl line-clamp-1">
                            {courseLink.title}
                        </CardTitle>
                    }
                </div>
                <CardDescription>
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-0">
                <section className="px-6 flex items-center justify-between">
                    <CardContentTexts
                        label="课程评分"
                        content={courseLink ? courseLink.rating : null}
                    />
                    <CardContentTexts
                        label="难度等级"
                        content={courseLink ? courseLink.level : null}
                    />
                    <CardContentTexts
                        label="学习时长"
                        content={courseLink ? courseLink.duration : null}
                    />
                </section>
                <section className="space-y-2">
                    {
                        !courseLink &&
                        <Skeleton className="ml-4 w-14 h-[16px]" />
                    }
                    {
                        courseLink &&
                        <span className="text-sm text-muted-foreground px-6">
                            {"共计" + courseLink.totalChapters + "章"}
                        </span>
                    }
                    <ul className="overflow-y-scroll h-[240px] border-y px-4">
                        {
                            !courseLink &&
                            Array.of(1, 1, 1).map((_, index) => (
                                <Skeleton key={index} className="w-full h-8 mt-2" />
                            ))
                        }
                        {
                            courseLink &&
                            courseLink.chapters.map((chapter, index) => (
                                <li key={index} className="py-4 flex items-center justify-between border-b gap-x-4">
                                    <span className="text-sm font-medium line-clamp-1">
                                        {chapter.title}
                                    </span>
                                    <span className="text-sm text-muted-foreground text-right">
                                        {chapter.duration}
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </section>
            </CardContent>
            <CardFooter className="flex items-center justify-between gap-x-4">
                <Button
                    variant="secondary"
                >
                    查看详情
                </Button>
                <Button>
                    去学习
                </Button>
            </CardFooter>
        </Card>
    );
};

export default CourseCard;