export const studentEvaluationColor = (studentEvaluation: number) => {
    if (studentEvaluation < 0.3) {
        return "text-gray-500";
    } else if (studentEvaluation < 0.6) {
        return "text-yellow-500";
    } else {
        return "text-green-500";
    }
}

export const scoreColor = (finalScore: number) => {
    if (finalScore >= 0.8) {
        return "text-green-500";
    } else if (finalScore >= 0.5) {
        return "text-yellow-500";
    } else {
        return "text-gray-500";
    }
};
