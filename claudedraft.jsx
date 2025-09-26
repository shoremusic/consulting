import React, { useState } from 'react';
import { Mail, MapPin, CheckCircle, Users, Award, Zap, ArrowRight, X, Menu, Download, Clock, Target, TrendingUp, AlertCircle } from 'lucide-react';

const BraedeeConsulting = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Create mailto link
    const subject = encodeURIComponent('Digital Transformation Consultation - ' + formData.name);
    const body = encodeURIComponent(`Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Challenge: ${formData.message}

Sent from braedee.how consultation form`);
    
    const mailtoLink = `mailto:braedee@braedee.how?subject=${subject}&body=${body}`;
    
    // Use window.open instead of window.location.href to avoid navigation
    const mailWindow = window.open(mailtoLink);
    
    // If window.open fails (popup blocked), fall back to location
    if (!mailWindow) {
      window.location.href = mailtoLink;
    }
    
    // Reset form and show success message
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', company: '', message: '' });
      alert('Email client opened! If it didn\'t open automatically, please email braedee@braedee.how directly.');
    }, 1000);
  };

  const services = [
    {
      id: 'iso-compliance',
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'ISO19650 Compliance & Audit Readiness',
      headline: 'Achieve Global Standards. Unlock Smarter Project Delivery.',
      description: 'Essential for winning bids and meeting client expectations. Fast-track compliance in 2-4 weeks.',
      fullDescription: 'ISO19650 compliance is no longer optional—it\'s essential for winning bids, ensuring consistent data management, and meeting client expectations. I guide your team step-by-step to establish the policies, workflows, and digital structures needed to achieve full compliance while reducing project risk and boosting operational efficiency.',
      benefits: [
        { title: 'Win Bigger Contracts', description: 'Many government and tier-1 projects now require ISO19650 compliance for participation.' },
        { title: 'Reduce Risk & Rework', description: 'Standardised processes mean fewer errors, miscommunications, and costly rework.' },
        { title: 'Future-Proof Your Business', description: 'Build a scalable, structured approach to digital project delivery.' }
      ],
      deliverables: [
        { title: 'Gap Analysis', details: 'Assess your current workflows, documentation, and tools against ISO19650 requirements.' },
        { title: 'Roadmap & Action Plan', details: 'Step-by-step plan to close gaps, with milestones and responsibilities.' },
        { title: 'Template Pack', details: 'Customised templates for management plans, metadata standards, and digital requirements documents.' },
        { title: 'Training & Upskilling', details: 'On-site or remote training sessions for your team.' },
        { title: 'Audit Preparation', details: 'Mock audits and coaching to ensure readiness for formal certification.' }
      ],
      process: [
        'Free Consultation (30 min) – Identify current challenges, risks, and compliance gaps.',
        'Implementation Phase (2–6 weeks) – Document creation, workflow setup, and staff training.',
        'Audit Simulation & Final Handover – Conduct a full run-through to guarantee confidence before certification.'
      ],
      price: 'from $4,000 AUD',
      examples: [
        { situation: 'Contractor needs to meet ISO 19650 to qualify for a new tender', solution: 'Full implementation and quick-start documentation pack' },
        { situation: 'Government project requires ISO 19650-compliant digital delivery', solution: 'Project setup, metadata standards, and model management systems' }
      ]
    },
    {
      id: 'automation-integration',
      icon: <Zap className="w-6 h-6" />,
      title: 'Automation & System Integrations',
      headline: 'Connect Your Systems. Automate Your Workflows. Eliminate Bottlenecks.',
      description: 'Save hundreds of hours monthly by connecting systems and automating manual tasks.',
      fullDescription: 'Many construction and infrastructure teams waste hundreds of hours every month on repetitive manual tasks and disconnected data workflows. I design custom automation and integrations that connect your CDEs, software platforms, and field data into one seamless ecosystem, reducing errors and unlocking productivity gains.',
      benefits: [
        { title: 'Save Time & Resources', description: 'Eliminate repetitive, low-value tasks so your team can focus on delivery.' },
        { title: 'Reduce Human Error', description: 'Automations reduce risk by enforcing consistency and standards automatically.' },
        { title: 'Connect the Entire Project', description: 'Link data between systems for real-time visibility and decision-making.' }
      ],
      deliverables: [
        { title: 'Integration Design', details: 'Identify key workflows and systems to connect (e.g., CDE ↔ Revit ↔ SharePoint ↔ Power BI).' },
        { title: 'Custom Scripts & Tools', details: 'Dynamo, Python, FME, or bespoke apps for project-specific automation.' },
        { title: 'Data Pipelines', details: 'ETL pipelines to extract, transform, and load project data between platforms.' },
        { title: 'IoT Connectivity', details: 'Link site sensors, GPS trackers, and field data directly into your digital models.' },
        { title: 'Workflow Automation', details: 'Automatic reporting, dashboard updates, and quality checks.' },
        { title: 'Documentation & Training', details: 'Clear guides and knowledge transfer so your team can maintain the solutions.' }
      ],
      process: [
        'Discovery Workshop (Free) – Understand your current bottlenecks and manual processes.',
        'Workflow Mapping & Proposal (1 week) – Identify opportunities for automation and system integration.',
        'Build & Implement (2–4 weeks) – Develop, test, and deploy custom tools or pipelines.',
        'Training & Support – Ensure your team has full confidence to use and maintain the new workflows.'
      ],
      price: 'from $2,000 AUD',
      examples: [
        { situation: 'Manually exporting Revit schedules to Excel weekly', solution: 'Automated sync between Revit and SharePoint' },
        { situation: 'CDE metadata doesn\'t match project BIM standards', solution: 'Python script to auto-tag files and enforce naming compliance' },
        { situation: 'Management needs live KPIs but dashboards are outdated', solution: 'Real-time Power BI dashboards connected to CDE' }
      ]
    },
    {
      id: 'bim-maturity',
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'BIM Maturity Assessments & Digital Capability Reviews',
      headline: 'Know Where You Stand. Build the Digital Foundation to Grow.',
      description: 'Get a clear picture of your digital maturity with actionable roadmaps for improvement.',
      fullDescription: 'You can\'t improve what you can\'t measure. My BIM maturity assessments give you a clear picture of where your organization or project currently sits on the digital spectrum, where the gaps are, and exactly what steps to take to reach higher BIM capability levels. This isn\'t just theory — it\'s a practical roadmap to ISO19650 compliance, improved workflows, and measurable project ROI.',
      benefits: [
        { title: 'Clear Benchmarking', description: 'Understand your current digital strengths and weaknesses.' },
        { title: 'Actionable Roadmap', description: 'Get specific, prioritized recommendations to achieve your goals.' },
        { title: 'Reduced Risk', description: 'Identify compliance and data issues before they impact projects.' }
      ],
      deliverables: [
        { title: 'Digital Capability Survey', details: 'Staff interviews, workflow analysis, and technology audit.' },
        { title: 'Standards Review', details: 'Assessment against ISO19650, VDAS, NATSPEC, ABAB, or project-specific requirements.' },
        { title: 'Maturity Scorecard', details: 'Visual breakdown across key areas: Process, People, Technology, and Data.' },
        { title: 'Gap Analysis Report', details: 'Identify weaknesses and their potential project impacts.' },
        { title: 'Implementation Roadmap', details: 'Step-by-step plan to move up the BIM maturity ladder.' }
      ],
      process: [
        'Initial Discovery (Free) – Short consultation to understand your context and goals.',
        'Data Gathering & Interviews (1–2 weeks) – Collect information from teams, software, and current documentation.',
        'Analysis & Reporting (1 week) – Deliver a clear report with scores, risks, and recommendations.',
        'Strategy Workshop (Optional) – Facilitate a workshop with leadership to align on the roadmap.'
      ],
      price: 'from $3,500 AUD',
      examples: [
        { situation: 'Mid-tier contractor unsure if they can deliver a BIM-compliant project', solution: 'Full capability review, identify gaps, create a 90-day improvement plan' },
        { situation: 'Executive team wants ROI clarity on digital investments', solution: 'Dashboards and metrics showing improvement potential' }
      ]
    },
    {
      id: 'training-upskilling',
      icon: <Users className="w-6 h-6" />,
      title: 'BIM Training & Capability Development',
      headline: 'Empower Your Team to Embrace Change',
      description: 'Transform your team\'s capabilities with hands-on training that actually sticks.',
      fullDescription: 'Digital adoption succeeds when teams feel confident. I design and deliver tailored training programs to bridge skill gaps, boost buy-in, and ensure long-term success for your digital transformation initiatives. From BIM fundamentals to advanced automation, training is available in multiple formats to suit your team\'s needs.',
      benefits: [
        { title: 'Accelerated Adoption', description: 'Teams become confident with new tools and processes faster.' },
        { title: 'Reduced Resistance', description: 'Proper training eliminates fear and builds enthusiasm for digital change.' },
        { title: 'Sustained Success', description: 'Long-term capability building ensures ongoing digital maturity growth.' }
      ],
      deliverables: [
        { title: 'BIM Fundamentals', details: 'Intro to BIM/VDAS, ISO19650 compliance, and digital delivery workflows.' },
        { title: 'Advanced Software Training', details: 'Revit, Civil3D, Navisworks, Synchro, and CDE administration.' },
        { title: 'Automation Skills', details: 'Data automation with Dynamo, FME, and AI/ML in construction.' },
        { title: 'Custom Curricula', details: 'Tailored learning paths for your specific project needs and software stack.' },
        { title: 'Flexible Delivery', details: 'Virtual or in-person, group workshops, 1-on-1 coaching, or self-paced materials.' }
      ],
      process: [
        'Skills Assessment – Evaluate current team capabilities and identify knowledge gaps.',
        'Custom Curriculum Design – Develop training program aligned to your goals and timeline.',
        'Training Delivery – Execute workshops, coaching sessions, or structured learning programs.',
        'Knowledge Transfer & Support – Ensure lasting retention with ongoing support and resources.'
      ],
      price: 'from $1,200 AUD',
      examples: [
        { situation: 'Team struggling with new ISO19650 requirements', solution: 'Comprehensive compliance training with hands-on workflow practice' },
        { situation: 'Junior staff need advanced BIM skills quickly', solution: 'Intensive software training with project-specific exercises' }
      ]
    }
  ];

  const painPoints = [
    'Our BIM workflows are messy, slow, and lead to costly rework.',
    'We need ISO19650 compliance but don\'t know where to start.',
    'Our teams are resistant to change — technology isn\'t sticking.'
  ];

  const Modal = ({ service, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                {service.icon}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-blue-600 font-semibold text-lg">{service.headline}</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">{service.fullDescription}</p>
          
          {/* Benefits Section */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Why This Matters</h4>
            <div className="grid md:grid-cols-3 gap-4">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-bold text-blue-900 mb-2">{benefit.title}</h5>
                  <p className="text-blue-800 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">What's Included</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {service.deliverables.map((deliverable, idx) => (
                <div key={idx} className="border border-gray-200 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">{deliverable.title}</h5>
                      <p className="text-gray-600 text-sm">{deliverable.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Process</h4>
            <div className="space-y-3">
              {service.process.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Example Scenarios */}
          {service.examples && (
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Example Scenarios</h4>
              <div className="space-y-4">
                {service.examples.map((example, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Situation:</h5>
                        <p className="text-gray-700 text-sm">{example.situation}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Solution:</h5>
                        <p className="text-blue-700 text-sm font-medium">{example.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pricing and CTA */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-lg font-bold text-blue-900">Investment: {service.price}</p>
                <p className="text-sm text-blue-700">Free consultation included</p>
              </div>
              <div className="flex space-x-3">
                <a href="#contact" onClick={onClose} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center font-semibold">
                  Book Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <button onClick={onClose} className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Free Consultation Banner */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm">
        <strong>Limited Time:</strong> Free 30-minute digital transformation consultation — book your slot this month!
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600">braedee.how</div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors">Process</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Book Free Consultation</a>
            </div>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t py-4 space-y-4">
              <a href="#services" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#process" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Process</a>
              <a href="#experience" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Experience</a>
              <a href="#contact" className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center" onClick={() => setIsMenuOpen(false)}>Book Free Consultation</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Projects with 
              <span className="text-blue-600"> Smarter Digital Strategies</span>
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
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Digital transformation shouldn't feel overwhelming.</h2>
          <p className="text-xl text-gray-600 mb-12">Many AEC organizations struggle to balance day-to-day delivery with the growing complexity of digital standards, workflows, and technology.</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {painPoints.map((point, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6">
                <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
                <p className="text-gray-700 font-medium">"{point}"</p>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-gray-600">
            <strong className="text-gray-900">These challenges cost time, money, and opportunities</strong> — but with the right strategy, they're completely solvable.
          </p>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-600">Trusted by teams on Australia's largest infrastructure projects</p>
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

      {/* 3-Step Process */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">A Clear Path to Smarter Digital Delivery</h2>
            <p className="text-xl text-gray-600">Simple, proven process to transform your digital capabilities</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Book a Free Call</h3>
              <p className="text-gray-600">Schedule a 30-minute consultation to discuss your challenges.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get a Custom Roadmap</h3>
              <p className="text-gray-600">Receive a tailored strategy aligned to your organization's goals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transform Your Workflows</h3>
              <p className="text-gray-600">Implement solutions that drive lasting results and measurable ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio/Credibility Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">15+ Years Transforming Digital Construction</h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-xl leading-relaxed mb-6">
              With over 15 years of experience driving digital transformation across Australia's largest infrastructure and construction projects, I help organizations turn complex digital challenges into practical, scalable solutions.
            </p>
            <p className="leading-relaxed mb-6">
              My background spans the full project lifecycle — from early design and planning through to construction and asset management — with a focus on ISO19650 alignment, BIM/VDC workflow optimization, and digital strategy leadership.
            </p>
            <p className="leading-relaxed mb-8">
              I've led teams managing 100TB+ of federated BIM data, authored industry-standard processes like the Western Program Alliance Survey Management Plan, and delivered innovative KPIs such as the first successful augmented reality rollout within Victoria's Level Crossing Removal Project, training over 170+ professionals.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <p className="text-lg font-semibold text-blue-900 mb-2">My Mission</p>
              <p className="text-blue-800">Helping you achieve measurable ROI from your digital investments through streamlined workflows, future-proof strategies, and empowered teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Results from Tier-1 Projects</h2>
            <p className="text-xl text-gray-600">Real outcomes from Australia's most complex infrastructure projects</p>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AR Innovation Rollout</h3>
                  <p className="text-gray-600 mb-2">First successful augmented reality implementation on Level Crossing Removal Project</p>
                  <p className="text-purple-600 font-semibold">Result: 170+ professionals trained, new industry standard established</p>
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
                    <span>Author of industry-standard processes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Future-Proof Your Digital Strategy?</h2>
          <p className="text-xl mb-8 opacity-90">Let's explore how smarter workflows and ISO19650-aligned processes can elevate your next project.</p>
          <a href="#contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            Book Your Free Consultation Today <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Start Your Digital Transformation</h2>
            <p className="text-xl text-gray-300">Book your free 30-minute consultation today</p>
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

            <div>
              <div className="bg-white p-8 rounded-xl text-gray-900">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Book Your Free Consultation</h3>
                <div className="space-y-4">
                  <div>
                    <div className="block text-sm font-medium mb-2">Name *</div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                  </div>
                  <div>
                    <div className="block text-sm font-medium mb-2">Email *</div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
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
                    <div className="block text-sm font-medium mb-2">What's your biggest digital challenge? *</div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${formErrors.message ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="e.g., Need ISO19650 compliance for upcoming project, struggling with fragmented BIM workflows, team resistance to digital adoption..."
                    ></textarea>
                    {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>Book Free Consultation <ArrowRight className="ml-2 w-5 h-5" /></>
                  )}
                </button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  No commitment required • Typically responds within 2 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold text-white mb-2">braedee.how</div>
          <p>Digital Transformation Strategist • Melbourne, Australia</p>
          <p className="text-sm mt-2">Helping AEC organizations achieve measurable ROI through smarter digital strategies</p>
        </div>
      </footer>

      {/* Sticky CTA Button - Mobile */}
      <div className="fixed bottom-4 right-4 md:hidden z-30">
        <a href="#contact" className="bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
          Book Free Call
        </a>
      </div>

      {/* Modals */}
      {activeModal && (
        <Modal service={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </div>
  );
};

export default BraedeeConsulting;