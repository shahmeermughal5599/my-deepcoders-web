import { FaBook, FaUserFriends, FaStar } from "react-icons/fa";
import "./Courses.css";
import Course1 from "../../assets/Course1.jpg";
import Course2 from "../../assets/Course2.jpg";
import Course3 from "../../assets/Course3.jpg";

const courses = [
  {
    title: "Digital Marketing",
    description: "Master the tools and techniques of digital marketing...",
    lessons: 120,
    enrolled: 1052,
    rating: 4.9,
    reviews: 124,
    img: Course1,
  },
  {
    title: "Artificial Intelligence",
    description: "Learn how AI works and how to build intelligent systems...",
    lessons: 160,
    enrolled: 1443,
    rating: 4.9,
    reviews: 124,
    img: Course2,
  },
  {
    title: "Data Science",
    description:
      "This course teaches you to extract, analyze, and visualize data...",
    lessons: 155,
    enrolled: 1503,
    rating: 4.9,
    reviews: 124,
    img: Course3,
  },
  {
    title: "Digital Marketing",
    description: "Master the tools and techniques of digital marketing...",
    lessons: 120,
    enrolled: 1052,
    rating: 4.9,
    reviews: 124,
    img: Course1,
  },
  {
    title: "Artificial Intelligence",
    description: "Learn how AI works and how to build intelligent systems...",
    lessons: 160,
    enrolled: 1443,
    rating: 4.9,
    reviews: 124,
    img: Course2,
  },
  {
    title: "Data Science",
    description:
      "This course teaches you to extract, analyze, and visualize data...",
    lessons: 155,
    enrolled: 1503,
    rating: 4.9,
    reviews: 124,
    img: Course3,
  },
];

export default function Courses() {
  return (
    <section className="popular-courses">
      <div className="section-header">
        <h1>Our Popular Courses</h1>
        <p>
          Unlock the power of learning with our cutting-edge features. From
          personalized learning paths to interactive quizzes.
        </p>
      </div>

      <div className="course-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.img} alt={`${course.title} thumbnail`} />
            <div className="course-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>

              <div className="course-meta">
                <span>
                  <FaBook /> {course.lessons} Lessons
                </span>
                <span>
                  <FaUserFriends /> {course.enrolled} Enrolled
                </span>
              </div>

              <div className="course-rating">
                <span>
                  {course.rating} <FaStar className="star" />
                </span>
                <span>({course.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
