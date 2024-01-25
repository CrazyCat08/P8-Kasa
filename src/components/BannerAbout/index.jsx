import styled from "styled-components";

const BannerContainer = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 223px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 7%;
  margin-right: 7%;
  margin-bottom: 43px;
  border-radius: 25px;
`;

const BannerTitle = styled.h2`
  font-size: 48px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  padding-left: 50px;
`;

function BannerAbout({ backgroundImage, title }) {
  return (
    <BannerContainer backgroundImage={backgroundImage}>
      <BannerTitle>{title}</BannerTitle>
    </BannerContainer>
  );
}

export default BannerAbout;
