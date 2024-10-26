"use client"; // Mark as client-side component

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SideBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [{ name: "Overview", path: "/" }];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block lg:hidden p-4 text-gray-500 focus:outline-none"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:relative transform lg:transform-none transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 top-0 left-0 w-48 bg-gray-50 shadow-xl h-full z-50 lg:w-1/6 lg:min-h-screen p-4`}
      >
        <div className="text-2xl font-bold text-gray-800 mb-10">Capstone</div>

        <nav>
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path}>
                  <div
                    className={`flex items-center space-x-3 cursor-pointer text-lg p-4 rounded-lg transition-all duration-300 ease-in-out ${
                      pathname === item.path
                        ? "bg-blue-500 text-white shadow-lg"
                        : "text-gray-600 hover:bg-gray-100 hover:text-blue-500"
                    }`}
                  >
                    {/* Heroicons SVG for the Sidebar Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                    <span>{item.name}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
