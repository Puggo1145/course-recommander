import Image from "next/image";
import Link from "next/link";

// assets
import MoocIcon from "@/assets/icons/mooc.svg"
import UdemyIcon from "@/assets/icons/udemy.svg"

const supportedPlatforms = [
    {
        name: "中国大学 Mooc",
        url: "https://www.icourse163.org/",
        logo: MoocIcon
    },
    {
        name: "Bilibili",
        url: "https://www.bilibili.com/",
        logo: "https://www.bilibili.com/favicon.ico"
    },
    {
        name: "Coursera",
        url: "https://www.coursera.org/",
        logo: "https://www.coursera.org/favicon.ico"
    },
    {
        name: "edX",
        url: "https://www.edx.org/",
        logo: "https://www.edx.org/favicon.ico"
    },
    // {
    //     name: "Khan Academy",
    //     url: "https://www.khanacademy.org/",
    //     logo: "https://www.khanacademy.org/favicon.ico"
    // },
    {
        name: "Udemy",
        url: "https://www.udemy.com/",
        logo: UdemyIcon
    }
];

const SupportedPlatform: React.FC = () => {
    return (
        <section className="w-full pl-4">
            <p className="pl-2 text-muted-foreground">支持的平台</p>
            <div className="mt-2 flex items-center gap-x-2">
                {supportedPlatforms.map(item => (
                    <Link
                        key={item.name}
                        href={item.url}
                        className="px-3 py-1 rounded-full border
                        flex items-center gap-x-2 bg-white dark:bg-gray-900
                        hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image 
                            src={item.logo} 
                            alt={item.name} 
                            width={16} 
                            height={16} 
                        />
                        <span className="whitespace-nowrap">
                            {item.name}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default SupportedPlatform;