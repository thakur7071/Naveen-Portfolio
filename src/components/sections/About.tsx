import Image from "next/image";
const details = [
  { label: "ROLE", value: "Full Stack Developer" },
  { label: "LOCATION", value: "India" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">

        <div className="about-grid">
          <Image
            src="/profile.png"
            alt="Portrait of Naveen"
            width={640}
            height={800}
            className="about-photo"
          />

          <div className="about-text">
            <p>
              I&apos;m a passionate developer interested in building web
              applications and solving real-world problems through
              technology.
    
              I enjoy working with frontend technologies, exploring backend
              development, and understanding how different parts of an
              application work together.
            </p>

            <p>
              I believe in learning by building projects, improving my
              problem-solving skills, and writing clean, maintainable code.
            
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