import BannerHome from '../../components/BannerHome'
import Gallery from '../../components/Gallery'

function Home() {
  return (
    <div>
      <BannerHome
        backgroundImage={require('../../assets/mer.jpeg')}
        title="Chez vous, partout et ailleurs"
      />
      <Gallery />
    </div>
  )
}

export default Home
