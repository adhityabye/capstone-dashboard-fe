export default function UserActions() {
  return (
    <div className="mb-8">
      {/* Header and Actions */}
      <div className="flex justify-between items-center mb-4">
        {/* Title */}
        <h2 className="text-2xl font-bold text-blue-600">Users</h2>

        {/* Search Bar */}
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300"
          />
          <span className="absolute top-0 left-0 mt-2 ml-3 text-gray-400">
            🔍 {/* You can replace this with a proper search icon */}
          </span>
        </div>

        {/* Actions (Add User, Sort, Saved Search) */}
        <div className="flex items-center space-x-4">
          {/* Add User Button */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Add user +
          </button>

          {/* Sort By Dropdown */}
          <div className="flex items-center">
            <span className="mr-2 text-gray-600">Sort by</span>
            <select className="p-2 border border-gray-300 rounded-lg shadow-sm">
              <option>Last Modified</option>
              <option>Date Added</option>
            </select>
          </div>

          {/* Saved Search Dropdown */}
          <div className="flex items-center">
            <span className="mr-2 text-gray-600">Saved search</span>
            <select className="p-2 border border-gray-300 rounded-lg shadow-sm">
              <option>Search 1</option>
              <option>Search 2</option>
            </select>
          </div>

          {/* Filter Icon */}
          <button className="text-gray-600 hover:text-gray-900">
            {/* You can replace this with a proper filter icon */}
            ⚙️
          </button>
        </div>
      </div>
    </div>
  );
}
