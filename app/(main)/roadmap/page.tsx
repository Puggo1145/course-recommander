// pages/index.tsx 或 app/page.tsx
"use client"

import React from 'react';
import RoadmapRenderer from './_components/roadmap-renderer';

const Page: React.FC = () => {
  const roadmapData = {
    title: "Front-end",
    children: [
      {
        title: "Internet",
        children: [
          { title: "How does the internet work?", isCompleted: true },
          { title: "What is HTTP?", isCompleted: true },
          { title: "What is Domain Name?", isCompleted: true },
          { title: "What is hosting?", isCompleted: true },
          { title: "DNS and how it works?", isCompleted: true },
          { title: "Browsers and how they work?", isCompleted: true }
        ]
      },
      {
        title: "CSS",
        children: [
          { title: "Learn the basics", isCompleted: true },
          { title: "Making Layouts", isCompleted: true },
          { title: "Responsive Design", isCompleted: true }
        ]
      },
      {
        title: "JavaScript",
        children: []
      },
      {
        title: "Version Control Systems",
        children: [
          {
            title: "VCS Hosting",
            children: [
              { title: "GitHub", isCompleted: true },
              { title: "GitLab", isCompleted: false },
              { title: "Bitbucket", isCompleted: false }
            ]
          }
        ]
      }
    ]
  };

  return (
    <div className="container overflow-y-scroll mx-auto px-4 py-8">
      <RoadmapRenderer data={roadmapData} />
    </div>
  );
};

export default Page;