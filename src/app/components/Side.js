"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Overview", path: "/overview" },
    { name: "Billing", path: "/billing" },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-white rounded-md shadow-md text-gray-500 focus:outline-none"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      <aside
        className={`fixed lg:sticky top-0 left-0 w-64 bg-white shadow-xl z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        style={{ height: "100vh", overflowY: "auto" }}
      >
        <div className="p-6">
          <div className="text-2xl font-bold text-black mb-10">Capstone</div>
          <nav>
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.path}>
                    <div
                      className={`flex items-center space-x-3 cursor-pointer text-lg p-4 rounded-lg transition-all duration-300 ease-in-out ${
                        pathname === item.path
                          ? "bg-blue-500 text-white shadow-lg"
                          : "text-gray-400 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <span>{item.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
