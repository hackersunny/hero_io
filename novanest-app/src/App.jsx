// import { useState } from "react";
// import "./App.css";

// export default function App() {
//   const [installedApps, setInstalledApps] = useState([
//     { id: 1, name: "Focus Flow for Productivity" },
//     { id: 2, name: "Smart Task Manager" },
//   ]);

//   const apps = new Array(12).fill(0).map((_, i) => ({
//     id: i,
//     name: `App ${i + 1}`,
//   }));

//   return (
//     <div className="min-h-screen bg-base-200">
//       <Navbar />
//       <Hero />
//       <Stats />
//       <Trending apps={apps} />
//       <Dashboard installedApps={installedApps} />
//     </div>
//   );
// }

// function Navbar() {
//   return (
//     <div className="navbar bg-base-100 shadow-md px-6 py-3">
//       <div className="flex-1 flex items-center gap-3">
//         <a href="#" className="flex items-center gap-2">
//           <img 
//             src="./assets/hero.png" 
//             alt="HERO.IO Logo" 
//             className="h-8 w-8" 
//           />
//           <span className="text-xl font-bold text-primary">HERO.IO</span>
//         </a>
//       </div>

//       <div className="flex gap-8 text-sm font-medium">
//         <a href="#" className="hover:text-primary transition-colors">Home</a>
//         <a href="#" className="hover:text-primary transition-colors">Apps</a>
//         <a href="#" className="hover:text-primary transition-colors">Installation</a>
//       </div>

//       <div className="flex-none ml-10">
//         <a 
//           href="#" 
//           className="btn bg-[#6B46C1] hover:bg-[#5A3AA6] text-white border-none gap-2 px-6 normal-case"
//         >
//           <GitHubIcon className="w-5 h-5" />
//           Contribute
//         </a>
//       </div>
//     </div>
//   );
// }

// // GitHub Icon
// function GitHubIcon({ className }) {
//   return (
//     <svg 
//       xmlns="http://www.w3.org/2000/svg" 
//       viewBox="0 0 24 24" 
//       fill="currentColor" 
//       className={className}
//     >
//       <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577 0-.285-.01-1.044-.015-2.049-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.652 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
//     </svg>
//   );
// }

// function Hero() {
//   return (
//     <div className="bg-slate-50 text-white py-16 md:py-20 overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="flex flex-col items-center gap-12">

//           {/* Left Side - Text Content (Centered on all screens) */}
//           <div className="text-center max-w-lg">
//             <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//               We Build <span className="text-yellow-300">Productive Apps</span>
//             </h1>
//             <p className="py-6 text-lg text-[#6B46C1] opacity-90">
//               A PRODUCTIVITY SUITE FOR THE MODERN WORLD. 
//               Get your work done faster and more efficiently with our apps.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="btn btn-lg border-purple-400 text-[#6B46C1] hover:bg-gray-100 font-semibold">
//                 Google Play
//               </button>
//               <button className="btn btn-lg border-2 border-purple-400 text-[#6B46C1] hover:bg-white/10">
//                 App Store
//               </button>
//             </div>
//           </div>

//           {/* Right Side - Mobile Mockup with Floating Icons (Centered) */}
//           <div className="relative flex justify-center mt-6">
//             {/* Floating Icons around the phone */}
//             <div className="absolute -top-6 -left-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 animate-float">
//               ✅
//             </div>
//             <div className="absolute -top-10 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 animate-float animation-delay-300">
//               ▶️
//             </div>
//             <div className="absolute -bottom-6 -right-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 animate-float animation-delay-600">
//               💬
//             </div>
//             <div className="absolute bottom-8 -left-12 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 animate-float animation-delay-900">
//               📊
//             </div>

//             {/* Mobile Mockup */}
//             <div className="relative w-full max-w-xs">
//               <img 
//                 src="./assets/hero.png" 
//                 alt="Mobile App Preview"
//                 className="w-full rounded-3xl shadow-2xl border-8 border-white/30"
//               />
//               {/* Optional shine effect */}
//               <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent rounded-3xl pointer-events-none"></div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// function Stats() {
//   return (
//     <div className="bg-[#6B46C1] text-white py-12">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold">Trusted By Millions, Built For You</h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8">
//           <Stat number="29.6M" label="Total Downloads" />
//           <Stat number="906K" label="Active Users" />
//           <Stat number="132+" label="Apps Published" />
//         </div>
//       </div>
//     </div>
//   );
// }

// function Stat({ number, label }) {
//   return (
//     <div>
//       <div className="text-5xl font-bold mb-2">{number}</div>
//       <div className="text-lg opacity-90">{label}</div>
//     </div>
//   );
// }

// function Trending({ apps }) {
//   return (
//     <div className="p-8 max-w-6xl mx-auto">
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-bold">Trending Apps</h2>
//         <p className="text-gray-600">Explore trending apps on the market. Developed by us.</p>
//       </div>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {apps.map((app) => (
//           <div key={app.id} className="card bg-base-100 shadow hover:shadow-xl transition">
//             <div className="h-48 bg-gray-200 rounded-t-2xl"></div>
//             <div className="p-4">
//               <div className="font-medium">{app.name}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function Dashboard({ installedApps }) {
//   return (
//     <div className="p-8 bg-base-100">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6">Your Installed Apps</h2>
//         <div className="space-y-4">
//           {installedApps.map((app) => (
//             <div
//               key={app.id}
//               className="flex justify-between items-center bg-white p-5 rounded-2xl shadow"
//             >
//               <span className="font-medium">{app.name}</span>
//               <button className="btn btn-success btn-sm">Launch</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// 
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  const [installedApps] = useState([
    { id: 1, name: "Focus Flow for Productivity" },
    { id: 2, name: "Smart Task Manager" },
  ]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-base-200">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<AllApps />} />
            <Route path="/installed" element={<Installed installedApps={installedApps} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

// ====================== NAVBAR ======================
function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-6 py-4">
      <div className="flex-1 flex items-center gap-3">
        <Link to="/" className="flex items-center gap-2">
          <img src="./assets/hero.png" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-primary">HERO.IO</span>
        </Link>
      </div>

      <div className="flex gap-8 text-sm font-medium">
        <Link to="/" className="hover:text-primary">Home</Link>
        <Link to="/apps" className="hover:text-primary">Apps</Link>
        <Link to="/installed" className="hover:text-primary">Installed</Link>
      </div>

      <div className="flex-none ml-10">
        <a href="#" className="btn bg-[#6B46C1] hover:bg-[#5A3AA6] text-white gap-2 px-6 normal-case">
          Contribute
        </a>
      </div>
    </div>
  );
}

// ====================== HOME PAGE ======================
function Home() {
  const trendingApps = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `App ${i + 1}`,
  }));

  return (
    <>
      <Hero />
      <Stats />
      <Trending apps={trendingApps} />
    </>
  );
}

// ====================== HERO ======================

function Hero() {
  return (
    <div className="bg-linear-to-br from-[#6B46C1] to-[#4C1D95] text-white py-16 md:py-20 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-12">

          {/* Text Content */}
          <div className="text-center max-w-lg">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              We Build <span className="text-yellow-300">Productive Apps</span>
            </h1>
            <p className="py-6 text-lg opacity-90">
              A PRODUCTIVITY SUITE FOR THE MODERN WORLD.<br />
              Get your work done faster and more efficiently with our apps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-lg bg-white text-[#6B46C1] hover:bg-gray-100">Google Play</button>
              <button className="btn btn-lg border-2 border-white text-white hover:bg-white/10">App Store</button>
            </div>
          </div>

          {/* Mobile Mockup with Floating Icons */}
          <div className="relative flex justify-center">
            
            {/* Floating Icons */}
            <div className="absolute -top-8 -left-10 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 animate-float">
              ✅
            </div>
            <div className="absolute -top-12 right-6 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 animate-float animation-delay-300">
              ⏰
            </div>
            <div className="absolute -bottom-8 -right-12 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 animate-float animation-delay-600">
              💬
            </div>
            <div className="absolute bottom-10 -left-14 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 animate-float animation-delay-900">
              📊
            </div>

            {/* Mobile Phone Mockup */}
            <div className="relative w-full max-w-xs">
              <img 
                src="./assets/hero.png" 
                alt="Mobile App Preview"
                className="w-full rounded-3xl shadow-2xl border-8 border-white/30"
              />
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent rounded-3xl pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ====================== STATS ======================
function Stats() {
  return (
    <div className="bg-[#6B46C1] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Trusted By Millions, Built For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div><div className="text-5xl font-bold">29.6M</div><div className="text-sm mt-2">DOWNLOADS</div></div>
          <div><div className="text-5xl font-bold">906K</div><div className="text-sm mt-2">ACTIVE USERS</div></div>
          <div><div className="text-5xl font-bold">132+</div><div className="text-sm mt-2">APPS</div></div>
        </div>
      </div>
    </div>
  );
}

// ====================== TRENDING ======================
function Trending({ apps }) {
  return (
    <div className="p-8 max-w-6xl mx-auto bg-white">
      <h2 className="text-3xl font-bold text-center mb-2">Trending Apps</h2>
      <p className="text-center text-gray-500 mb-8">Explore All Trending Apps on the Market developed by us</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {apps.map((app) => (
          <div key={app.id} className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition text-center">
            <div className="h-40 bg-linear-to-br from-purple-100 to-indigo-100 rounded-2xl mb-4 flex items-center justify-center text-6xl">
              📱
            </div>
            <p className="font-medium">{app.name}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link to="/apps" className="btn bg-[#6B46C1] hover:bg-[#5A3AA6] text-white px-8">
          Show all
        </Link>
      </div>
    </div>
  );
}

// ====================== ALL APPS ======================
function AllApps() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-3">Our All Applications</h1>
      <p className="text-center text-gray-500 mb-10">A PRODUCTIVITY SUITE FOR THE MODERN WORLD</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="bg-white rounded-3xl p-6 shadow hover:shadow-xl transition text-center">
            <div className="h-40 bg-linear-to-br from-purple-100 to-indigo-100 rounded-2xl mb-4 flex items-center justify-center text-6xl">
              📱
            </div>
            <h3 className="font-semibold">App {i + 1}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

// ====================== INSTALLED ======================
function Installed({ installedApps }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Your Installed Apps</h1>
      <div className="space-y-4">
        {installedApps.map((app) => (
          <div key={app.id} className="bg-white p-6 rounded-3xl shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{app.name}</h3>
              <p className="text-sm text-gray-500">Installed • Last used today</p>
            </div>
            <button className="btn btn-success">Launch</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ====================== 404 ======================
function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center text-center">
      <div>
        <div className="text-8xl mb-6">😿</div>
        <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-3">Oops, page not found</h2>
        <p className="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary btn-lg">Go Back Home</Link>
      </div>
    </div>
  );
}

// ====================== FOOTER ======================
function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-700 pb-8">
          <div className="flex items-center gap-3">
            <img src="./assets/hero.png" alt="HERO.IO" className="h-8 w-8" />
            <span className="text-xl font-bold">HERO.IO</span>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Social Links</p>
            <div className="flex gap-6 text-2xl">
              <a href="#" className="hover:text-purple-400">𝕏</a>
              <a href="#" className="hover:text-purple-400">📸</a>
              <a href="#" className="hover:text-purple-400">𝕗</a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm mt-8">
          Copyright © 2025 - All right reserved
        </div>
      </div>
    </footer>
  );
}