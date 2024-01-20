import styled from 'styled-components'
import logo from '../../assets/logo-footer.png'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  width: 100%;
  height: 209px;
  padding-top: 66px;
  padding-bottom: 29px;
`

const FooterLogo = styled.img`
  width: 122px;
  margin-bottom: 29px;
`

const FooterText = styled.p`
  color: white;
  font-weight: 500px;
`

function Footer() {
  return (
    <FooterContainer>
      <FooterLogo src={logo} alt="Logo footer" />
      <FooterText>@ 2020 Kasa. All rights</FooterText>
      reserved
    </FooterContainer>
  )
}

export default Footer
