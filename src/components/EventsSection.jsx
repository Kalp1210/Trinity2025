// import React from 'react';
// import EventCard from './EventCard';
// import parchmentBg from '../assets/sponsorBackground.png';
// import websiteBg from '/backgroundImage.png';



// const EventsSection = () => {
//   return (
//     <section className="py-16 px-6 md:px-20" style={{ backgroundImage: `url(${websiteBg})`, backgroundSize: 'cover' }}>
//       {/* Category Cards - Non-clickable */}
//       <div className="grid md:grid-cols-3 gap-8 mb-16">
//         {Object.keys(eventsByCategory).map((category) => (
//           <div
//             key={category}
//             className="parchment-card text-center p-6 rounded-lg relative"
//             style={{
//               backgroundImage: `url(${parchmentBg})`,
//               backgroundSize: 'cover',
//               minHeight: '200px',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//             }}
//           >
//             <h3
//               className="text-3xl md:text-5xl font-bold mb-2"
//               style={{ fontFamily: 'Circe Contrast', fontSize: '43.5px', color: '#f3cf9b' }}
//             >
//               {category} Events
//             </h3>
//             <p
//               className="text-sm"
//               style={{ fontFamily: 'Circe Contrast', fontSize: '16.1px', color: '#f3cf9b' }}
//             >
//               {category === 'Cultural' && 'Dance, Drama, Music & More'}
//               {category === 'Technical' && 'Turn Ideas into Reality'}
//               {category === 'Sports' && 'Dare to Dominate'}
//             </p>
//             <div className="absolute bottom-4 right-4">
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="#f3cf9b"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M5 12h14M12 5l7 7-7 7" />
//               </svg>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Cultural Events Section */}
//       <div className="mb-20">
//         <div className="text-center mb-12">
//           <h2
//             className="text-3xl md:text-5xl font-bold mb-4"
//             style={{ fontFamily: 'Circe Contrast', fontSize: '43.5px', color: '#f3cf9b' }}
//           >
//             Cultural Events
//           </h2>
//           <p
//             className="text-base"
//             style={{ fontFamily: 'Circe Contrast', fontSize: '16.1px', color: '#f3cf9b' }}
//           >
//             Dance, Drama, Music & More
//           </p>
//         </div>
//         <div className="text-center mb-8">
//           <p className="text-white text-sm max-w-4xl mx-auto">
//             After a remarkable journey of creativity and cultural celebration, we're back with even more! Our cultural events have been a testament to the immense talent, passion, and diversity of our community. With each passing year, we've seen incredible performances, unforgettable experiences, and a legacy that continues to inspire. Join us once again to celebrate art, music, dance, and all that makes us unique!
//           </p>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {eventsByCategory.Cultural.map((event, index) => (
//             <EventCard key={index} event={event} style={{ backgroundColor: '#3e4a50' }} />
//           ))}
//         </div>
//       </div>

//       {/* Technical Events Section */}
//       <div className="mb-20">
//         <div className="text-center mb-12">
//           <h2
//             className="text-3xl md:text-5xl font-bold mb-4"
//             style={{ fontFamily: 'Circe Contrast', fontSize: '43.5px', color: '#f3cf9b' }}
//           >
//             Technical Events
//           </h2>
//           <p
//             className="text-base"
//             style={{ fontFamily: 'Circe Contrast', fontSize: '16.1px', color: '#f3cf9b' }}
//           >
//             Turn Ideas into Reality
//           </p>
//         </div>
//         <div className="text-center mb-8">
//           <p className="text-white text-sm max-w-4xl mx-auto">
//             Innovation meets execution in our technical showcase. From coding marathons to robotics challenges, push the boundaries of technology and creativity. Join fellow tech enthusiasts to solve real-world problems, showcase your skills, and be part of cutting-edge developments.
//           </p>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {eventsByCategory.Technical.map((event, index) => (
//             <EventCard key={index} event={event} style={{ backgroundColor: '#3e4a50' }} />
//           ))}
//         </div>
//       </div>

//       {/* Sports Events Section */}
//       <div className="mb-20">
//         <div className="text-center mb-12">
//           <h2
//             className="text-3xl md:text-5xl font-bold mb-4"
//             style={{ fontFamily: 'Circe Contrast', fontSize: '43.5px', color: '#f3cf9b' }}
//           >
//             Sports Events
//           </h2>
//           <p
//             className="text-base"
//             style={{ fontFamily: 'Circe Contrast', fontSize: '16.1px', color: '#f3cf9b' }}
//           >
//             Dare to Dominate
//           </p>
//         </div>
//         <div className="text-center mb-8">
//           <p className="text-white text-sm max-w-4xl mx-auto">
//             Get ready for adrenaline-pumping action and fierce competition. Our sports events bring together the spirit of teamwork, endurance, and excellence. Whether you're a seasoned athlete or a passionate supporter, come experience the thrill of victory and the joy of participation.
//           </p>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {eventsByCategory.Sports.map((event, index) => (
//             <EventCard key={index} event={event} style={{ backgroundColor: '#3e4a50' }} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventsSection;


import React from "react";
import { Link } from "react-router-dom";
import parchmentBg from "../assets/sponsorBackground.png";
import websiteBg from "/backgroundImage.png";
import eventsByCategory from "../data/eventsByCategory";

const EventsSection = () => {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center px-6 md:px-20"
      style={{
        backgroundImage: `url(${websiteBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Category Cards - Centered */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {Object.keys(eventsByCategory).map((category) => (
          <Link
            key={category}
            to={`/events/${category}`}
            className="parchment-card text-center p-6 rounded-lg relative hover:scale-105 transition-transform"
            style={{
              backgroundImage: `url(${parchmentBg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              minHeight: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3
              className="text-3xl md:text-5xl font-bold mb-2"
              style={{
                fontFamily: "Circe Contrast",
                fontSize: "43.5px",
                color: "#f3cf9b",
              }}
            >
              {category} Events
            </h3>
            <p
              className="text-sm"
              style={{
                fontFamily: "Circe Contrast",
                fontSize: "16.1px",
                color: "#f3cf9b",
              }}
            >
              {category === "Cultural" && "Dance, Drama, Music & More"}
              {category === "Technical" && "Turn Ideas into Reality"}
              {category === "Sports" && "Dare to Dominate"}
            </p>
            <div className="absolute bottom-4 right-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f3cf9b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;