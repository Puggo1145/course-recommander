import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface CourseBadgesProps {
    isNationalQualityCourse: boolean;
    primaryDiscipline: string;
    courseType: string;
}


const CourseBadges: React.FC<CourseBadgesProps> = ({
    isNationalQualityCourse,
    primaryDiscipline,
    courseType,
}) => {
    const parsedPrimaryDiscipline = primaryDiscipline.split(",");
    const parsedCourseType = courseType.split(",");


    return (
        <ScrollArea className="w-full">
            <div className="flex items-center gap-2">
                <Badge>XXXX大学</Badge>
                {
                    isNationalQualityCourse && (
                        <Badge>国家精品课程</Badge>
                    )
                }

                {
                    parsedPrimaryDiscipline.map((discipline, index) => (
                        <Badge
                            key={index}
                            variant="secondary"
                        >
                            {discipline}
                        </Badge>
                    ))
                }

                {
                    parsedCourseType.map((type, index) => (
                        <Badge
                            key={index}
                            variant="secondary"
                        >
                            {type}
                        </Badge>
                    ))
                }
            </div>
            <ScrollBar 
                orientation="horizontal"
                className="invisible"
            />
        </ScrollArea>
    );
};

export default CourseBadges;