import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import ServicesSection from "@/app/components/ServicesSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import WhyUsSection from "@/app/components/WhyUsSection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";

const HomePage = () => (
  <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProjectsSection />
    <WhyUsSection />
    <ContactSection />
    <Footer />
  </>
);

export default HomePage;
