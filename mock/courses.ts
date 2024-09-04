import type { Course } from "@/types/course"

export const courses: Course[] = [
    {
        // 1. 基础信息
        basicInformation: {
            id: 0,
            name: "Python 程序设计",
            href: "https://www.icourse163.org/course/BIT-268001",
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
            courseTeam: [
                {
                    name: "嵩天",
                    title: "教授",
                    desc: `嵩天, 博士, 教授, 博士生导师, 北京理工大学网络空间安全学院副院长, "网络空间安全"和"计算机科学与技术"双学科博士生导师, 北京市青年教学名师, 北京理工大学教学名师. 美国圣路易斯华盛顿大学(Washington University in St.Louis)公派访问学者. 2002年, 毕业于东北大学计算机系, 获学士学位, 校98尖子班(实验班)成员, 同年保送至清华大学. 2008年1月, 毕业于清华大学计算机系, 获工学博士学位. 同年, 进入北京理工大学计算机学院工作. ACM/IEEE会员, 中国计算机学会高级会员, 中国计算机学会体系结构专委会常务委员、教育专委会委员. 全国高校计算机教育研究会常务理事、青年教师工作委员会主任. 主讲：Python语言程序设计、网络与信息安全、计算机网络等课程, 主要从事未来互联网体系结构、网络信息安全、智慧学习空间等方向研究。`
                },
                {
                    name: "黄天羽",
                    title: "教授",
                    desc: `黄天羽，北京理工大学计算机学院教授，北京市高等学校青年教学名师，博导，美国宾夕法尼亚大学公派访问学者，2007 年 4 月获得北京理工大学计算机应用专业博士学位，留校任教北京理工大学。主讲课程为《Python语言程序设计》、《软件工程基础训练》、《动画原理与实现》、《虚拟现实技术与应用》、《数字表演基础与应用》、《人群建模与仿真》，主持建设2门国家级一流课程，获北京市教育教学成果奖2项，指导学生获得全国“互联网+”比赛金奖、“挑战杯”比赛银奖。研究方向包括虚拟现实、计算机仿真、数字表演等`
                }
            ],
            workLoad: "2-3 小时每周",
            status: "已结束",
            difficulty: "初级",
            studentRecommendationIndex: 94.5,
            finalScore: 90,
            prerequisites: null
        },

        // 2. 课程雷达图
        radar: {
            strengthOfCourseTeam: {
                score: 90,
                subIndexes: {
                }
            },
            popularityIndex: {
                score: 88.1,
                subIndexes: {
                    avarageWatchDuration: 10,
                    studentCount: 10000,
                    videoCompletionRate: 80,
                    pdfWatchRate: 70,
                    richTextWatchRate: 60,
                }
            },
            interactionIndex: {
                score: 87.2,
                subIndexes: {
                    discussionCount: 100,
                    announcementCount: 80,
                    postCount: 70,
                    studentReplyRate: 60,
                    teacherReplyRate: 50
                }
            },
            resourcesRichnessIndex: {
                score: 85.3,
                subIndexes: {
                    relatedCourseCount: 10,
                    homeworkCount: 8,
                    pdfCount: 7,
                    richTextCount: 6,
                }
            },
            sAoRatio: {
                score: 84.4,
                subIndexes: {
                }
            },
        },

        // 3. 课程可视化
        visualization: {
            id: 0,
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

        // 4. 评论分析
        commentsAnalysis: {
            id: 0,
            wordCloud: {
                positive: [
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
                negative: [
                    { name: '视频时长过短', value: 100 },
                    { name: '章节刷新频繁', value: 80 },
                    { name: '知识点重复', value: 70 },
                    { name: '难度不均衡', value: 60 },
                    { name: '课程资源不足', value: 50 },
                    { name: '讲解速度过快', value: 40 },
                    { name: '内容重复', value: 35 },
                    { name: '知识点不清晰', value: 30 },
                    { name: '教学风格不统一', value: 25 },
                    { name: '案例不够丰富', value: 20 },
                    { name: '课程节奏不合理', value: 15 },
                ],
            },
            LDA: {
                A: "适用于 Python 初学者的入门课程，知识点清晰、讲解结构层次分明，内容详尽",
                B: "课程资源包含开源代码、相关教材以及知识点图解；教学风格轻松有趣；讲解耐心",
                C: "视频时长较短、分小节数量较多，导致观感不佳，短时间内就需要刷新章节",
            }
        },
    }
]