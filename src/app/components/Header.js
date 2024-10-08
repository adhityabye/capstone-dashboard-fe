export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 mb-8 bg-white shadow-sm rounded-xl px-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Hello, Admin</h1>
        <p className="text-gray-500">Have a nice day</p>
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative">
          <button className="relative text-gray-600 hover:text-gray-900 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118.5 15h-6a2.032 2.032 0 01-1.095.595L10 17h5M9 5a7 7 0 017 7v1h-2a3 3 0 00-6 0H7v-1a7 7 0 017-7z"
              />
            </svg>
            <span className="absolute top-0 right-0 block h-2 w-2 bg-blue-500 rounded-full"></span>
          </button>
        </div>

        <div className="h-6 w-px bg-gray-300"></div>

        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center">
            <span className="text-gray-500">A</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-800">Admin</span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
