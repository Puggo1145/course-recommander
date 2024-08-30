
import {
    Signpost,
    ThumbsUp,
    ThumbsDown,
    LucideProps,
} from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

interface ILDAProps {
    A: string;
    B: string;
    C: string;
}

const Lda: React.FC<ILDAProps> = ({
    A,
    B,
    C,
}) => {
    return (
        <div className="flex flex-col p-4 space-y-4">
            <LdaItem title="课程定位" content={A} Icon={Signpost} />
            <LdaItem title="课程优点" content={B} Icon={ThumbsUp} />
            <LdaItem title="课程不足" content={C} Icon={ThumbsDown} />
        </div>
    );
};

const LdaItem: React.FC<{
    title: string,
    content: string,
    Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}> = ({
    title,
    content,
    Icon
}) => {
        return (
            <section className="relative border p-4 rounded-xl space-y-1 overflow-hidden">
                <div className="relative z-10">
                    <h6 className="font-bold text-sm text-muted-foreground">
                        {title}
                    </h6>
                    <p className="text-md leading-snug">{content}</p>
                </div>
                <Icon className="z-0 absolute text-secondary -bottom-3 right-4" size={48} />
            </section>
        );
    }

export default Lda;