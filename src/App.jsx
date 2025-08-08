import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import PopularCourses from "./components/Courses/Courses";
import GoogleLogin from "./GoogleLogin/GoogleLogin";

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
