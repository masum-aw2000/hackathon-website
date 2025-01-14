import CountdownTimer from "./CountdownTimer";
import Button from "../../../../ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const HeroSection = ({
  title = "Join the Ultimate Hackathon Experience",
  subtitle = "Showcase your skills, build amazing projects, and compete for exciting prizes",
  primaryCTA = "Register Now",
  secondaryCTA = "Learn More",
  onPrimaryClick = () => {},
  onSecondaryClick = () => {},
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-[#4A90E2] via-[#6B4FBB] to-[#50E3C2] flex items-center justify-center px-4 md:px-8 lg:px-16">
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <CountdownTimer className="max-w-xl mx-auto" />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button
            size="lg"
            className="bg-[#50E3C2] hover:bg-[#50E3C2]/90 text-gray-900 font-semibold px-8"
            onClick={onPrimaryClick}
          >
            {primaryCTA}
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white"
            onClick={onSecondaryClick}
          >
            {secondaryCTA}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
