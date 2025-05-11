
import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/HeroSection";
export default function Home() {
  return (
   <main className="bg-black/[0.96] min-h-screen antialiased bg-grid-white/[0.02]">
    <HeroSection />
    <FeaturedCourses />
   </main>
  );
}
