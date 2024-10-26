"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

export default function UserTable() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);

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

      // Show Toast Notification
      toast.success("User deleted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete user", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  if (error) return <p>{error}</p>;

  return (
    <div className="relative">
      <ToastContainer /> {/* Toastify Container */}
      <div className={`transition-all ${isNavigating ? "blur-sm" : ""}`}>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden my-6">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Address</th>
                <th className="py-3 px-6 text-left">Age</th>
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
