import React from 'react';
import { Download, Linkedin, Github, ExternalLink } from 'lucide-react';
export function Portfolio() {
  // Replace these with your actual data
  const profileData = {
    image: 'https://res.cloudinary.com/dnhrk9ijv/image/upload/v1764869798/WhatsApp_Image_2025-12-04_at_20.36.00_huu3tk.jpg',
    name: 'Gilton Koech',
    title: 'Software Engineer',
    cvLink: 'YOUR_CV_LINK',
    linkedIn: 'YOUR_LINKEDIN_LINK',
    github: 'https://github.com/chipukizii',
    websites: [{
      name: 'Ecommerce Store',
      url: 'https://rotichstore-2.onrender.com'
    }, {
      name: 'My High School Website',
      url: 'https://simoti-high.onrender.com'
    }, {
      name: 'Smart Pharmacy Stock Management System',
      url: 'https://smartpharmacy-management.vercel.app'
    }]
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-md mx-auto">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img src={profileData.image} alt={profileData.name} className="w-32 h-32 rounded-full object-cover ring-4 ring-gray-100" />
          </div>

          {/* Name and Title */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">
              {profileData.name}
            </h1>
            <p className="text-lg text-gray-600">{profileData.title}</p>
          </div>

          {/* CV Download Button */}
          <a href={profileData.cvLink} download className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3.5 px-6 rounded-xl font-medium transition-all duration-200 hover:bg-blue-700 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]">
            <Download className="w-5 h-5" />
            Download CV
          </a>

          {/* Social Links */}
          <div className="grid grid-cols-2 gap-3">
            <a href={profileData.linkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-[#0A66C2] text-white py-3.5 px-6 rounded-xl font-medium transition-all duration-200 hover:bg-[#004182] hover:shadow-md hover:scale-[1.02] active:scale-[0.98]">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white py-3.5 px-6 rounded-xl font-medium transition-all duration-200 hover:bg-gray-800 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          {/* Websites Section */}
          <div className="pt-4 space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 text-center">
              My Projects
            </h2>
            <div className="space-y-2">
              {profileData.websites.map((website, index) => <a key={index} href={website.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full bg-gray-50 text-gray-900 py-3.5 px-5 rounded-xl font-medium transition-all duration-200 hover:bg-gray-100 hover:shadow-sm hover:scale-[1.01] active:scale-[0.99] group">
                  <span>{website.name}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 transition-colors group-hover:text-gray-600" />
                </a>)}
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} {profileData.name}. All rights reserved.
        </p>
      </div>
    </div>;
}