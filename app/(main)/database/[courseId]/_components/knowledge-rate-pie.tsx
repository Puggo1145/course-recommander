import React from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([PieChart, LabelLayout, UniversalTransition, CanvasRenderer]);

interface KnowledgeRatePieProps {
    coverageRate: number;
}

const KnowledgeRatePie: React.FC<KnowledgeRatePieProps> = ({ coverageRate }) => {
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
                        value: coverageRate,
                        itemStyle: { color: '#6c727f' },
                    },
                    {
                        name: 'Not Covered',
                        value: 100 - coverageRate,
                        itemStyle: { color: '#F0F0F0' },
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
