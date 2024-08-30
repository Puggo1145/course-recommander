"use client"

import React from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([PieChart, LabelLayout, UniversalTransition, CanvasRenderer]);


const KnowledgeRatePie: React.FC<{ rate: number, height?: number }> = ({ rate, height=200 }) => {
    const options = {
        series: [
            {
                type: 'pie',
                radius: ['40%', '70%'], // 设置内外半径，创建环形效果
                avoidLabelOverlap: true,
                data: [
                    {
                        name: 'Covered',
                        value: rate,
                        itemStyle: { color: '#3662e3' },
                        label: {
                            position: 'center', // 将标签放置在中心位置
                            formatter: `{d}%`, // 显示百分比并添加文本
                            fontSize: 24,
                            color: '#6d727e',
                            fontWeight: 'bold',
                        },
                    },
                    {
                        name: 'Not Covered',
                        value: 100 - rate,
                        itemStyle: { color: '#e3e3e9' },
                        label: {
                            show: false,
                        }
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
            style={{ width: '100%', height: `${height}px` }}
        />
    );
};

export default KnowledgeRatePie;
