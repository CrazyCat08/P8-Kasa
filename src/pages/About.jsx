import Banner from "../components/Banner";
import Accordion from "../components/Accordion";
import aboutData from "../data/about-data.json";
import bannerImageAbout from "../assets/montagne.png";

function About() {
  return (
    <section>
      <Banner image={bannerImageAbout} title={""} />
      <div className="about-data-container">
        {aboutData.map((item) => (
          <Accordion key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </section>
  );
}

export default About;
