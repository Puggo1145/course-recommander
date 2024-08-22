"use client"

import React from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([PieChart, LabelLayout, UniversalTransition, CanvasRenderer]);


const KnowledgeRatePie: React.FC<{ knowledgeCoverageRatio: number }> = ({ knowledgeCoverageRatio }) => {
    const options = {
        series: [
            {
                type: 'pie',
                radius: ['40%', '70%'], // 设置内外半径，创建环形效果
                avoidLabelOverlap: false,
                label: {
                    position: 'center', // 将标签放置在中心位置
                    formatter: `{d}%`, // 显示百分比并添加文本
                    fontSize: 24,
                    color: '#6d727e',
                    fontWeight: 'bold',
                },
                data: [
                    {
                        name: 'Covered',
                        value: knowledgeCoverageRatio,
                        itemStyle: { color: '#6c727f' },
                    },
                    {
                        name: 'Not Covered',
                        value: 100 - knowledgeCoverageRatio,
                        itemStyle: { color: '#d2d5da' },
                    },
                ],
            },
        ],
    };

    return (
        <ReactEchartsCore
            echarts={echarts}
            option={options}
            notMerge={true}
            lazyUpdate={true}
            style={{ width: '100%', height: '360px' }}
        />
    );
};

export default KnowledgeRatePie;
