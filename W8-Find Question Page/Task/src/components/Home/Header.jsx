import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-16 px-4 bg-black">
      <Link to="/" className="text-2xl font-bold text-primary font-poppins">
        &lt;/DEV@Deakin&gt;
      </Link>
      <div className="flex-grow mx-4">
        <input
          type="text"
          placeholder="🔍  Search"
          className="w-full px-3 py-1 text-white bg-transparent border border-gray-400 max-w-[40rem] rounded-md search-shadow font-poppins focus:outline-none"
        />
      </div>
      <div className="flex gap-5">
        <Link
          to="/post"
          className="text-xl cursor-pointer font-poppins text-primary"
        >
          &#123;Post&#125;
        </Link>

        <Link
          to="/find-questions"
          className="text-xl cursor-pointer font-poppins text-secondary"
        >
          Find Questions
        </Link>
        <button className="px-5 py-[.2rem] bg-blue-500 hover:border hover:border-[#45ae00] transition-colors duration-300 ease-in-out hover:bg-transparent cursor-pointer text-md text-white rounded-md font-poppins">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
