import { AccountBalanceWallet, CreditCard, Dashboard, ChatSharp, BarChart, Logout, Mail } from '@mui/icons-material';
import logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <div className="w-20 bg-black h-screen p-5 flex flex-col justify-between space-y-4 rounded-full sticky top-5">
        <div className="text-white cursor-pointer p-2 rounded">
          <img src={logo} alt="Logo" />
        </div>
      <div className="flex flex-col space-y-4">
        <div className="text-white cursor-pointer p-2 rounded hover:text-green-500">
          <Dashboard />
        </div>
        <div className="text-white cursor-pointer p-2 rounded hover:text-green-500">
          <AccountBalanceWallet />
        </div>
        <div className="text-white cursor-pointer p-2 rounded hover:text-green-500">
          <ChatSharp />
        </div>
        <div className="text-white cursor-pointer p-2 rounded hover:text-green-500">
          <Mail />
        </div>
        <div className="text-white cursor-pointer p-2 rounded hover:text-green-500">
          <BarChart />
        </div>
        <div className="text-white cursor-pointer p-2 rounded hover:text-green-500">
          <CreditCard />
        </div>
      </div>
      <div className="text-white cursor-pointer p-2 rounded hover:text-green-500">
        <Logout />
      </div>
    </div>
  );
};

export default Sidebar;
