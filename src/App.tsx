import { useState } from "react";

const cameras = [
  {
    id: 1,
    name: "Front Gate",
    location: "Main Entrance",
    status: "Online",
    recording: true,
  },
  {
    id: 2,
    name: "Parking Lot",
    location: "Outdoor Area",
    status: "Online",
    recording: true,
  },
  {
    id: 3,
    name: "Living Room",
    location: "Ground Floor",
    status: "Offline",
    recording: false,
  },
  {
    id: 4,
    name: "Back Door",
    location: "Rear Entrance",
    status: "Online",
    recording: false,
  },
];

function App() {
  const [filter, setFilter] = useState("All");

  const filteredCameras = cameras.filter(
    (camera) => filter === "All" || camera.status === filter,
  );

  return (
    <main className="min-h-screen bg-[#101114] p-5 text-white md:p-10">
      <nav className="mb-10 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Cam<span className="text-blue-400">Track.</span>
        </h1>
        <span className="rounded-full border border-white/10 px-4 py-2 text-sm">
          Camera Dashboard
        </span>
      </nav>

      <section className="mb-8">
        <p className="mb-2 text-sm text-gray-400">YOUR SECURITY OVERVIEW</p>
        <h2 className="text-3xl font-bold md:text-4xl">Camera Monitoring</h2>
        <p className="mt-2 text-gray-400">
          Keep track of your cameras in one place.
        </p>
      </section>
      {/* cards */}
      <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { label: "Total Cameras", value: cameras.length },
          {
            label: "Online",
            value: cameras.filter((camera) => camera.status === "Online")
              .length,
          },
          {
            label: "Offline",
            value: cameras.filter((camera) => camera.status === "Offline")
              .length,
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-[#191a20] p-5"
          >
            <p className="text-sm text-gray-400">{item.label}</p>
            <h3 className="mt-3 text-3xl font-semibold">{item.value}</h3>
          </div>
        ))}
      </section>

      <section>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xl font-semibold">My Cameras</h2>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-lg border border-white/10 bg-[#191a20] px-4 py-2 text-sm outline-none"
          >
            <option value="All">All cameras</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCameras.map((camera) => (
            <div
              key={camera.id}
              className="rounded-2xl border border-white/10 bg-[#191a20] p-5 transition hover:border-blue-400/50"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400/10 text-2xl">
                  📹
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs ${
                    camera.status === "Online"
                      ? "bg-green-400/10 text-green-400"
                      : "bg-red-400/10 text-red-400"
                  }`}
                >
                  {camera.status}
                </span>
              </div>

              <h3 className="text-lg font-semibold">{camera.name}</h3>
              <p className="mt-1 text-sm text-gray-400">{camera.location}</p>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                <span className="text-gray-400">Recording</span>
                <span
                  className={
                    camera.recording ? "text-green-400" : "text-gray-500"
                  }
                >
                  {camera.recording ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-12 border-t border-white/10 pt-5 text-center text-sm text-gray-500">
        CamTrack. · Camera management made simple.
      </footer>
    </main>
  );
}

export default App;
