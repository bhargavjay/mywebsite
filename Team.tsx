import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Team: React.FC = () => {
  const leadership = [
    {
      name: 'Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with 15+ years in tech, driving innovation and strategic growth.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Expert architect specializing in scalable systems and emerging technologies.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      social: { linkedin: '#', github: '#' }
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Product',
      bio: 'Product strategist focused on user-centered design and market-driven solutions.',
      image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'David Kim',
      role: 'Head of Engineering',
      bio: 'Technical leader passionate about code quality and development best practices.',
      image: 'https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg',
      social: { linkedin: '#', github: '#' }
    }
  ];

  const stats = [
    { label: 'Team Members', value: '15+' },
    { label: 'Company Experience', value: 'New' },
    { label: 'Individual Expertise', value: '10+ Years' },
    { label: 'Innovation Focus', value: '100%' }
  ];

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      {/* Creative Background */}
      <div className="absolute inset-0 bg-gray-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full mix-blend-multiply filter blur-2xl animate-pulse animation-delay-3000"></div>
        </div>
        {/* Network Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-1/4 left-1/3 w-8 h-8 text-blue-600 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
          <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our dynamic startup team combines fresh innovation with experienced expertise. While MBINFOTECHSOLUTIIONS.COM 
            is new, our team members bring decades of individual experience in software development and technology innovation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {leadership.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                
                <div className="flex space-x-3">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="text-gray-400 hover:text-gray-900 transition-colors">
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're a growing startup looking for talented individuals who share our passion for innovation 
            and cutting-edge technology. Join us in revolutionizing the software industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Join Our Startup
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
              Startup Culture
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;