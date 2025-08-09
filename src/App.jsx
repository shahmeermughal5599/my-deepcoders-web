import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import PopularCourses from "./components/Courses/Courses";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <PopularCourses />
    </>
  );
}

export default App;
