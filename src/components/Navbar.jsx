import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-green-900 shadow-lg flex items-center justify-around py-3 px-32 fixed top-0 left-0 w-full z-50">
            <Link to="/">
            <span className="font-semibold text-lg flex items-center gap-3 text text-blue-400">
                <img src="/logo.png" className="text-6xl" />
                <span className="font-semibold text-2x1">UnderFarm</span>
            </span>
            </Link>

            <div className="flex items-center gap-5 text-black">
            <Link to="/" className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-lg hover:bg-green-700 transition duration-300">
                Home
            </Link>

            <Link to="/account" className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-lg hover:bg-green-700 transition duration-300">
                Account
            </Link>

            <Link to="/helpers" className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-lg hover:bg-green-700 transition duration-300">
                Helpers
            </Link>

            <Link to="/settings" className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-lg hover:bg-green-700 transition duration-300">
                Settings
            </Link>
            </div>
        </nav>
    )
}

export default Navbar