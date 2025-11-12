import styled from 'styled-components'

export const NxtWatchLogoContainer = styled.div`
  width: 100%;
  padding: 22px 54px;
  display: flex;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
`

export const NxtWatchLogo = styled.img`
  width: 158px;
  @media screen and (min-width: 768px) {
    width: 130px;
  }
`

export const OptionsContactContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 40px;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
`

export const IconOptioButtonContainer = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  padding: 11px 24px;
  background-color: ${props => {
    if (props.isActive && props.isDarkTheme) return '#383838'
    if (props.isActive && !props.isDarkTheme) return '#f1f5f9'
    if (!props.isActive && props.isDarkTheme) return '#212121'
    return '#ffffff'
  }};
  text-decoration: none;
`

export const OptionIcon = styled.div`
  color: ${props => {
    if (props.isActive && props.isDarkTheme) return '#ff0000'
    if (props.isActive && !props.isDarkTheme) return '#ff0000'
    if (!props.isActive && props.isDarkTheme) return '#909090'
    return '#606060'
  }};
`

export const Option = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  margin: 0px;
  text-decoration: none;
  margin-left: 28px;
  color: ${props => {
    if (props.isActive && props.isDarkTheme) return '#ffffff'
    if (!props.isActive && props.isDarkTheme) return '#909090'
    if (!props.isActive && !props.isDarkTheme) return '#606060'
    return '#000000'
  }};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`
export const ContactLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 24px;
`

export const ContactHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  margin: 0px;
  text-decoration: none;
`

export const LogosContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 24px;
`

export const Logo = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 16px;
`

export const ContactDescription = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  line-height: 1.5;
  margin-bottom: 20px;
`
