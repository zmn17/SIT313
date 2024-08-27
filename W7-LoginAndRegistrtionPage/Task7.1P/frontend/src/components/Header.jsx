import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/firebase";
const Header = () => {
  const navigateToLogin = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigateToLogin("/login");
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

  return (
    <div className="flex items-center justify-between h-8 px-4 pt-8">
      <h1 className="text-2xl font-bold text-primary font-poppins">
        &lt;/DEV@Deakin&gt;
      </h1>
      <div className="flex-grow: 1">
        <input
          type="text"
          placeholder="🔍  Search"
          className="w-full px-3 py-1 text-white bg-transparent border border-gray-400 max-w-[40rem] rounded-md search-shadow font-poppins focus:outline-none"
        />
      </div>
      <div className="flex justify-between gap-5">
        <button className="text-xl cursor-pointer font-poppins text-primary">
          &#123;Post&#125;
        </button>
        <button
          onClick={handleLogout}
          className="px-5 py-[.2rem] bg-red-600 hover:border hover:border-[#45ae00] transition-colors duration-300 ease-in-out hover:bg-transparent cursor-pointer text-md text-white rounded-md font-poppins"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
