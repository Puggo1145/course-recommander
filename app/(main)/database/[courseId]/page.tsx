"use client";

// ui
import Container from "@/components/cus-ui/container";
import BackButton from "@/components/cus-ui/back-button";
import Title from "@/components/cus-ui/title";
import { CourseDescription, CourseDescriptionItem } from "./_components/course-description";
import Content from "@/components/cus-ui/content";
import {
    CourseDetailHeader,
    CourseDetailIntroduction,
    CourseDetailChart
} from "./_components/course-detail";
import CourseBadges from "../_components/course-badges";
import CourseDetailInfo from "./_components/course-detail-info";
// bento content
import CourseBasicBento from "./_components/course-basic-bento";
// visual
import Radar from "./_components/radar";
// mock data
import { courses } from "@/mock/courses";


const Page = ({ params }: { params: { courseId: number } }) => {
    const course = courses[params.courseId];


    return (
        <Container Xcenter={false} Ycenter={false}>
            <BackButton />
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
                            <strong>
                                课程简介：
                            </strong>
                            {course.basicInformation.description.headingIntroduction}
                        </CourseDescriptionItem>
                        <CourseDescriptionItem>
                            <strong>
                                教学目标：
                            </strong>
                            {course.basicInformation.description.teachingTarget}
                        </CourseDescriptionItem>
                    </CourseDescription>
                    <CourseDetailInfo
                        status={course.basicInformation.status}
                        workLoad={course.basicInformation.workLoad}
                        difficulty={course.basicInformation.difficulty}
                        prerequisites={course.basicInformation.prerequisites}
                        studentRecommendationIndex={course.basicInformation.studentRecommendationIndex}
                        finalScore={course.basicInformation.finalScore}
                    />
                </CourseDetailIntroduction>
                <CourseDetailChart>
                    <Radar data={course.radar} />
                </CourseDetailChart>
            </CourseDetailHeader>
            <Content>
                <h2 className="text-2xl font-bold mb-4 pl-2">
                    课程速览
                </h2>
                <CourseBasicBento
                    syllabus={course.visualization.syllabus}
                    knowledgePointCoverageRate={course.visualization.knowledgeCoverageRatio}
                    studentCountTrend={course.visualization.studentCountTrend}
                />
            </Content>
            <Content>
                <h2 className="text-2xl font-bold mb-4 pl-2">
                    相关推荐
                </h2>
                <div className="w-full flex items-center justify-center min-h-[200px]">
                    <p className="text-muted-foreground">暂无相关推荐</p>
                </div>
            </Content>
        </Container>
    );
};

export default Page;