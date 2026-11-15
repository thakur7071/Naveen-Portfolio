import { skills } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = [
  "Languages",
  "Web & Mobile Development",
  "Developer Tools",
  "Soft Skills",
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeading
          eyebrow="02 / TECH STACK"
          title="Tools of my trade."
          description="Technologies I use to turn ideas into reality."
        />

        <div className="skills-grid">
          {categories.map((category) => (
            <div className="skill-card" key={category}>
              <div className="skill-card-heading">
                <span className="skill-number">/</span>
                <h3>{category}</h3>
              </div>

              <div className="skill-list">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <span className="skill-tag" key={skill.name}>
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}