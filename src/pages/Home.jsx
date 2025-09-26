// src/pages/Home.jsx
import ProblemStatement from "../components/ProblemStatement";
import TrustFactors from "../components/TrustFactors";
import BioSection from "../components/BioSection";
import ExperienceSection from "../components/ExperienceSection";
import ThreeStepProcess from "../components/ThreeStepProcess";
import NetlifyForm from "../components/NetlifyForm"; // from earlier form component

const Home = () => {
  return (
    <div>
      <ProblemStatement />
      <TrustFactors />
      <BioSection />
      <ExperienceSection />
      <ThreeStepProcess />
      <NetlifyForm />
    </div>
  );
};

export default Home;
