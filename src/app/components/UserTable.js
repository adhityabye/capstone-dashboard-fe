"use client";

import { useRouter } from "next/navigation";

export default function UserTable() {
  const router = useRouter();

  const users = [
    {
      name: "Suprianto",
      userId: "LA-0234",
      lastModified: "30 Apr, 2017",
      dateAdded: "30 Apr, 2017",
      description: "Lorem ipsum",
    },
    {
      name: "Karnaaji",
      userId: "LA-0245",
      lastModified: "15 Jun, 2018",
      dateAdded: "10 Jun, 2018",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      name: "Devin Dewan",
      userId: "LA-0456",
      lastModified: "20 Feb, 2019",
      dateAdded: "18 Feb, 2019",
      description: "Lorem ipsum",
    },
    {
      name: "Carla",
      userId: "LA-0657",
      lastModified: "10 Jan, 2020",
      dateAdded: "08 Jan, 2020",
      description: "Lorem ipsum",
    },
  ];

  const handleEdit = (userId) => {
    router.push(`/users/${userId}`);
  };

  const handleDelete = (userId) => {
    router.push(`/users/${userId}/delete`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden my-6">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">User ID</th>
            <th className="py-3 px-6 text-left">Last Modified</th>
            <th className="py-3 px-6 text-left">Date Added</th>
            <th className="py-3 px-6 text-left">Description</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {users.map((user, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50 transition duration-150 ease-in-out"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {user.name}
              </td>
              <td className="py-3 px-6 text-left">{user.userId}</td>
              <td className="py-3 px-6 text-left">{user.lastModified}</td>
              <td className="py-3 px-6 text-left">{user.dateAdded}</td>
              <td className="py-3 px-6 text-left">{user.description}</td>
              <td className="py-3 px-6 text-center">
                <button
                  onClick={() => handleEdit(user.userId)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-150 ease-in-out"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.userId)}
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
  );
}
