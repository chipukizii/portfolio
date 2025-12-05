import React, { useState, useRef, useEffect } from 'react';
import { Download, Linkedin, Github, ExternalLink, Menu, Info, User, Briefcase } from 'lucide-react';

export function Portfolio() {
  const [openMenu, setOpenMenu] = useState(false);
  const [selected, setSelected] = useState(null);
  const menuRef = useRef(null);
  const popupRef = useRef(null);

  const profileData = {
    image: 'https://res.cloudinary.com/dnhrk9ijv/image/upload/v1764869798/WhatsApp_Image_2025-12-04_at_20.36.00_huu3tk.jpg',
    name: 'Gilton Koech',
    title: 'Software Engineer',
    cvLink: 'YOUR_CV_LINK',
    linkedIn: 'https://www.linkedin.com/in/gilton-koech-8263b7365',
    github: 'https://github.com/chipukizii',
    websites: [
      { name: 'Ecommerce Store', url: 'https://rotichstore-2.onrender.com' },
      { name: 'My High School Website', url: 'https://simoti-high.onrender.com' },
      { name: 'SmartPharmacy Stock Management System', url: 'https://smartpharmacy-management.vercel.app' }
    ]
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if ((menuRef.current && !menuRef.current.contains(e.target)) && (popupRef.current && !popupRef.current.contains(e.target))) {
        setOpenMenu(false);
        setSelected(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleSelect = (name) => {
    setSelected(name);
    setOpenMenu(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 relative">
      {/* TOP HAMBURGER MENU */}
      <div className="fixed top-6 right-6 z-50" ref={menuRef}>
        <button onClick={() => setOpenMenu(s => !s)} className="p-3 bg-white shadow-lg rounded-xl hover:bg-gray-100 transition">
          <Menu className="w-7 h-7 text-gray-800" />
        </button>
        {openMenu && (
          <div className="absolute right-0 mt-3 bg-white w-48 shadow-xl rounded-xl p-3 space-y-2">
            <div onClick={() => handleSelect('about')} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <Info className="w-5 h-5 text-gray-600" /> About
            </div>
            <div onClick={() => handleSelect('profile')} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <User className="w-5 h-5 text-gray-600" /> Profile
            </div>
            <div onClick={() => handleSelect('projects')} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <Briefcase className="w-5 h-5 text-gray-600" /> Projects
            </div>
          </div>
        )}
      </div>

      {/* CONTENT POPUP */}
      {selected && (
        <div ref={popupRef} className="fixed top-24 right-6 bg-white w-72 shadow-2xl rounded-xl p-5 z-40">
          <button className="text-gray-600 mb-3" onClick={() => setSelected(null)}>Close ×</button>
          {selected === 'about' && (
            <div>
              <h2 className="text-2xl font-bold mb-2">About Me</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                I’m a full-stack developer who enjoys turning ideas into reliable, fast, and user-friendly applications.
                I work with Django, React, TailwindCSS, TypeScript, and Flask to build clean interfaces and strong backend systems.
                I love solving real problems, improving performance, and delivering solutions that feel simple and smooth for users.
              </p>
              <br />
              <p className="text-gray-600 text-sm leading-relaxed">
                I enjoy taking projects from concept to production, always aiming for clean code, good architecture, and real impact.
                My focus is to create solutions that businesses can rely on.
              </p>
            </div>
          )}
          {selected === 'profile' && (
            <div>
              <h2 className="text-2xl font-bold mb-2">Profile</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                I specialize in building complete web applications—from responsive frontends to secure backend APIs.
                I work with React, TypeScript, and TailwindCSS on the frontend, and Django, DRF, and Flask on the backend.
              </p>
              <br />
              <p className="text-gray-600 text-sm leading-relaxed">
                My strengths include UI/UX implementation, optimized database design, reusable components, and deploying apps
                on platforms like Vercel, Render, and Railway. I aim to create software that is efficient, reliable, and enjoyable to use.
              </p>
            </div>
          )}
          {selected === 'projects' && (
            <div>
              <h2 className="text-xl font-bold mb-3">Quick Projects</h2>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>✔ Ecommerce Store</li>
                <li>✔ High School Website</li>
                <li>✔ Smart Pharmacy System</li>
              </ul>
            </div>
          )}
        </div>
      )}

      {/* WHATSAPP BUTTON */}
      <a href="https://wa.me/254111823630" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 left-6 bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-xl hover:bg-green-600 hover:scale-110 transition z-50">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-8 h-8" alt="whatsapp" />
      </a>

      {/* MAIN CONTENT */}
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div className="flex justify-center">
            <img src={profileData.image} alt={profileData.name} className="w-32 h-32 rounded-full object-cover ring-4 ring-gray-100" />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">{profileData.name}</h1>
            <p className="text-lg text-gray-600">{profileData.title}</p>
          </div>
          <a href={profileData.cvLink} download className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 hover:scale-105 transition">
            <Download className="w-5 h-5" /> Download CV
          </a>
          <div className="grid grid-cols-2 gap-3">
            <a href={profileData.linkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#0A66C2] text-white py-3 rounded-xl hover:bg-[#004182] hover:scale-105 transition">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 hover:scale-105 transition">
              <Github className="w-5 h-5" /> GitHub
            </a>
          </div>
          <div className="pt-4 space-y-2">
            <h2 className="text-xl font-semibold text-gray-900 text-center">My Projects</h2>
            {profileData.websites.map((website, index) => (
              <a key={index} href={website.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-gray-50 p-4 rounded-xl hover:bg-gray-100 hover:scale-105 transition">
                <span>{website.name}</span>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>
            ))}
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
      </div>
    </div>
  );
}
