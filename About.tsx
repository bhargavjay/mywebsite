import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To revolutionize the software industry by delivering innovative solutions that empower businesses to achieve unprecedented growth and digital transformation.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To become the most innovative software startup, recognized for our fresh approach, experienced talent, and commitment to transforming businesses through technology.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Combining startup agility with experienced expertise to deliver world-class software solutions using the latest technologies and innovative approaches.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building strong partnerships with our clients through startup flexibility, experienced guidance, and collaborative innovation that drives mutual success.'
    }
  ];

  const achievements = [
    { number: '2026', label: 'Founded' },
    { number: '15+', label: 'Expert Team Members' },
    { number: 'Global', label: 'Reach & Vision' },
    { number: '100%', label: 'Innovation Focus' }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Unique Background Pattern */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-pink-100 to-red-100 rounded-full opacity-20 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-20 animate-pulse"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About MBINFOTECHSOLUTIIONS.COM</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 2026, MBINFOTECHSOLUTIIONS.COM is an innovative software startup that brings fresh 
            perspectives to the technology industry. We combine experienced talent with startup agility to 
            deliver revolutionary software solutions that transform businesses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Startup Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              MBINFOTECHSOLUTIIONS.COM was founded in 2026 with a bold vision to revolutionize software development. 
              While we're a new company, our team consists of experienced professionals who bring decades of 
              combined expertise in cutting-edge technologies and innovative solutions.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              As a startup, we embrace agility, innovation, and rapid iteration. Our experienced team members 
              leverage their industry knowledge to create scalable, secure software solutions that position 
              businesses for future success in an ever-evolving digital landscape.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
              alt="MBINFOTECHSOLUTIIONS.COM startup office and innovative team collaboration"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <value.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Innovate with Us?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the power of startup innovation combined with experienced expertise. 
            Let's discuss how MBINFOTECHSOLUTIIONS.COM can revolutionize your business with cutting-edge software solutions.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
            Start Your Innovation Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;