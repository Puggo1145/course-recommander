"use client"

import { useState, useEffect } from "react";
// components
import CourseCard from "@/components/course-card";
// mock
import { courseLinks } from "@/mock/course-links";
// types
import type { CourseLinks } from "@/components/course-card";


const SearchLinks: React.FC = () => {
  // @ts-expect-error 模拟数据未获取
  const [data, setData] = useState<CourseLinks[]>([undefined, undefined, undefined]);

  // 模拟请求数据
  useEffect(() => {
    setTimeout(() => {
      setData(courseLinks);
    }, 4000);
  }, []);

  return (
    <div className="w-full flex items-center gap-x-4">
      {data.map((item, index) => (
        <CourseCard key={index} courseLink={item} />
      ))}
    </div>
  );
};

export default SearchLinks;