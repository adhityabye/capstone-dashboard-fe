"use client"; // Ensure this component is marked as client-side
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter hook
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function UserActions() {
  const router = useRouter(); // Initialize router instance
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchOngoingUsers = async () => {
      try {
        const response = await fetch(
          "https://capstone-dashboard-be.vercel.app/api/billings"
        );
        const data = await response.json();

        // Filter billings with 'ongoing' status
        const ongoingUsers = data
          .filter((billing) => billing.status === "ongoing")
          .map((billing) => billing.user_id);

        // Count unique users by filtering out duplicate user IDs
        const uniqueUserCount = new Set(ongoingUsers).size;
        setUserCount(uniqueUserCount);
      } catch (error) {
        console.error("Error fetching ongoing users count:", error);
      }
    };

    fetchOngoingUsers();
  }, []);

  const handleAddUser = () => {
    router.push("/users/add"); 
  };

  return (
    <div className="mb-10 bg-white p-6 rounded-xl shadow-md">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <div className="">
          <p className="text-xl font-bold text-gray-800">Current User</p>
          <h2 className="text-3xl font-bold pt-2 text-gray-600">{userCount}</h2>
        </div>

        <div className="flex flex-wrap items-center space-x-4 mt-4 lg:mt-0">
          <button
            onClick={handleAddUser}
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Add user +
          </button>

          <div className="relative w-full lg:w-64">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-12 pr-4 py-2 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300"
            />
            <span className="absolute top-0 left-0 mt-2 ml-4 text-gray-400">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
