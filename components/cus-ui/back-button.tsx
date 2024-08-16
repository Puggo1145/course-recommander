import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";


interface BackButtonProps {
  size?: number;
}

const BackButton: React.FC<BackButtonProps> = ({ size = 32 }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  }

  return (
    <Button
      variant="ghost"
      onClick={goBack}
      className="w-fit hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      <ChevronLeft size={size} />
    </Button>
  );
};

export default BackButton;