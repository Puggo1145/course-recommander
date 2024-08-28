
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
        <LdaItem title="课程定位" content={A} />
        <LdaItem title="课程优点" content={B} />
        <LdaItem title="课程不足" content={C} />
    </div>
  );
};

const LdaItem: React.FC<{ title: string, content: string }> = ({ title, content }) => {
    return (
        <section className="border p-4 rounded-xl space-y-1">
            <h6 className="font-bold text-sm text-muted-foreground">
                {title}
            </h6>
            <p className="text-md leading-snug">{content}</p>
        </section>
    );
}

export default Lda;