// navbar component
import Button from "../../ui/button";

interface NavBarProps {
    logo?: string;
    onRegisterClick?: () => void;
}

const NavBar = ({
    logo = "",
    onRegisterClick = () => { },
}: NavBarProps) => {
    return (
        <nav className="fixed top-0 left-0 right-0 h-[72px] bg-white border-b border-gray-200 z-50 px-6">
            <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="h-8 w-8" />
                    <span className="text-xl font-semibold text-gray-900">Hackathon</span>
                </div>

                <div className="flex items-center space-x-4">
                    {/* About */}
                    <Button variant="ghost" className="text-gray-600 hover:text-gray-900">About</Button>
                    <Button variant="ghost" className="text-gray-600 hover:text-gray-900">Categories</Button>
                    <Button variant="default" className="bg-[#4A90E2] hover:bg-[#4A90E2]/90 text-white" onClick={onRegisterClick}>Register Now</Button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;