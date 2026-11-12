import SectionHeading from "@/components/ui/SectionHeading";

const details = [
  { label: "ROLE", value: "Full Stack Developer" },
  { label: "FOCUS", value: "Web Development" },
  { label: "APPROACH", value: "Learn. Build. Improve." },
  { label: "LOCATION", value: "India" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="01 / ABOUT ME"
          title="A little about me."
          description="Getting to know the developer behind the code."
        />

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a passionate developer interested in building web
              applications and solving real-world problems through
              technology.
            </p>

            <p>
              I enjoy working with frontend technologies, exploring backend
              development, and understanding how different parts of an
              application work together.
            </p>

            <p>
              I believe in learning by building projects, improving my
              problem-solving skills, and writing clean, maintainable code.
            </p>

            <p>
              My goal is to become a skilled software developer and create
              meaningful digital products.
            </p>
          </div>

          <div className="about-details">
            {details.map((item) => (
              <div className="detail-card" key={item.label}>
                <span>{item.label}</span>
                <h3>{item.value}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}