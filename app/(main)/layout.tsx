import type React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="max-w-[1200px] w-full flex-1">
        {children}
    </main>
  );
};

export default Layout;