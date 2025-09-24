import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-400" />
        </div>

        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg text-gray-300 mb-8">
          Your consultation request has been successfully submitted.  
          I'll be in touch shortly — usually within <span className="font-semibold">2 hours</span>.
        </p>

        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Back to Home
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default ThankYou;
