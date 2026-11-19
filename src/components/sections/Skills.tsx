import {
  Atom,
  Braces,
  Code,
  Database,
  FileCode,
  GitBranch,
  GitFork,
  Globe,
  Hexagon,
  LayoutGrid,
  Leaf,
  Lightbulb,
  MessageCircle,
  MoveRight,
  Paintbrush,
  Route,
  ScanLine,
  Server,
  Smartphone,
  Terminal,
  Users,
  Wind,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { skills } from "@/data/skills";

const skillIcons: Record<string, LucideIcon> = {
  C: Code,
  Python: Terminal,
  JavaScript: Braces,
  HTML5: FileCode,
  CSS: Paintbrush,
  Bootstrap: LayoutGrid,
  "Tailwind CSS": Wind,
  GSAP: MoveRight,
  React: Atom,
  Django: Server,
  "Node.js": Hexagon,
  Express: Route,
  "React Native": Smartphone,
  Expo: ScanLine,
  "REST API": Workflow,
  MySQL: Database,
  MongoDB: Leaf,
  WordPress: Globe,
  Git: GitBranch,
  GitHub: GitFork,
  "Visual Studio Code": Code,
  "Problem-solving": Lightbulb,
  Teamwork: Users,
  Communication: MessageCircle,
};

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
                  .map((skill) => {
                    const Icon = skillIcons[skill.name] ?? Code;

                    return (
                      <span className="skill-tag" key={skill.name}>
                        <Icon
                          className="skill-tag-icon"
                          size={14}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                        {skill.name}
                      </span>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}