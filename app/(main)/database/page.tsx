// components
import Container from "@/components/cus-ui/container";
import Title from "@/components/cus-ui/title";
import Content from "@/components/cus-ui/content";
import RecommandCourses from "./_components/recommand-courses";

const Page: React.FC = () => {
  return (
    <Container Xcenter={false}>
      <Title>课程数据库</Title>
      <Content paddingX={0}>
        <RecommandCourses />
      </Content>
    </Container>
  );
};

export default Page;