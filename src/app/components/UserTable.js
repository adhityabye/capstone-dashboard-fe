export default function UserTable() {
  return (
    <div className="bg-white shadow-md rounded-lg my-6">
      <table className="min-w-max w-full table-auto">
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
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-left whitespace-nowrap">Suprianto</td>
            <td className="py-3 px-6 text-left">LA-0234</td>
            <td className="py-3 px-6 text-left">Lorem ipsum</td>
            <td className="py-3 px-6 text-left">30 Apr, 2017</td>
            <td className="py-3 px-6 text-left">Lorem ipsum</td>
            <td className="py-3 px-6 text-center">
              <button className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600">
                Edit
              </button>
              <button className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 ml-4">
                Delete
              </button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}
