
import { Card, CardContent } from "../../../../ui/Card";
import { Code, Palette, Cpu, LineChart} from "lucide-react";

interface CategoryCardProps {
    title?: string;
    description?: string;
    icon?: "code" | "design" | "ai" | "data";
    onClick?: () => void;
}

const iconMap = {
    code: Code,
    design: Palette,
    ai: Cpu,
    data: LineChart,
};

const CategoryCard = ({
    title = "Web Development",
    description = "Build innovative web applications using modern frameworks and tools",
    icon = "code",
    onClick = () => { },
}: CategoryCardProps) => {
    const IconComponent = iconMap[icon];

    return (
        <Card
            className="w-[280px] h-[320px] bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            onClick={onClick}
        >

            <CardContent className="p-6 flex flex-col items-center justify-center h-full space-y-4">
                <div className="p-4 rounded-full bg-[#4A90E2]/10"><IconComponent className="w-8 h-8 text-[#4A90E2]" /></div>
                <h3 className="text-xl font-semibold text-center text-gray-800">{title}</h3>
                <p className="text-center text-gray-600 text-sm">{description}</p>
            </CardContent>
        </Card>

    )
}

export default CategoryCard;