import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ff6060;
  margin-top: 89px;
  margin-bottom: 139px;
`;

const ErrorTitle = styled.h1`
  font-size: 288px;
  font-weight: 700;
`;

const ErrorSubtitle = styled.h2`
  font-size: 36px;
  font-weight: 500;
  margin-top: 139px;
`;

const ErrorNav = styled.div`
  margin-top: 139px;
`;

const ErrorLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  color: #ff6060;
`;

function Error() {
  return (
    <ErrorContainer>
      <ErrorTitle>404</ErrorTitle>
      <ErrorSubtitle>
        Oups! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
      <ErrorNav>
        <ErrorLink to="/">Retourner sur la page d'accueil</ErrorLink>
      </ErrorNav>
    </ErrorContainer>
  );
}

export default Error;
