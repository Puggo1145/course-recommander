import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface CourseBadgesProps {
    university: string;
    isNationalQualityCourse: 1 | 0;
    primaryDiscipline: string[];
    secondaryDiscipline: string[];
}


const CourseBadges: React.FC<CourseBadgesProps> = ({
    university,
    isNationalQualityCourse,
    primaryDiscipline,
    secondaryDiscipline
}) => {
    return (
        <ScrollArea className="w-full">
            <div className="flex items-center gap-2">
                <Badge>{university}</Badge>
                {
                    isNationalQualityCourse === 1 && (
                        <Badge>国家精品课程</Badge>
                    )
                }

                {
                    primaryDiscipline.concat(secondaryDiscipline).map((discipline, index) => (
                        <Badge
                            key={index}
                            variant="secondary"
                        >
                            {discipline}
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