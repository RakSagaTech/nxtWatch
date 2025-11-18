import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  min-height: 100vh;
  width: 100vw;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const HomeHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  height: 100%;
  @media screen and (min-width: 768px) {
    flex-grow: 1;
    width: auto;
  }
`

export const BannerContainer = styled.div`
  width: 100%;
  display: ${props => (props.bannerClose ? 'none' : ' block flex')};
  justify-content: space-between;
  align-items: flex-start;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 40px 27px;
  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 40px 34px;
    background-position: center;
  }
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 968px) {
    width: 60%;
  }
  @media screen and (min-width: 1200px) {
    width: 44%;
  }
  @media screen and (min-width: 1560px) {
    width: 26%;
  }
`

export const BannerLogo = styled.img`
  width: 148px;
`

export const BannerDescription = styled.p`
  font-family: 'Roboto';
  font-size: 19px;
  line-height: 1.6;
  margin-bottom: 30px;
`
export const BannerButton = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  padding: 9px 16px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: 1px solid #181818;
`

export const CloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 34px;
  height: 34px;
  background-color: transparent;
  color: #181818;
`
