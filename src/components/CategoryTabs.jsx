// components/CategoryTabs.jsx
const categories = [
  "Womenswear",
  "Menswear",
  "Kidswear",
  "Beauty",
  "Hobbies",
  "Medicine",
];

export default function CategoryTabs() {
  return (
    <>
      <nav className="flex font-itim flex-wrap mx-6 my-4 px-2 py-2 rounded-full justify-around lg:gap-6 gap-2 py-3 bg-[#FBEFEF] shadow-sm">
        {categories.map((cat) => (
          <button key={cat} className="text-sm hover:text-pink-500  transition">
            {cat}
          </button>
        ))}
        <div className="flex gap-2 mt-2 cursor-pointer">
          <button className="text-sm w-full text-[#5B5353] bg-[#E5C0C0] px-4  py-2 rounded-full hover:bg-pink-300">
            Sell Items
          </button>
          <img src="cart.png" />
        </div>
      </nav>
    </>
  );
}
