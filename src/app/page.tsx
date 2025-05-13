
import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/HeroSection";
import Instructors from "./components/Instructors";
import TestmonialCards from "./components/TestmonialCards";
import UpcommingWebinars from "./components/UpcommingWebinars";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
   <main className="bg-black/[0.96] min-h-screen antialiased bg-grid-white/[0.02]">
    <HeroSection />
    <FeaturedCourses />
    <WhyChooseUs />
    <TestmonialCards />
    <UpcommingWebinars />
    <Instructors />
   </main>
  );
}
