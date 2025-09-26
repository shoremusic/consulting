// src/components/TrustFactors.jsx
const TrustFactors = () => {
    return (
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-xl font-semibold text-blue-600">ISO 19650 Expertise</p>
              <p className="mt-2 text-gray-600">
                Fully accredited and experienced with digital engineering standards.
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold text-blue-600">Proven Experience</p>
              <p className="mt-2 text-gray-600">
                Years of solving complex BIM challenges across major infrastructure projects.
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold text-blue-600">Results-Driven</p>
              <p className="mt-2 text-gray-600">
                Practical solutions that save time, reduce errors, and boost team collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default TrustFactors;
  