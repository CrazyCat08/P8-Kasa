import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
  padding-top: 45px;
  margin-bottom: 50px;
  margin-left: 7%;
  margin-right: 7%;

  @media (max-width: 767px) {
    height: 47px;
    padding-top: 20px;
    margin-bottom: 27px;
    margin-left: 5%;
    margin-right: 5%;
  }
`

const StyledLogo = styled.img`
  height: 68px;

  @media (max-width: 767px) {
    height: 47px;
  }
`

const StyledNav = styled.nav`
  display: flex;
  gap: 57px;

  @media (max-width: 767px) {
    gap: 26px;
  }
`

const StyledLink = styled(Link)`
  color: #ff6060;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    text-decoration: underline;
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }
`

function Header() {
  return (
    <HeaderContainer>
      <StyledLogo src={logo} alt="Logo" />
      <StyledNav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A propos</StyledLink>
      </StyledNav>
    </HeaderContainer>
  );
};

export default Header
