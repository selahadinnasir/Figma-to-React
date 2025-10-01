import Navbar from "./components/Navbar";
import CategoryTabs from "./components/CategoryTabs";
import Hero from "./components/Hero";
import RecentList from "./components/RecentList";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <CategoryTabs />
      <Hero />
      <RecentList />
      <Footer />
    </div>
  );
}
