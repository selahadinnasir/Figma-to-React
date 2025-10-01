import SearchBar from "./SearchBar";

// components/Hero.jsx
export default function Hero() {
  return (
    <section className="relative bg-gray-200 rounded-lg overflow-hidden mx-6 mt-6">
      {/* Background Image */}
      <img src="home.png" alt="Shopping girls" className="object-cover" />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex justify-center text-white bg-black bg-opacity-30">
        <div className="flex flex-col justify-center items-center w-4/5 md:w-3/4">
          <div className="w-3/5">
            <h2 className="text-lg w-full md:text-2xl text-center font-kaushan">
              Change Your wardrobe. Find exciting goods.
            </h2>
          </div>

          {/* Search */}
          {/* <div className="bg-white rounded-full shadow flex items-center px-4 py-2 w-3/4 md:w-1/2">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow text-gray-700 font-kaushan outline-none"
          />
          <button className="ml-2 text-gray-500">✖</button>
        </div> */}
          <SearchBar />

          {/* Quick Categories */}
          <div className="flex gap-3 md:gap-5 w-full ">
            {["Womenswear", "Menswear", "Kidswear", "Beauty"].map(
              (cat, index) => (
                <button
                  key={cat}
                  className={`px-2 py-2 w-full rounded-full text-sm md:text-lg ${
                    index % 2 === 0 ? "bg-[#E4D6D6]" : "bg-[#FFD9D9]"
                  } text-gray-700 font-bold shadow hover:bg-pink-100`}
                >
                  {cat}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
