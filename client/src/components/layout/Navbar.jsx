function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md">
      <h1 className="text-2xl font-bold text-indigo-600">
        InterviewIQ AI
      </h1>

      <div className="flex gap-4">
        <button className="px-5 py-2 text-gray-700 hover:text-indigo-600 transition">
          Login
        </button>

        <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;