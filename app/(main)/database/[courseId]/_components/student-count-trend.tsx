"use client";

import ReactEchartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent } from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
    LineChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
    GridComponent,
    TooltipComponent,
]);

const StudentCountTrend: React.FC<{ data: number[], labels: string[] }> = ({ data, labels }) => {
    

    const options = {
        tooltip: {
            trigger: 'axis',
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: labels,
            axisLine: {
                lineStyle: {
                    color: '#6c727f'
                }
            },
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#6c727f'
                }
            },
        },
        series: [
            {
                name: 'Student Count',
                type: 'line',
                data: data,
                areaStyle: {
                    color: 'rgba(65, 97, 219, 0.3)',
                },
                lineStyle: {
                    color: '#3662e3',
                    width: 2,
                },
                symbolSize: 6,
                smooth: true,
            },
        ],
    };

    return (
        <ReactEchartsCore
            echarts={echarts}
            option={options}
            notMerge={true}
            lazyUpdate={true}
            style={{
                width: "100%",
                height: "360px",
            }}
        />
    );
};

export default StudentCountTrend;
