import { useState, useEffect } from "react";
// types
import type { Course } from "@/types/course";

const useFetchCourse = (id: number) => {
    const [course, setCourse] = useState<Course>();
    const [loading, setLoading] = useState(false);

    const handleFetchCourse = async () => {
        setLoading(true);

        try {
            const res = await fetch("http://8.137.118.167:5000/course/" + id);
            if (res.ok) {
                const course = await res.json() as Course;
                setCourse(course);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        handleFetchCourse();
    }, []);

    return {
        course,
        loading,
    };
};

export default useFetchCourse;