// components/RecentList.jsx
import React from "react";

const recentItems = [
  "list1.png",
  "list2.png",
  "list3.png",
  "list4.png",
  "list1.png",
  "list2.png",
];

export default function RecentList() {
  return (
    <section className="mt-10 px-6">
      <h3 className="text-lg font-kaushan mb-4">List Recently,</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {recentItems.map((src, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden shadow hover:scale-105 transition"
          >
            <img
              src={src}
              alt={`recent-${i}`}
              className="w-full h-40 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
