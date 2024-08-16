import { SearchOutlined, NotificationsOutlined, Settings } from "@mui/icons-material";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md rounded-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-lg sm:text-xl">Overview</h1>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-200 text-black rounded-full px-4 py-2 focus:outline-none"
              />
              <button className="absolute right-2 top-2">
                <SearchOutlined className="text-gray-600" />
              </button>
            </div>
            <button className="sm:hidden p-2">
              <SearchOutlined className="text-gray-600" />
            </button>
            <button>
              <Settings />
            </button>
            <button>
              <NotificationsOutlined />
            </button>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <img
                src="https://cdn-icons-png.flaticon.com/256/4825/4825044.png"
                alt="profile"
                className="h-8"
              />
              <div className="hidden sm:block">
                <p className="flex gap-1 items-center text-sm font-thin">
                  @williamB1111
                  <span className="bg-green-500 px-2 rounded-md font-mono">Pro</span>
                </p>
                <h2 className="font-semibold">William Blake</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
