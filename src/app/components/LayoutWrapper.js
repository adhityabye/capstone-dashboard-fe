"use client";

import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Side from "./Side";

export default function LayoutWrapper({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {isAuthenticated && <Side />}
      <div className="flex-grow">
        <div className="min-h-screen bg-[#EFF2F9]">
          <div className="p-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
