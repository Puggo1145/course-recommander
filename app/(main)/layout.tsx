// components
import MainLayout from "@/components/cus-ui/main-layout";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MainLayout>
        {children}
    </MainLayout>
  );
};

export default Layout;