function Banner({ image, title }) {
  return (
    <div className="banner">
      <h1 className="banner__title">{title}</h1>
      <img className="banner__img" src={image} alt="Bannière Kasa" />
    </div>
  );
}

export default Banner;
