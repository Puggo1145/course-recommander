import FlickeringGrid from "@/components/magicui/flickering-grid";

const courseDetailLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <div className="relative z-10">
                {children}
            </div>
            <FlickeringGrid
                className="z-0 fixed inset-0 size-full"
                squareSize={4}
                gridGap={8}
                color="#3862df"
                maxOpacity={0.1}
                flickerChance={0.1}
            />
        </>
    );
};

export default courseDetailLayout;