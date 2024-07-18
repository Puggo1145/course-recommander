import { useState } from "react";


const useFolder = () => {
    const [isFold, setIsFold] = useState(false);
    const onFold = () => setIsFold(!isFold);

    const Folder = () => (
        <div
            role="button"
            className="relative w-12 h-2 group cursor-pointer"
            onClick={onFold}
        >
            <div className={`inline-block absolute left-1 w-6 h-2 
                  rounded-full origin-left transition-all 
                bg-gray-300 dark:bg-gray-700 group-hover:bg-gray-700 
                ${isFold ? "group-hover:-rotate-12" : "group-hover:rotate-12"}`}
            />
            <div className={`inline-block absolute right-1 w-6 h-2 
                 rounded-full origin-right transition-all
                 bg-gray-300 dark:bg-gray-700 group-hover:bg-gray-700 group-hover:-rotate-12
                 ${isFold ? "group-hover:rotate-12" : "group-hover:-rotate-12"}`}
            />
        </div>
    )

    return {
        Folder,
        isFold,
        setIsFold
    }
};

export default useFolder;
