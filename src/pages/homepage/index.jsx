import CertificateModule from "./CertificateModule";
import ExamDetails from "./ExamDetails";
import HeroSection from "./HeroSection";
import Learning from "./Learning";
import Partners from "./Partners";
import Prerequisites from "./Prerequisites";
import Heading from "./headings";
import Opportunities from "./opportunities";

const Homepage = () => {
  return (
    <div>
        <HeroSection />
        <Partners />
        <Heading />
        <Prerequisites />
        <ExamDetails />
        <CertificateModule />
        <Learning />
        <Opportunities />
    </div>
  )
}

export default Homepage;
