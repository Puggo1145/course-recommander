type WordCloud = {
    name: string,
    value: number
}
type Teacher = {
    name: string,
    title: string,
    desc: string
}

export type Course = {
    basicInformation: {
        id: number,
        name: string,
        href: string, // 课程链接
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
        courseTeam: Teacher[],
        workLoad: string,
        status: string,
        difficulty: string,
        studentRecommendationIndex: number,
        finalScore: number,
        prerequisites: string | null
    },
    // TODO - 展示部分三级指标
    radar: {
        [key: string]: { score: number, subIndexes: any }

        strengthOfCourseTeam: {
            score: number,
            subIndexes: {

            }
        },
        popularityIndex: {
            score: number,
            subIndexes: {
                avarageWatchDuration: number,
                studentCount: number,
                videoCompletionRate: number,
                pdfWatchRate: number,
                richTextWatchRate: number,
            }
        },
        interactionIndex: {
            score: number,
            subIndexes: {
                discussionCount: number,
                announcementCount: number,
                postCount: number,
                studentReplyRate: number,
                teacherReplyRate: number,
            }
        },
        resourcesRichnessIndex: {
            score: number,
            subIndexes: {
                // hasTextbook: boolean,
                relatedCourseCount: number,
                homeworkCount: number,
                pdfCount: number,
                richTextCount: number,
            }
        },
        sAoRatio: {
            score: number,
            subIndexes: {

            }
        },
    },
    visualization: {
        id: number,
        knowledgeCoverageRatio: number,
        studentCountTrend: number[],
        syllabus: string[]
    },
    commentsAnalysis: {
        id: number,
        wordCloud: {
            positive: WordCloud[]
            negative: WordCloud[]
        },
        LDA: {
            A: string,
            B: string,
            C: string,
        },
    }
    recommendation: []
}
