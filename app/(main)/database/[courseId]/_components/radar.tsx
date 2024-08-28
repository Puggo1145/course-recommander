"use client";

import ReactEchartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { RadarChart } from 'echarts/charts';
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
// types
import type { Course } from '@/mock/courses';


echarts.use([
    RadarChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
]);


const Radar: React.FC<{ data: Course["radar"] }> = ({ data }) => {
    const indicators = [
        {
            name: '课程团队实力',
            source: "strengthOfCourseTeam",
            max: 100,
            subIndexes: []
        },
        { 
            name: '课程受欢迎程度', 
            source: "popularityIndex", 
            max: 100,
            subIndexes: [
                { name: '平均观看时长', source: "avarageWatchDuration", unit: 0 },
                { name: '选课人数', source: "studentCount", unit: 0 },
                { name: '视频完成率', source: "videoCompletionRate", unit: 1 },
                { name: '富文本观看率', source: "richTextWatchRate", unit: 1 },
                { name: 'PDF观看率', source: "pdfWatchRate", unit: 1 }
            ]
        },
        { 
            name: '教学互动度', 
            source: "interactionIndex", 
            max: 100,
            subIndexes: [
                { name: '发布课时课程讨论', source: "discussionCount", unit: 0 },
                { name: '已发布公告数', source: "announcementCount", unit: 0 },
                { name: '论坛发帖率', source: "postCount", unit: 0 },
                { name: '学生回帖率', source: "studentReplyRate", unit: 1 },
                { name: '教师回帖率', source: "teacherReplyRate", unit: 1 },
            ]
        },
        { 
            name: '课程资源', 
            source: "resourcesRichnessIndex", 
            max: 100,
            subIndexes: [
                { name: '关联慕课堂数', source: "relatedCourseCount", unit: 0 },
                { name: '已发布作业数', source: "homeworkCount", unit: 0 },
                { name: '已发布 PDF 文档数', source: "pdfCount", unit: 0 },
                { name: '已发布富文本数', source: "richTextCount", unit: 0 },
            ]
        },
        { 
            name: '主客观题比例', 
            source: "sAoRatio", 
            max: 100,
            subIndexes: []
        },
    ];

    const options = {
        radar: {
            indicator: indicators.map(item => ({
                name: item.name + '\n{value|' + data[item.source].score + '%}',
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
                        value: Object.values(data).map(item => item.score),
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