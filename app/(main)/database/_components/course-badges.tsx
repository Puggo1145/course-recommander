import { Badge } from "@/components/ui/badge";


interface CourseBadgesProps {
    isNationalQualityCourse: boolean;
    primaryDiscipline: string[];
    courseType: string[];
}


const CourseBadges: React.FC<CourseBadgesProps> = ({
    isNationalQualityCourse,
    primaryDiscipline,
    courseType,
}) => {
    return (
        <div className="flex flex-wrap items-center gap-2">
            {
                isNationalQualityCourse && (
                    <Badge color="green">国家精品课程</Badge>
                )
            }

            {
                primaryDiscipline.map((discipline, index) => (
                    <Badge 
                        key={index} 
                        variant="secondary"
                    >
                        {discipline}
                    </Badge>
                ))
            }

            {
                courseType.map((type, index) => (
                    <Badge 
                        key={index} 
                        variant="secondary"
                    >
                        {type}
                    </Badge>
                ))
            }
        </div>
    );
};

export default CourseBadges;