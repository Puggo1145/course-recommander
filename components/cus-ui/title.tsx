const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <h1 className="text-4xl font-bold text-foreground">
        {children}
    </h1>
  );
};

export default Title;