"use client";

import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-between items-center py-4 mb-10 bg-white shadow-sm rounded-xl px-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Hallo Admin</h1>
        <p className="text-sm text-gray-500 pt-2">Have a nice day</p>
      </div>

      <div className="flex items-center space-x-6">
        <div className="h-6 w-px bg-gray-300"></div>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full"
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            <div className="bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center">
              <span className="text-gray-500">A</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold text-gray-800">Admin</span>
              <span className="text-xs text-gray-500">Admin</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                isOpen ? "transform rotate-180" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
