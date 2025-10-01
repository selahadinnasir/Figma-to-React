// components/Navbar.jsx

export default function Navbar() {
  return (
    <header className="bg-[#F2E7E7] shadow-sm px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-jacques font-bold tracking-wide">
        Sellerlist
      </h1>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        <button className="text-sm border rounded-full px-4 py-1 bg-[#E2CFCF] hover:bg-gray-200">
          sign up
        </button>
        <button className="text-sm text-[#5B5353] border rounded-full px-4 py-1 bg-[#E5C0C0] hover:bg-gray-100">
          Log in
        </button>
      </div>
    </header>
  );
}
