import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 30px;
  background-color: #ffffff;
  @media screen and (min-width: 768px) {
    background-size: cover;
    padding-top: 39px;
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 20px;
  }
`

export const DescriptionButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const NxtWatchLogo = styled.img`
  width: 148px;
  @media screen and (min-width: 768px) {
    width: 188px;
    height: 36px;
  }
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 19px;
  font-weight: 430=;
  text-decoration: none;
  width: 100%;
  line-height: 1.8;
  margin-bottom: 30px;
  color: #1e293b;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const GetButton = styled.button`
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: normal;
  text-decoration: none;
  padding: 10px 19px;
  background-color: transparent;
  color: #1e293b;
  border: 1.6px solid #1e293b;
  font-weight: 450;
  @media screen and (min-width: 768px) {
    padding: 12px 24px;
    font-size: 18px;
  }
`

export const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex
    justify-content: flex-start;
    align-items: flex-start;
`
