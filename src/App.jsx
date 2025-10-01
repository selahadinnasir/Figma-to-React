import Navbar from "./components/Navbar";
import CategoryTabs from "./components/CategoryTabs";
import Hero from "./components/Hero";
import RecentList from "./components/RecentList";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] font-sans">
      <Navbar />
      <CategoryTabs />
      <Hero />
      <RecentList />
    </div>
  );
}
