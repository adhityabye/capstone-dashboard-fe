"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline"; // Import Chevron Up Down Icon

export default function UserTable() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://capstone-dashboard-be.vercel.app/api/users"
        );
        if (!response.ok) throw new Error("Failed to fetch user data");
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (userId) => {
    setIsNavigating(true);
    setTimeout(() => router.push(`/users/${userId}`), 1000);
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(
        `https://capstone-dashboard-be.vercel.app/api/users/${userId}`,
        { method: "DELETE" }
      );

      if (!response.ok) throw new Error("Failed to delete user");

      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));

      toast.success("User deleted successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete user", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sortedUsers = [...users].sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });

    setUsers(sortedUsers);
  };

  if (error) return <p>{error}</p>;

  return (
    <div className="relative">
      <ToastContainer />
      <div className={`transition-all ${isNavigating ? "blur-sm" : ""}`}>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden my-6">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                {["name", "email", "address", "age"].map((key) => (
                  <th
                    key={key}
                    className="py-3 px-6 text-left cursor-pointer"
                    onClick={() => handleSort(key)}
                  >
                    <div className="flex items-center">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                      <ChevronUpDownIcon className="w-4 h-4 ml-1 opacity-70" />
                    </div>
                  </th>
                ))}
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition duration-150 ease-in-out"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {user.name}
                  </td>
                  <td className="py-3 px-6 text-left">{user.email}</td>
                  <td className="py-3 px-6 text-left">{user.address}</td>
                  <td className="py-3 px-6 text-left">{user.age}</td>
                  <td className="py-3 px-6 text-center">
                    <button
                      onClick={() => handleEdit(user._id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-150 ease-in-out"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-150 ease-in-out ml-4"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isNavigating && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
}
