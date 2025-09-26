import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => (
  <section className="pt-16 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
        Transform Your Projects with <span className="text-blue-600">Smarter Digital Strategies</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
        Helping AEC organizations achieve ISO19650 compliance, streamline BIM workflows, and deliver measurable ROI through digital innovation.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
          Book a Free 30-Minute Consultation <ArrowRight className="ml-2 w-5 h-5" />
        </a>
        <a href="#experience" className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center">
          <Download className="mr-2 w-5 h-5" /> Free ISO19650 Checklist
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
