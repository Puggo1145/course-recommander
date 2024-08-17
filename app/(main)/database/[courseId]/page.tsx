"use client";

// ui
import Container from "@/components/cus-ui/container";
import BackButton from "@/components/cus-ui/back-button";
import Title from "@/components/cus-ui/title";
import Description from "@/components/cus-ui/description";
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
import mockCourseData from "@/mock/course_analytics_mini.json";


const Page = ({ params }: { params: { courseId: number } }) => {
    const course = mockCourseData[params.courseId];


    return (
        <Container Xcenter={false} Ycenter={false}>
            <BackButton />
            <CourseDetailHeader>
                <CourseDetailIntroduction>
                    <Title className="line-clamp-1">{course.courseInfo.courseName}</Title>
                    <CourseBadges
                        isNationalQualityCourse={course.courseInfo.isNationalQualityCourse}
                        primaryDiscipline={course.courseInfo.primaryDiscipline}
                        courseType={course.courseInfo.courseType}
                    />
                    <Description>一段课程介绍文本</Description>
                    <CourseDetailInfo
                        sessionStatus={course.courseInfo.sessionStatus}
                        totalPublishedVideoDuration={course.courseInfo.totalPublishedVideoDuration}
                        prerequisiteCourses={course.courseInfo.prerequisiteCourses}
                        studentEvaluation={course.courseInfo.studentEvaluation}
                        finalScore={course.scores.Final.FinalScore}
                    />
                </CourseDetailIntroduction>
                <CourseDetailChart>
                    <Radar scores={course.scores} />
                </CourseDetailChart>
            </CourseDetailHeader>
            <Content>
                <CourseBasicBento 
                    disciplines={course.courseInfo.primaryDiscipline + course.courseInfo.secondaryDiscipline}
                    courseTeam={course.courseInfo.courseTeam}
                    knowledgePointCoverageRate={course.courseInfo.knowledgePointCoverageRate}
                />
            </Content>
        </Container>
    );
};

export default Page;