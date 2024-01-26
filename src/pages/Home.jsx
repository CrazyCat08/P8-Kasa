import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import bannerImageHome from "../assets/mer.png";

function Home() {
  return (
    <section>
      <Banner
        image={bannerImageHome}
        title={"Chez vous, partout et ailleurs"}
      />
      <Gallery />
    </section>
  );
}

export default Home;
