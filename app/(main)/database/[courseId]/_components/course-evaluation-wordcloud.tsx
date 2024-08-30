"use client"


import ReactEchartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import 'echarts-wordcloud'; // 引入词云插件

echarts.use([CanvasRenderer]);


export type WordCloud = {
  name: string,
  value: number
}

interface ICourseEvaluationWordCloudProps {
  data: WordCloud[];
}

const CourseEvaluationWordCloud: React.FC<ICourseEvaluationWordCloudProps> = ({ data }) => {
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
        data: data,
      },
    ],
  };

  return (
    <ReactEchartsCore
      echarts={echarts}
      option={options}
      notMerge={true}
      lazyUpdate={true}
      style={{ width: '100%', height: '360px', position: 'absolute', top: 0, left: 0 }}
    />
  );
};

export default CourseEvaluationWordCloud;
