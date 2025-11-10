import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {IoSunnyOutline} from 'react-icons/io5'
import {
  NavBar,
  LogoIconsContainer,
  Nxtwatch,
  MobileIconsContainer,
  IconButton,
  IconsLogoutContainer,
  DesktopIconsContainer,
  ProfileImage,
  LogoutButton,
} from './styledComponents'

const Header = props => {
  const {isDarkTheme} = props
  const nxtWatchLogo = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

  const desktopIcon = isDarkTheme ? (
    <IoSunnyOutline size={34} />
  ) : (
    <FaMoon size={29} />
  )
  const mobileIcon = isDarkTheme ? (
    <IoSunnyOutline size={28} />
  ) : (
    <FaMoon size={22} />
  )
  return (
    <NavBar isDarkTheme={isDarkTheme}>
      <LogoIconsContainer>
        <Nxtwatch src={nxtWatchLogo} alt="nxt watch logo" />
        <MobileIconsContainer>
          <IconButton type="button" isDarkTheme={isDarkTheme}>
            {mobileIcon}
          </IconButton>
          <IconButton type="button" isDarkTheme={isDarkTheme}>
            <GiHamburgerMenu size={24} />
          </IconButton>
          <IconButton type="button" isDarkTheme={isDarkTheme}>
            <FiLogOut size={24} />
          </IconButton>
        </MobileIconsContainer>
        <IconsLogoutContainer>
          <DesktopIconsContainer>
            <IconButton type="button" isDarkTheme={isDarkTheme}>
              {desktopIcon}
            </IconButton>
            <IconButton type="button">
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </IconButton>
          </DesktopIconsContainer>
          <LogoutButton type="button" isDarkTheme={isDarkTheme}>
            Logout
          </LogoutButton>
        </IconsLogoutContainer>
      </LogoIconsContainer>
    </NavBar>
  )
}

export default Header
