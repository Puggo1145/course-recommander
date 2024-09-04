import { LoaderCircle } from "lucide-react";

const Spinner: React.FC = () => {
    return (
        <LoaderCircle size={24} className="animate-spin" />
    );
};

export default Spinner;