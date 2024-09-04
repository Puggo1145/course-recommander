// components
import Container from "@/components/cus-ui/container";
import Title from "@/components/cus-ui/title";
import Content from "@/components/cus-ui/content";
import RecommandCourses from "./_components/recommand-courses";
// types
import type { Course } from "@/types/course";
// mock
import { courses } from "@/mock/courses";


const Page: React.FC = async () => {
  const res = await fetch(process.env.BACKEND_URL + "/course");
  const courses = await res.json() as Course[];

  return (
    <Container Xcenter={false}>
      <Title>课程数据库</Title>
      <Content paddingX={0}>
        <RecommandCourses courses={courses} />
      </Content>
    </Container> 
  );
};

export default Page;