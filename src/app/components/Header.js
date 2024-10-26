export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 mb-10 bg-white shadow-sm rounded-xl px-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Hallo Admin</h1>
        <p className="text-sm text-gray-500 pt-2">Have a nice day</p>
      </div>

      <div className="flex items-center space-x-6">
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
