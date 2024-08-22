export const CourseDetailHeader: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="pl-4 flex items-center justify-between gap-x-16">
        {children}
    </div>
  );
};

export const CourseDetailIntroduction: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <section className="flex flex-col gap-y-4">
        {children}
    </section>
  );
}

export const CourseDetailChart: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div>
        {children}
    </div>
  );
}
