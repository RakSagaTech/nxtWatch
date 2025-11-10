import styled from 'styled-components'

export const NavBar = styled.nav`
  padding-left: 14px;
  padding-right: 12px;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  @media screen and (min-width: 768px) {
    padding: 10px 30px;
  }
`

export const LogoIconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`

export const Nxtwatch = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MobileIconsContainer = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 0px;
  list-style-type: none;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  margin-left: 6px;
  margin-right: 0px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }
`

export const IconsLogoutContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const DesktopIconsContainer = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 0px;
  list-style-type: none;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  margin: 0px;
`

export const LogoutButton = styled.button`
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  border: ${props =>
    props.isDarkTheme ? '1px solid #ffffff' : '1px solid #3b82f6'};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  background: transparent;
  padding: 6px 18px;
  border-radius: 4px;
  margin-left: 12px;
`
