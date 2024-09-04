"use client";

// ui
import Container from "@/components/cus-ui/container";
import BackButton from "@/components/cus-ui/back-button";
import Title from "@/components/cus-ui/title";
import {
    CourseDescription,
    CourseDescriptionItem
} from "./_components/course-description";
import Content from "@/components/cus-ui/content";
import {
    CourseDetailHeader,
    CourseDetailIntroduction,
} from "./_components/course-detail";
import { Button } from "@/components/ui/button";
// components
import Spinner from "../../_components/spinner";
import CourseBadges from "../_components/course-badges";
import CourseDetailInfo from "./_components/course-detail-info";
import CommentsVisual from "./_components/comments-visual";
import CourseBasicBento from "./_components/course-basic-bento";
import RadarWithData from "./_components/radar-with-data";
// hooks
import useFetchCourse from "@/hooks/useFetchCourse";
// utils
import Link from "next/link";


const Page = ({ params }: { params: { courseId: number } }) => {
    const { course, loading } = useFetchCourse(params.courseId);

    if (loading || !course) {
        return (
            <Container flex flexCol Xcenter Ycenter>
                <Spinner />
            </Container>
        )
    }

    return (
        <Container Xcenter={false} Ycenter={false}>
            <CourseDetailHeader>
                <CourseDetailIntroduction>
                    <Title className="line-clamp-1 flex items-center cursor-pointer hover:text-gray-600 transition-all">
                        {course.basicInformation.name}
                    </Title>
                    <CourseBadges
                        university={course.basicInformation.tags.university}
                        isNationalQualityCourse={course.basicInformation.tags.nationBest}
                        primaryDiscipline={course.basicInformation.tags.primaryDisciplines}
                        secondaryDiscipline={course.basicInformation.tags.secondaryDisciplines}
                    />
                    <CourseDescription>
                        <CourseDescriptionItem>
                            <strong>课程简介：</strong>
                            {course.basicInformation.description.headingIntroduction}
                        </CourseDescriptionItem>
                        <CourseDescriptionItem>
                            <strong>教学目标：</strong>
                            {course.basicInformation.description.teachingTarget}
                        </CourseDescriptionItem>
                    </CourseDescription>
                    <Button
                        asChild
                        className="w-fit px-8 py-6 text-md"
                    >
                        <Link href={course.basicInformation.href}>
                            查看课程
                        </Link>
                    </Button>
                </CourseDetailIntroduction>
                <CourseDetailInfo
                    status={course.basicInformation.status}
                    workLoad={course.basicInformation.workLoad}
                    difficulty={course.basicInformation.difficulty}
                    prerequisites={course.basicInformation.prerequisites}
                    studentRecommendationIndex={course.basicInformation.studentRecommendationIndex}
                    finalScore={course.basicInformation.finalScore}
                />
            </CourseDetailHeader>

            <Content title="课程速览">
                <CourseBasicBento
                    syllabus={course.visualization.syllabus}
                    knowledgePointCoverageRate={course.visualization.knowledgeCoverageRatio}
                    studentCountTrend={course.visualization.studentCountTrend}
                    teachers={course.basicInformation.courseTeam}
                />
            </Content>

            <Content title="课程雷达图">
                <RadarWithData radar={course.radar} />
            </Content>

            <Content title="评论分析">
                <CommentsVisual
                    positiveWordCloud={course.commentsAnalysis.wordCloud.positive}
                    negativeWordCloud={course.commentsAnalysis.wordCloud.negative}
                    LDA={course.commentsAnalysis.LDA}
                />
            </Content>
        </Container>
    );
};

export default Page;