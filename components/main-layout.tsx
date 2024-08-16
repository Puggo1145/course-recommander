const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="max-w-[1200px] w-full p-4 flex-1">
        {children}
    </main>
  );
};

export default MainLayout;