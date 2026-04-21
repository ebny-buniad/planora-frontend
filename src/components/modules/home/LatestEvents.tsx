import React from "react";

const events = [
  {
    id: 1,
    title: "Tech Meetup 2026",
    location: "Dhaka, Bangladesh",
    date: "May 12, 2026",
    image: "https://www.codemotion.com/magazine/wp-content/uploads/2020/04/35344608_1932760713412894_8299069717268660224_o-1024x683.jpg",
  },
  {
    id: 2,
    title: "Startup Networking Night",
    location: "Chattogram",
    date: "June 5, 2026",
    image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe",
  },
  {
    id: 3,
    title: "Design Workshop",
    location: "Khulna",
    date: "April 28, 2026",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
  },
  {
    id: 4,
    title: "Music Fest",
    location: "Sylhet",
    date: "July 18, 2026",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
  },
  {
    id: 5,
    title: "Freelancers Meetup",
    location: "Rajshahi",
    date: "May 22, 2026",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    id: 6,
    title: "AI & Future Tech Expo",
    location: "Dhaka",
    date: "August 10, 2026",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  },
];

export default function LatestEvents() {
  return (
    <section className="relative py-20 text-white bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')] bg-cover bg-center">
      
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Latest Events
          </h2>
          <p className="text-gray-300 mt-2">
            Discover what's happening around you
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="group rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 hover:scale-[1.02] transition"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-48 w-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">
                  {event.title}
                </h3>

                <p className="text-sm text-gray-300">
                  📍 {event.location}
                </p>

                <p className="text-sm text-gray-400">
                  📅 {event.date}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}