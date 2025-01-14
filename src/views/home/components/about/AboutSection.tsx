// About section
import CategoryGrid from "./CategoryGrid";

interface AboutSectionProps {
    title?: string;
    subtitle?: string;
}

const AboutSection = ({
    title = "About Hack-NB",
    subtitle = "Hack-NB is a dynamic, in-person event to collaborate, learn, and build groundbreaking projects. Open to individuals and teams, the hackathon spans three weekends and offers resources, mentorship, and prizes!",
}: AboutSectionProps) => {
    return (
        <section className="relative w-full mx-auto flex items-center bg-[#FBFAFC] py-12 px-6 md:px-12">
            <div className="relative z-10 mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">{title}</h1>
                <p className="text-lg md:text-xl text-gray-900/90 max-w-3xl py-9 mx-auto">{subtitle}</p>

                <CategoryGrid />
            </div>
        </section>
    )
}

export default AboutSection;