import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import ThemeContext from '../../context/ThemeContext'

import {
  NavBarContainer,
  HeaderContent,
  HeaderNxtWatchLogo,
  MobileHeaderIcons,
  DesktopHeaderIcons,
  IconButton,
  ProfileLogo,
  LogoutButton,
} from './styledComponents'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {theme, changeTheme} = value
      const headerLogo =
        theme === 'Light'
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      const themeIcon =
        theme === 'Light' ? (
          <FaMoon style={{width: '100%', height: '100%'}} />
        ) : (
          <FiSun style={{width: '100%', height: '100%'}} />
        )
      return (
        <NavBarContainer theme={theme}>
          <HeaderContent>
            <HeaderNxtWatchLogo src={headerLogo} alt="nxt watch logo" />
            <MobileHeaderIcons>
              <IconButton type="button" theme={theme} onClick={changeTheme}>
                {themeIcon}
              </IconButton>
              <IconButton type="button" theme={theme}>
                <GiHamburgerMenu style={{width: '100%', height: '100%'}} />
              </IconButton>
              <IconButton type="button" theme={theme}>
                <FiLogOut style={{width: '100%', height: '100%'}} />
              </IconButton>
            </MobileHeaderIcons>
            <DesktopHeaderIcons>
              <IconButton type="button" theme={theme} onClick={changeTheme}>
                {themeIcon}
              </IconButton>
              <IconButton type="button">
                <ProfileLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </IconButton>
              <LogoutButton type="button" theme={theme}>
                Logout
              </LogoutButton>
            </DesktopHeaderIcons>
          </HeaderContent>
        </NavBarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
