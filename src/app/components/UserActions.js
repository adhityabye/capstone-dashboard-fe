import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline"; // Corrected imports

export default function UserActions() {
  return (
    <div className="mb-8 bg-white p-6 rounded-xl shadow-md">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-gray-800">Users</h2>

        <div className="relative w-full lg:w-1/3 mt-4 lg:mt-0">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-12 pr-4 py-2 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300"
          />
          <span className="absolute top-0 left-0 mt-2 ml-4 text-gray-400">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </span>
        </div>

        <div className="flex flex-wrap items-center space-x-4 mt-4 lg:mt-0">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
            Add user +
          </button>

          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Sort by</span>
            <select className="p-2 border border-gray-300 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Last Modified</option>
              <option>Date Added</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Saved search</span>
            <select className="p-2 border border-gray-300 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Search 1</option>
              <option>Search 2</option>
            </select>
          </div>

          <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out">
            <AdjustmentsHorizontalIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
