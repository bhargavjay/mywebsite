import React from 'react';
import { ExternalLink, Star, Users, TrendingUp } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      name: 'TechFlow CRM',
      category: 'Customer Relationship Management',
      description: 'A comprehensive CRM solution designed to streamline sales processes, manage customer relationships, and drive revenue growth.',
      image: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg',
      features: ['Lead Management', 'Sales Pipeline', 'Analytics Dashboard', 'Mobile Access'],
      rating: 4.9,
      users: '10K+',
      growth: '+45%'
    },
    {
      name: 'DataViz Pro',
      category: 'Business Intelligence',
      description: 'Advanced data visualization and analytics platform that transforms complex data into actionable business insights.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Integration', 'Predictive Analytics'],
      rating: 4.8,
      users: '5K+',
      growth: '+32%'
    },
    {
      name: 'SecureVault',
      category: 'Cybersecurity',
      description: 'Enterprise-grade security platform that protects sensitive data and ensures compliance across your organization.',
      image: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg',
      features: ['Data Encryption', 'Access Control', 'Audit Trails', 'Compliance Reporting'],
      rating: 4.9,
      users: '2K+',
      growth: '+28%'
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our suite of innovative software products designed to solve real business challenges 
            and drive operational efficiency across industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-8">
                <div className="text-sm text-blue-600 font-medium mb-2">{product.category}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      {product.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {product.users}
                    </div>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {product.growth}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                    Try Free Demo
                  </button>
                  <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <ExternalLink className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Custom Product Development</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Need a custom software product for your specific industry or use case? 
            Our expert team can build tailored solutions that give you a competitive edge.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Discuss Your Product Idea
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;