import React from 'react';
import { ArrowRight } from 'lucide-react';

const Services = ({ services, setActiveModal }) => (
  <section id="services" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">How I Can Help Your Organization</h2>
        <p className="text-xl text-gray-600">Specialized consulting services to accelerate your digital construction capabilities</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <div key={service.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <div className={`w-12 h-12 ${idx === 0 ? 'bg-blue-100 text-blue-600' : idx === 1 ? 'bg-green-100 text-green-600' : idx === 2 ? 'bg-purple-100 text-purple-600' : 'bg-orange-100 text-orange-600'} rounded-lg flex items-center justify-center mb-4`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
            <p className={`${idx === 0 ? 'text-blue-600' : idx === 1 ? 'text-green-600' : idx === 2 ? 'text-purple-600' : 'text-orange-600'} font-semibold mb-3 text-sm`}>{service.headline}</p>
            <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
            <button 
              onClick={() => setActiveModal(service)}
              className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center"
            >
              Learn More <ArrowRight className="ml-1 w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
