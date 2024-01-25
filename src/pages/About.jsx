import BannerAbout from "../components/BannerAbout";
import Accordion from "../components/Accordion";
import aboutData from "../data/about-data.json";

function About() {
  return (
    <div className="aboutContainer">
      <BannerAbout backgroundImage={require("../assets/montagne.jpeg")} />
      <div className="aboutDataContainer">
        {aboutData.map((item) => (
          <Accordion key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default About;
