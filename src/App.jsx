import React, { useState } from 'react';
import { ChevronDown, Mail, Phone, MapPin, CheckCircle, Users, Award, Zap, ArrowRight } from 'lucide-react';

const BraedeeConsulting = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Simple mailto fallback for now
    const subject = encodeURIComponent('BIM Consulting Inquiry from ' + formData.name);
    const body = encodeURIComponent(`Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Message: ${formData.message}`);
    window.location.href = `mailto:braedee@braedee.how?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600">braedee.how</div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Get Started</a>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Construction Projects with 
              <span className="text-blue-600"> Expert BIM Consulting</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Leading digital transformation for Melbourne's major infrastructure projects. 
              Proven expertise in ISO19650, model amalgamation, and advanced VDC implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                Start Your Digital Transformation <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#experience" className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                View My Experience
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-600">Trusted by teams on Melbourne's largest infrastructure projects</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
            <div className="text-gray-500">
              <div className="font-semibold">Level Crossing Removal</div>
              <div className="text-sm">Digital Engineering Lead</div>
            </div>
            <div className="text-gray-500">
              <div className="font-semibold">Melbourne Airport Rail</div>
              <div className="text-sm">BIM Coordination</div>
            </div>
            <div className="text-gray-500">
              <div className="font-semibold">North East Link</div>
              <div className="text-sm">VDC Implementation</div>
            </div>
            <div className="text-gray-500">
              <div className="font-semibold">Autodesk University</div>
              <div className="text-sm">Featured Presenter</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How I Can Help Your Organization</h2>
            <p className="text-xl text-gray-600">Specialized consulting services to accelerate your digital construction capabilities</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ISO19650 Implementation</h3>
              <p className="text-gray-600 mb-6">Fast-track your compliance with proven methodologies. Typically 2-4 weeks, not months.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Custom BIM execution plans</li>
                <li>• Staff training & change management</li>
                <li>• Compliance auditing & certification</li>
                <li>• Ongoing support through first project</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Transformation</h3>
              <p className="text-gray-600 mb-6">Maximize efficiency and minimize risk with advanced BIM and VDC capabilities.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• CDE optimization & workflows</li>
                <li>• Model amalgamation strategies</li>
                <li>• 4D/5D implementation</li>
                <li>• Custom automation development</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Training & Upskilling</h3>
              <p className="text-gray-600 mb-6">Transform your team's capabilities with hands-on training that actually sticks.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Executive briefings on ROI</li>
                <li>• Team workshops & software training</li>
                <li>• Custom learning curricula</li>
                <li>• Advanced Autodesk & Bentley instruction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Results from Tier-1 Projects</h2>
            <p className="text-xl text-gray-600">Real outcomes from Melbourne's most complex infrastructure projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Major Infrastructure Coordination</h3>
                  <p className="text-gray-600 mb-2">Multi-discipline coordination across 15+ consultants with complex geometric interfaces</p>
                  <p className="text-blue-600 font-semibold">Result: 65% reduction in coordination RFIs, 3-week schedule improvement</p>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">ISO19650 Fast-Track Implementation</h3>
                  <p className="text-gray-600 mb-2">Mid-tier contractor requiring compliance for major project bid</p>
                  <p className="text-green-600 font-semibold">Result: Successful $45M project award, now standard across organization</p>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Workflow Automation Development</h3>
                  <p className="text-gray-600 mb-2">Custom automation tools for drawing production and quality checking</p>
                  <p className="text-purple-600 font-semibold">Result: 40% reduction in drawing production time, improved consistency</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
              <div className="text-center">
                <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Recognition</h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Featured presenter at Autodesk University</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Speaker at Bentley Innovation Market</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Lead Digital Engineer on Tier-1 projects</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Expert in model amalgamation & metadata</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Digital Capabilities?</h2>
            <p className="text-xl text-gray-300">Let's discuss your project needs and goals</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span>braedee@braedee.how</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span>Available for consultation calls</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span>Melbourne, Australia (on-site visits available)</span>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="font-bold mb-3">Consultation Process:</h4>
                <div className="space-y-2 text-gray-300">
                  <div>1. <span className="font-semibold text-white">Free 30-minute consultation</span> to understand your needs</div>
                  <div>2. <span className="font-semibold text-white">Detailed proposal</span> within 48 hours</div>
                  <div>3. <span className="font-semibold text-white">Rapid implementation</span> with clear milestones</div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-xl text-gray-900">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Start the Conversation</h3>
                <div className="space-y-4">
                  <div>
                    <div className="block text-sm font-medium mb-2">Name *</div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <div className="block text-sm font-medium mb-2">Email *</div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <div className="block text-sm font-medium mb-2">Company</div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <div className="block text-sm font-medium mb-2">What's your biggest digital construction challenge?</div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Tell me about your project needs, timeline, or specific challenges..."
                    ></textarea>
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold text-white mb-2">braedee.how</div>
          <p>BIM & Digital Construction Consulting • Melbourne, Australia</p>
        </div>
      </footer>
    </div>
  );
};

export default BraedeeConsulting;