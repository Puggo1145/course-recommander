"use client";

// ui
import Container from "@/components/cus-ui/container";
import BackButton from "@/components/cus-ui/back-button";
import Title from "@/components/cus-ui/title";
import Content from "@/components/cus-ui/content";

// mock data
import mockCourseData from "@/mock/course_analytics_mini.json";


const Page = ({ params }: { params: { courseId: number } }) => {
    const courseData = mockCourseData[params.courseId];

    return (
        <Container Xcenter={false} Ycenter={false}>
            <BackButton />
            <Content paddingX={4}>
                <Title>{courseData.courseInfo.courseName}</Title>
                {params.courseId}
            </Content>
        </Container>
    );
};

export default Page;