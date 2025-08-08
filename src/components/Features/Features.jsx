import "./Features.css";
import student1 from "../../assets/student1.png";
import student2 from "../../assets/student2.png";
import student3 from "../../assets/student3.png";

const features = [
  {
    title: "HandsOn Learning with RealWorld Projects",
    tags: ["Real Projects", "Portfolio Building", "Peer Feedback"],
    img: student1,
  },
  {
    tags: [],
    title: "Learn from Experts in Live Sessions",
    img: student2,
  },
  {
    title: "Your Learning Journey, Customized",
    tags: ["Custom Recommendations", "Skill Assessments", "Progress Tracking"],
    img: student3,
  },
];

export default function Features() {
  return (
    <section className="features">
      <div className="features-heading">
        <h1>Features That Power Your Learning</h1>
        <p>
          Unlock the power of learning with our cutting-edge features. From
          personalized learning paths to interactive quizzes.
        </p>
      </div>

      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <h3>{item.title}</h3>
            <div className="feature-tags">
              {item.tags.map((tag, i) => (
                <span key={i} className="feature-tag">
                  {tag}
                </span>
              ))}
            </div>
            <img src={item.img} alt={item.title} className="feature-img" />
          </div>
        ))}
      </div>
    </section>
  );
}
