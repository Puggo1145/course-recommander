export type Course = {
    basicInformation: {
        name: string,
        tags: {
            university: string,
            nationBest: boolean,
            primaryDisciplines: string[],
            secondaryDisciplines: string[],
        },
        description: {
            headingIntroduction: string,
            teachingTarget: string,
        },
        workLoad: string,
        status: string,
        difficulty: string,
        studentRecommendationIndex: number,
        finalScore: number,
        prerequisites: string | null
    },
    radar: {
        [key: string]: number

        strengthOfCourseTeam: number,
        popularityIndex: number,
        interactionIndex: number,
        resourcesRichnessIndex: number,
        sAoRatio: number,
    },
    visualization: {
        wordCloud: { name: string, value: number }[],
        knowledgeCoverageRatio: number,
        studentCountTrend: number[],
        syllabus: string[]
    },
    recommendation: []
}

export const courses: Course[] = [
    {
        // 1. 基础信息
        basicInformation: {
            name: "Python 程序设计",
            tags: {
                university: "北京理工大学",
                nationBest: true,
                primaryDisciplines: [
                    "工科"
                ],
                secondaryDisciplines: [
                    "计算机科学与技术",
                    "数据科学"
                ],
            },
            description: {
                headingIntroduction: "计算机是运算工具，更是创新平台，高效有趣地利用计算机需要更简洁实用的编程语言。Python简洁却强大、简单却专业，它是当今世界最受欢迎的编程语言，学好它终身受用。请跟随我们，学习并掌握Python语言，一起动起来，站在风口、享受创新！",
                teachingTarget: `本课程适合如下教学目标：
                程序设计入门课：面向各层次各专业大学在校生、部分优秀高中生，作为程序设计入门课程
                体系化编程基础：面向拟构建坚实编程能力的自学者，作为不断奋斗的参考在线课程
                Python科目备考：面向全国计算机等级考试二级Python科目的备考考生，作为在线备考资源
                再试一次的尝试：面向拟放弃计算机或编程学习的学习者，作为再试一次的课程资源，学不会这门课学再放弃不迟...`,
            },
            workLoad: "2-3 小时每周",
            status: "已结束",
            difficulty: "初级",
            studentRecommendationIndex: 94.5,
            finalScore: 90,
            prerequisites: null
        },

        // 2. 课程雷达图
        radar: {
            strengthOfCourseTeam: 90.3,
            popularityIndex: 86.1,
            interactionIndex: 92.5,
            resourcesRichnessIndex: 88.7,
            sAoRatio: 79.2,
        },

        // 3. 课程可视化
        visualization: {
            wordCloud: [
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
            ],
            knowledgeCoverageRatio: 91.2,
            studentCountTrend: [
                108718,
                29127,
                44401,
                27207,
                98983,
                205348,
                320238,
                286407,
                168984,
                401846,
                740872,
            ],
            syllabus: [
                "【第0周】课程导学",
                "0.1 课程基本情况",
                "0.2 全课程内容导学  (必看: 课程内容渐进式体验)",
                "【第1周】Python基本语法元素",
                "1.1 程序设计基本方法",
                "1.2 Python开发环境配置",
                "1.3 实例1: 温度转换",
                "1.4 Python程序语法元素分析",
                "【第2周】Python基本图形绘制",
                "2.1 深入理解Python语言",
                "2.2 实例2: Python蟒蛇绘制",
                "2.3 模块1: turtle库的使用",
                "2.4 turtle程序语法元素分析",
                "【第3周】基本数据类型",
                "3.1 数字类型及操作",
                "3.2 实例3: 天天向上的力量",
                "3.3 字符串类型及操作",
                "3.4 模块2: time库的使用",
                "3.5 实例4: 文本进度条",
                "【第4周】程序的控制结构",
                "4.1 程序的分支结构",
                "4.2 实例5: 身体质量指数BMI",
                "4.3 程序的循环结构",
                "4.4 模块3: random库的使用",
                "4.5 实例6: 圆周率的计算",
                "【第5周】函数和代码复用",
                "5.1 函数的定义与使用",
                "5.2 实例7: 七段数码管绘制",
                "5.3 代码复用与函数递归",
                "5.4 模块4: PyInstaller库的使用",
                "5.5 实例8: 科赫雪花小包裹",
                "【第6周】组合数据类型",
                "6.1 集合类型及操作",
                "6.2 序列类型及操作",
                "6.3 实例9: 基本统计值计算",
                "6.4 字典类型及操作",
                "6.5 模块5: jieba库的使用",
                "6.6 实例10: 文本词频统计",
                "【第7周】文件和数据格式化",
                "7.1 文件的使用",
                "7.2 实例11: 自动轨迹绘制",
                "7.3 一维数据的格式化和处理",
                "7.4 二维数据的格式化和处理",
                "7.5 模块6: wordcloud库的使用",
                "7.6 实例12: 政府工作报告词云",
                "【第8周】程序设计方法学",
                "8.1 实例13: 体育竞技分析",
                "8.2 Python程序设计思维",
                "8.3 Python第三方库安装",
                "8.4 模块7: os库的使用",
                "8.5 实例14: 第三方库安装脚本",
                "【第9周】Python计算生态概览",
                "9.1 从数据处理到人工智能",
                "9.2 实例15: 霍兰德人格分析雷达图",
                "9.3 从Web解析到网络空间",
                "9.4 从人机交互到艺术设计",
                "9.5 实例16: 玫瑰花绘制",
                "【第9+周】全课程总结与学习展望",
                "0.3 全课程总结与学习展望"
            ],
        },
        recommendation: []
    }
]