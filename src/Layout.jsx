import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { routes } from "@/utils/routes";

const Layout = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  if (location.pathname === "/") {
    return (
      <Routes>
        {/* Replace with actual Login component if you have */}
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    );
  }

  const MobileTopbar = () => (
    <div className="bg-gray-900 text-white p-4 flex items-center justify-between md:hidden">
      <h1 className="text-lg font-bold">DSA Exhibition</h1>
      <button onClick={toggleSidebar}>
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>
  );

  const AppSidebar = () => (
    <>
      <div
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-gray-900 text-white p-6 transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:block`}
      >
        <div className="flex items-center justify-between md:justify-center mb-8">
          <h1 className="text-2xl font-bold hidden md:block">DSA Exhibition</h1>
          <button
            onClick={toggleSidebar}
            className="md:hidden text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col space-y-4 text-lg">
          {routes
            .filter(route => route.label) // only show routes with label
            .map((route, index) => (
              <Link
                key={index}
                to={route.path}
                className={`block p-2 rounded hover:bg-gray-800 ${
                  location.pathname.startsWith(route.path) ? "bg-gray-700" : ""
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                {route.label}
              </Link>
            ))}
        </nav>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <MobileTopbar />
      <AppSidebar />
      <div className="flex flex-col flex-1">
        {/* Optional Header */}
        {/* <Header /> */}
        <main className={`flex-1 overflow-auto bg-gray-50 ${isMobile ? "p-2" : "p-6"}`}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Layout;
