import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-md text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
        <p className="text-gray-700 mb-6">
          Your consultation request has been received.  
          I’ll get back to you shortly to confirm a time.
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ThankYou;
