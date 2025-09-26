import React, { useState } from 'react';
import { Mail, Clock, MapPin, Target, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState({ loading: false, error: null });
  const [showModal, setShowModal] = useState(false);

  // Regex for Australian phone numbers (landline, mobile, or +61 format)
  const phoneRegex = /^(\+?61|0)[2-478](\d{8}|\d{2}\s?\d{6}|\d{3}\s?\d{5})$/;

  /** Handle input field changes */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /** Validate that either email OR phone is provided */
  const validateContactFields = () => {
    if (!formData.email && !formData.phone) {
      return 'Please provide either an Email or a Phone number.';
    }
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      return 'Please enter a valid Australian phone number (mobile, landline, or +61 format).';
    }
    return null;
  };

  /** Handle form submit using fetch to prevent reload */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateContactFields();
    if (validationError) {
      setStatus({ loading: false, error: validationError });
      return;
    }

    setStatus({ loading: true, error: null });

    try {
      const encoded = new URLSearchParams({
        'form-name': 'contact',
        ...formData,
      }).toString();

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded,
      });

      if (response.ok) {
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setStatus({ loading: false, error: null });
        setShowModal(true); // Show thank-you modal
      } else {
        throw new Error('Network response was not OK');
      }
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        error: 'Something went wrong. Please try again later.',
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Start Your Digital Transformation</h2>
          <p className="text-xl text-gray-300">
            Book your free 30-minute consultation today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT: Info Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-blue-400" />
                <span>mail@braedee.how</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-blue-400" />
                <span>Free 30-minute consultation available</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-blue-400" />
                <span>Melbourne, Australia (remote & on-site available)</span>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-bold mb-3 flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-400" />
                What We'll Cover:
              </h4>
              <div className="space-y-2 text-gray-300">
                <div>✓ Your current digital challenges and goals</div>
                <div>✓ Quick-win opportunities for immediate impact</div>
                <div>✓ Strategic roadmap for long-term transformation</div>
                <div>✓ Next steps and investment options</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div>
            <form
              name="contact"
              method="POST"
              action="/thank-you" // Fallback redirect for JS-disabled users
              data-netlify="true"
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-xl text-gray-900 shadow-lg"
            >
              {/* Netlify hidden field */}
              <input type="hidden" name="form-name" value="contact" />

              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Book Your Free Consultation
              </h3>

              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent border-gray-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g., you@company.com"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent border-gray-300"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g., 0400 123 456 or +61 400 123 456"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent border-gray-300"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Australian or international (+61) formats accepted
                  </p>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    What's your biggest digital challenge? *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent border-gray-300"
                    placeholder="e.g., Need ISO19650 compliance, struggling with fragmented BIM workflows..."
                  ></textarea>
                </div>
              </div>

              {/* Error Message */}
              {status.error && (
                <p className="mt-3 text-red-600 text-sm text-center">{status.error}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.loading}
                className={`w-full mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center transition-colors ${
                  status.loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {status.loading ? 'Sending...' : 'Book Free Consultation'}
                {!status.loading && <ArrowRight className="ml-2 w-5 h-5" />}
              </button>

              <p className="text-xs text-gray-500 mt-2 text-center">
                No commitment required • Typically responds within 2 hours
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* THANK-YOU MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-md mx-auto text-center relative shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
              <p className="text-gray-600">
                Your consultation request has been received. I’ll get back to you shortly to confirm a time.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
