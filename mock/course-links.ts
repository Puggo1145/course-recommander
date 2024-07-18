import type { CourseLinks } from "@/components/course-card"

export const courseLinks: CourseLinks[] = [
    {
        platform: "Mooc",
        title: "Python 语言程序设计",
        rating: 4,
        level: "初级",
        duration: 35,
        totalChapters: 5,
        chapters: [
            {
                title: "0.1 课程基本情况",
                duration: "03:54"
            },
            {
                title: "0.2 全课程内容导学 (必看: 课程内容渐进式体验)",
                duration: "04:23"
            },
            {
                title: "1.1 程序设计基本方法",
                duration: "06:54"
            },
            {
                title: "1.2 Python开发环境配置",
                duration: "08:28"
            },
            {
                title: "1.3 实例1: 温度转换",
                duration: "09:14"
            },
            {
                title: "1.4 Python程序语法元素分析",
                duration: "06:42"
            }
        ]
    },
    {
        platform: "Bilibili",
        title: "黑马程序员python教程，8天python从入门到精通",
        rating: 4,
        level: "初级",
        duration: 31,
        totalChapters: 121,
        chapters: [
            {
                title: "Python 导学视频",
                duration: "06:54"
            },
            {
                title: "第一阶段-第一章-01 初始Python",
                duration: "06:56"
            },
            {
                title: "第一阶段-第一章-02 什么是编程语言",
                duration: "07:02"
            },
            {
                title: "第一阶段-第一章-03 Python环境安装",
                duration: "06:36"
            },
            {
                title: "第一阶段-第一章-04-【拓展】-Python环境安装",
                duration: "06:19"
            },
            {
                title: "第一阶段-第一章-05-【拓展】-Python环境安装",
                duration: "12:07"
            }
        ]
    },
    {
        platform: "Coursera",
        title: "Python for Data Science, AI & Development",
        rating: 4.6,
        level: "初级",
        duration: 25,
        totalChapters: 5,
        chapters: [
            {
                title: "Python 基础",
                duration: "02:00:00"
            },
            {
                title: "Python 数据结构",
                duration: "03:00:00"
            },
            {
                title: "Python 编程基础",
                duration: "06:00:00"
            },
            {
                title: "Python 中的数据交互",
                duration: "05:00:00"
            },
            {
                title: "API 和 数据集",
                duration: "06:00:00"
            },
        ]
    }
]