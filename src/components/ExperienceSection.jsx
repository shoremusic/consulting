// src/components/ExperienceSection.jsx
const ExperienceSection = () => {
    return (
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">My Experience</h3>
          <p className="text-lg text-gray-700 mb-8">
            Over a decade of experience delivering digital engineering strategies
            and solutions across civil infrastructure, transport, and construction sectors.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800">
            <li className="p-4 bg-white rounded-lg shadow">Major Transport Projects</li>
            <li className="p-4 bg-white rounded-lg shadow">Civil Infrastructure</li>
            <li className="p-4 bg-white rounded-lg shadow">Digital Standards Compliance</li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default ExperienceSection;
  