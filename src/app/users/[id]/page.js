"use client";

import { useRouter, useParams } from "next/navigation"; // Import useParams
import { useEffect, useState } from "react";
import Header from "../../components/Header";

export default function EditUser() {
  const router = useRouter();
  const { id } = useParams(); // Get the user ID from the route parameters
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
    age: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data from the API to populate the form
  useEffect(() => {
    if (!id) return;

    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://capstone-dashboard-be.vercel.app/api/users/${id}`
        );
        if (!response.ok) throw new Error("Failed to fetch user data");
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `https://capstone-dashboard-be.vercel.app/api/users/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) throw new Error("Failed to update user data");

      router.push("/");
    } catch (err) {
      console.error(err);
      setError("Error updating user data.");
    }
  };

  if (error) return <p>{error}</p>;

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="p-10">
        <Header className="p-10" />
        <div className="bg-white p-8 rounded-lg shadow-md w-full mt-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-6">
            Edit User Data
          </h2>

          <div className="mb-4">
            <label className="text-sm font-medium text-gray-600 mb-2 block">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="w-full text-gray-600 border border-gray-300 p-3 rounded-md text-sm"
              placeholder="Full Name"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm font-medium text-gray-600 mb-2 block">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full text-gray-600 border border-gray-300 p-3 rounded-md text-sm"
              placeholder="Email Address"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm font-medium text-gray-600 mb-2 block">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleChange}
              className="w-full text-gray-600 border border-gray-300 p-3 rounded-md text-sm"
              placeholder="Address"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm font-medium text-gray-600 mb-2 block">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={userData.age}
              onChange={handleChange}
              className="w-full text-gray-600 border border-gray-300 p-3 rounded-md text-sm"
              placeholder="Age"
            />
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={() => router.push("/users")}
              className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
            >
              ← Back
            </button>
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white text-sm px-6 py-2 rounded-md hover:bg-blue-600 shadow-md"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
