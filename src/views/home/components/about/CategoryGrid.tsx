import CategoryCard from "./CategroyCard";

interface CategoryGridProps {
    categories?: Array<{
        title: string;
        description: string;
        icon: "code" | "design" | "ai" | "data";
    }>;
}

const CategoryGrid = ({
    categories = [
        {
            title: "Web Development",
            description:
              "Build innovative web applications using modern frameworks and tools",
            icon: "code",
          },
          {
            title: "UI/UX Design",
            description:
              "Create beautiful and intuitive user interfaces and experiences",
            icon: "design",
          },
          {
            title: "AI/ML",
            description:
              "Develop cutting-edge artificial intelligence and machine learning solutions",
            icon: "ai",
          },
          {
            title: "Data Science",
            description:
              "Analyze and visualize complex data sets to derive meaningful insights",
            icon: "data",
          },
    ],
}: CategoryGridProps) => {
    return (
        <div className="w-full bg-[#FBFAFC] py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                    {categories.map((category, index) => (
                        <CategoryCard
                        key={index}
                        title={category.title}
                        description={category.description}
                        icon={category.icon}
                        onClick={() => ""}
                    />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryGrid;