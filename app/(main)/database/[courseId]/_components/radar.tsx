"use client";

import ReactEchartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { RadarChart } from 'echarts/charts';
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';


echarts.use([
    RadarChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
]);


const Radar: React.FC<{ scores: Record<string, any> }> = ({ scores }) => {

    const calculateAverageNormalizedScores = (scores: Record<string, any>) => {
        const result: Record<string, number> = {};

        for (const key in scores) {
            if (key === 'A') {
                continue;
            }

            const category = scores[key];
            let totalNormalizedScore = 0;
            let normalizedCount = 0;

            for (const subKey in category) {
                if (subKey !== `${key}_total`) {
                    const subCategory = category[subKey];

                    for (const scoreKey in subCategory) {
                        if (scoreKey.includes('Normalized')) {
                            totalNormalizedScore += subCategory[scoreKey];
                            normalizedCount++;
                        }
                    }

                    const averageScore = normalizedCount > 0
                        ? Math.round(totalNormalizedScore / normalizedCount)
                        : 0;
                    result[subKey] = averageScore;
                }
            }
        }

        return result;
    }

    const averageScores = calculateAverageNormalizedScores(scores);
    const indicators = [
        { name: '课程受欢迎程度', source: "B3", max: 100 },
        { name: '教学互动度', source: "B4", max: 100 },
        { name: '课程资源', source: "B5", max: 100 },
        { name: '习题难度', source: "C1", max: 100 },
        { name: '考试难度', source: "C2", max: 100 },
    ];

    const options = {
        radar: {
            indicator: indicators.map(item => ({
                name: item.name + '\n{value|' + averageScores[item.source] + '%}',
                max: item.max
            })),
            axisName: {
                formatter: (name: string) => {
                    const parts = name.split('\n');
                    return '{name|' + parts[0] + '}\n' + parts[1];
                },
                rich: {
                    name: {
                        fontSize: 12,
                        color: '#6c727f',
                        align: 'center'
                    },
                    value: {
                        fontSize: 24,
                        color: '#6172b8',
                        align: 'center',
                        padding: [4, 0, 0, 0],
                        fontWeight: 'bold'
                    }
                }
            }
        },
        series: [
            {
                type: 'radar',
                data: [
                    {
                        value: Object.values(averageScores),
                        areaStyle: {
                            color: 'rgba(121, 123, 154, 0.3)',
                        },
                    },
                ],
                symbolSize: 1,
                label: {
                    show: false,
                },
            }
        ]
    };

    return (
        <ReactEchartsCore
            echarts={echarts}
            option={options}
            notMerge={true}
            lazyUpdate={true}
            style={{
                width: "540px",
                height: "440px",
            }}
        />
    );
};

export default Radar;