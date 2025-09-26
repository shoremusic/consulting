import React from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

const Modal = ({ service, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
              {service.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              <p className="text-blue-600 font-semibold">{service.headline}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.fullDescription}</p>

        <div className="mb-6">
          <h4 className="font-bold text-gray-900 mb-3">What's Included:</h4>
          <ul className="space-y-2">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-800 mb-3">Ready to get started with {service.title.toLowerCase()}?</p>
          <a href="#contact" onClick={onClose} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center">
            Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
