import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Topbar */}
      <div className="bg-gray-900 text-white p-4 flex items-center justify-between md:hidden">
        <h1 className="text-lg font-bold">DSA Exhibition</h1>
        <button onClick={toggleSidebar}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-gray-900 text-white p-6 transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:block`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between md:justify-center mb-8">
          <h1 className="text-2xl font-bold hidden md:block">DSA Exhibition</h1>
          <button
            onClick={toggleSidebar}
            className="md:hidden text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-4 text-lg">
          <Link
            to="/"
            className="hover:bg-gray-800 p-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/arrays"
            className="hover:bg-gray-800 p-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            Arrays
          </Link>
          <Link
            to="/strings"
            className="hover:bg-gray-800 p-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            Strings
          </Link>
        </nav>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
