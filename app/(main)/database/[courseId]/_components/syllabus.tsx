"use client";

const Syllabus: React.FC<{ syllabus: string[] }> = ({ syllabus }) => {
    return (
        <ul className="overflow-y-scroll h-[250px] lg:h-[360px] border-y px-4">
            {syllabus.map((item, index) => (
                <li key={index} className="py-4 flex items-center justify-between border-b gap-x-4">
                    <span className="text-sm font-medium line-clamp-1">
                        {item}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default Syllabus;