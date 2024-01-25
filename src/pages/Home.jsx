import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import bannerImageHome from "../assets/mer.png";

function Home() {
  return (
    <div>
      <Banner
        image={bannerImageHome}
        title={"Chez vous, partout et ailleurs"}
      />
      <Gallery />
    </div>
  );
}

export default Home;
