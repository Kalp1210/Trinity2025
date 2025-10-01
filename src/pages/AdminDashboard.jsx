import React, { useState, useEffect } from "react";
import bgImage from "/SponsorImages/GeminBGImg.png"; // same background as leaderboard

function AdminDashboard() {
  // ------------------ SCORE MANAGEMENT ------------------
  const [team, setTeam] = useState("Devadatta");
  const [score, setScore] = useState("");
  const [scores, setScores] = useState({});

  const teams = ["Devadatta", "Vasuki", "Mayura", "Airavata", "Garuda", "Simha"];

  useEffect(() => {
    fetch("http://127.0.0.1:5000/scores")
      .then((res) => res.json())
      .then((data) => setScores(data))
      .catch((err) => console.error("Error fetching scores", err));
  }, []);

  const handleScoreSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:5000/update-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: team, score: Number(score) }),
      });
      const data = await res.json();
      alert(data.message || "Score updated!");
      setScores(data.scores);
      setScore("");
    } catch (err) {
      console.error("Error updating score", err);
    }
  };

  // ------------------ ANNOUNCEMENTS MANAGEMENT ------------------
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Cultural Night",
      description: "Join us for dance, drama and music on Day 2!",
      startDate: "2025-10-05",
      time: "7:00 PM",
    },
    {
      id: 2,
      title: "Sports Finals",
      description: "Cheer for your favorite team in the finals.",
      startDate: "2025-10-06",
      time: "4:00 PM",
    },
    {
      id: 3,
      title: "Tech Expo",
      description: "Explore student innovations and projects.",
      startDate: "2025-10-07",
      time: "10:00 AM",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [time, setTime] = useState("");

  const handleAnnouncementSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      setAnnouncements(
        announcements.map((a) =>
          a.id === editId ? { ...a, title, description, startDate, time } : a
        )
      );
    } else {
      const newAnnouncement = {
        id: announcements.length + 1,
        title,
        description,
        startDate,
        time,
      };
      setAnnouncements([...announcements, newAnnouncement]);
    }

    setTitle("");
    setDescription("");
    setStartDate("");
    setTime("");
    setShowForm(false);
    setEditId(null);
  };

  const handleEdit = (a) => {
    setEditId(a.id);
    setTitle(a.title);
    setDescription(a.description);
    setStartDate(a.startDate);
    setTime(a.time);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setAnnouncements(announcements.filter((a) => a.id !== id));
  };

  // ------------------ UI ------------------
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center p-8 space-y-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Heading */}
      <h1
        className="text-5xl text-[#dbab6a] italic mb-4"
        style={{ fontFamily: "'Great Vibes', cursive" }}
      >
        Admin Dashboard
      </h1>

      {/* ------------------ TEAM SCORES ------------------ */}
      <section className="w-full flex flex-col items-center space-y-8">
        <h2 className="text-3xl text-white/90 italic">Manage Team Scores</h2>

        <form
          onSubmit={handleScoreSubmit}
          className="bg-black/60 backdrop-blur-lg border border-[#dbab6a]/40 
                     p-8 rounded-2xl shadow-2xl w-[90%] max-w-md flex flex-col gap-6"
        >
          <label className="flex flex-col text-[#dbab6a] text-lg font-semibold">
            Select Team
            <select
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              className="mt-2 p-3 bg-gray-900 border border-[#dbab6a]/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#dbab6a]"
            >
              {teams.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col text-[#dbab6a] text-lg font-semibold">
            New Score
            <input
              type="number"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              className="mt-2 p-3 bg-transparent border border-[#dbab6a]/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#dbab6a]"
              placeholder="Enter score..."
            />
          </label>

          <button
            type="submit"
            className="mt-4 bg-[#dbab6a] text-black font-bold py-3 rounded-lg hover:brightness-110 hover:shadow-lg transition-all"
          >
            Update Score
          </button>
        </form>

        <div className="bg-black/70 backdrop-blur-md border border-[#dbab6a]/40 rounded-2xl shadow-lg p-6 w-[90%] max-w-2xl">
          <h3 className="text-3xl text-[#dbab6a] mb-6 text-center">Current Scores</h3>
          <div className="grid grid-cols-2 gap-4 text-white">
            {teams.map((t) => (
              <div
                key={t}
                className="flex justify-between px-4 py-3 bg-gray-800/60 rounded-lg"
              >
                <span className="font-semibold">{t}</span>
                <span className="text-[#dbab6a] font-bold">
                  {scores[t] !== undefined ? scores[t] : 0}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------ ANNOUNCEMENTS ------------------ */}
      <section className="w-full flex flex-col items-center space-y-8">
        <h2 className="text-3xl text-white/90 italic">Manage Announcements</h2>

        {/* Existing Announcements */}
        <div className="w-full max-w-5xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {announcements.map((a) => (
            <div
              key={a.id}
              className="bg-black/70 border border-[#dbab6a]/40 p-6 rounded-xl shadow-lg text-white transition hover:scale-105 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl text-[#dbab6a] font-bold mb-2">{a.title}</h3>
                <p className="text-sm mb-2">{a.description}</p>
                <p className="text-xs text-gray-400">
                  {a.startDate} • {a.time}
                </p>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleEdit(a)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(a.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add / Edit Form */}
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#dbab6a] text-black font-bold py-3 px-6 rounded-lg hover:brightness-110 hover:shadow-lg transition-all"
          >
            ➕ Add New Announcement
          </button>
        )}

        {showForm && (
          <form
            onSubmit={handleAnnouncementSubmit}
            className="bg-black/60 backdrop-blur-lg border border-[#dbab6a]/40 
                       p-8 rounded-2xl shadow-2xl w-[90%] max-w-lg flex flex-col gap-6"
          >
            <label className="flex flex-col text-[#dbab6a] text-lg font-semibold">
              Title
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-2 p-3 bg-transparent border border-[#dbab6a]/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#dbab6a]"
                placeholder="Enter title..."
              />
            </label>

            <label className="flex flex-col text-[#dbab6a] text-lg font-semibold">
              Description
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-2 p-3 bg-transparent border border-[#dbab6a]/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#dbab6a]"
                placeholder="Enter description..."
              />
            </label>

            <div className="grid grid-cols-2 gap-4">
              <label className="flex flex-col text-[#dbab6a] text-lg font-semibold">
                Start Date
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="mt-2 p-3 bg-transparent border border-[#dbab6a]/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#dbab6a]"
                />
              </label>

              <label className="flex flex-col text-[#dbab6a] text-lg font-semibold">
                Time
                <input
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="mt-2 p-3 bg-transparent border border-[#dbab6a]/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#dbab6a]"
                  placeholder="e.g. 7:00 PM"
                />
              </label>
            </div>

            <div className="flex justify-between gap-4">
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditId(null);
                  setTitle("");
                  setDescription("");
                  setStartDate("");
                  setTime("");
                }}
                className="bg-gray-600 text-white font-bold py-2 px-6 rounded-lg hover:brightness-110 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#dbab6a] text-black font-bold py-2 px-6 rounded-lg hover:brightness-110 transition-all"
              >
                {editId ? "Update" : "Save"}
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}

export default AdminDashboard;