import React from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import 'echarts-wordcloud'; // 引入词云插件

echarts.use([CanvasRenderer]);

const mockData = [
  { name: '内容丰富', value: 100 },
  { name: '课程易懂', value: 80 },
  { name: '教师耐心', value: 70 },
  { name: '互动性强', value: 60 },
  { name: '实用性高', value: 50 },
  { name: '难度适中', value: 40 },
  { name: '节奏紧凑', value: 35 },
  { name: '知识点全面', value: 30 },
  { name: '案例丰富', value: 25 },
  { name: '结构清晰', value: 20 },
  { name: '课堂氛围好', value: 15 },
];

const CourseEvaluationWordCloud: React.FC = () => {
  const options = {
    series: [
      {
        type: 'wordCloud',
        shape: 'circle',
        gridSize: 2,
        sizeRange: [12, 60], // 字体大小范围
        rotationRange: [-90, 90], // 旋转角度范围
        textStyle: {
          color: () => `rgb(${Math.round(Math.random() * 160)}, ${Math.round(Math.random() * 160)}, ${Math.round(Math.random() * 160)})`,
        },
        data: mockData,
      },
    ],
  };

  return (
    <ReactEchartsCore
      echarts={echarts}
      option={options}
      notMerge={true}
      lazyUpdate={true}
      style={{ width: '100%', height: '280px', position: 'absolute', top: 0, left: 0 }}
    />
  );
};

export default CourseEvaluationWordCloud;
