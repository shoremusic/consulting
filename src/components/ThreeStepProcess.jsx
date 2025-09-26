// src/components/ThreeStepProcess.jsx
const ThreeStepProcess = () => {
    return (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-900">
            Our Simple 3-Step Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">1. Assess</h4>
              <p className="text-gray-700">
                We review your current workflows and identify gaps in compliance and efficiency.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">2. Strategize</h4>
              <p className="text-gray-700">
                Together we create a tailored digital strategy aligned with ISO 19650 standards.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">3. Implement</h4>
              <p className="text-gray-700">
                We help your team embed the strategy with training, processes, and support.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ThreeStepProcess;
  