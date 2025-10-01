import React from "react";
import sponsorBackground from "/SponsorImages/sponsorBackground.png";

const Anoucenment = () => {
  // 🔹 Example announcements object
  const announcements = [
    { id: 1, title: "Cultural Night", description: "Join us for dance, drama and music on Day 2!" },
    { id: 2, title: "Sports Finals", description: "Cheer for your favorite team in the finals." },
    { id: 3, title: "Tech Expo", description: "Explore student innovations and projects." },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-[#dbab6a]">Announcements</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {announcements.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-xl shadow-lg border border-white/10 bg-gray-900/70 
                       transition-all duration-500 ease-in-out 
                       hover:text-black hover:shadow-2xl cursor-pointer"
            style={{
              backgroundImage: "none",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundImage = `url(${sponsorBackground})`)
            }
            onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = "none")}
          >
            <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>
            <p className="text-sm opacity-80">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anoucenment;