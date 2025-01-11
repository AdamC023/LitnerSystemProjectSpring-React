import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navbar() {
    return (
        <nav className="bg-lightBlue p-4 flex shadow-md">
            {/* Flex container for both Litner System and Modules */}
            <div className="flex items-center space-x-4">
                {/* Link for Litner System */}
                <Link to="/" className="text-white font-sans text-3xl font-bold">
                    Litner System
                </Link>

                {/* Link for Modules with slight margin top */}
                <Link to="/modules" className="text-white font-sans text-xl mt-2">
                    Modules
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;