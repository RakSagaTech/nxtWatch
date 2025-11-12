import {Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {IoSunnyOutline} from 'react-icons/io5'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

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
  PopupContainer,
  PopupHeading,
  PopupButtonsContainer,
  PopupButton,
} from './styledComponents'

import './index.css'

const Header = props => {
  const {isDarkTheme, updateTheme} = props
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

  const onClickThemeIcon = () => {
    updateTheme()
  }

  return (
    <NavBar isDarkTheme={isDarkTheme}>
      <LogoIconsContainer>
        <Link to="/" style={{textDecoration: 'none'}}>
          <Nxtwatch src={nxtWatchLogo} alt="nxt watch logo" />
        </Link>
        <MobileIconsContainer>
          <IconButton
            type="button"
            isDarkTheme={isDarkTheme}
            onClick={onClickThemeIcon}
          >
            {mobileIcon}
          </IconButton>
          <IconButton type="button" isDarkTheme={isDarkTheme}>
            <GiHamburgerMenu size={24} />
          </IconButton>
          <Popup
            modal
            trigger={
              <IconButton type="button" isDarkTheme={isDarkTheme}>
                <FiLogOut size={24} />
              </IconButton>
            }
            className="popup-content"
          >
            {close => (
              <>
                <PopupContainer className="popup-content-container">
                  <PopupHeading className="logout-text">
                    Are you sure you want to logout?
                  </PopupHeading>
                  <PopupButtonsContainer className="buttons-container">
                    <PopupButton
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                    >
                      Cancel
                    </PopupButton>
                    <PopupButton
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                    >
                      Confirm
                    </PopupButton>
                  </PopupButtonsContainer>
                </PopupContainer>
              </>
            )}
          </Popup>
        </MobileIconsContainer>
        <IconsLogoutContainer>
          <DesktopIconsContainer>
            <IconButton
              type="button"
              isDarkTheme={isDarkTheme}
              onClick={onClickThemeIcon}
            >
              {desktopIcon}
            </IconButton>
            <IconButton type="button">
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </IconButton>
          </DesktopIconsContainer>
          <Popup
            modal
            trigger={
              <LogoutButton type="button" isDarkTheme={isDarkTheme}>
                Logout
              </LogoutButton>
            }
            className="popup-content"
          >
            {close => (
              <>
                <div>
                  <p>Are you sure, you want to logout?</p>
                </div>
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  Confirm
                </button>
              </>
            )}
          </Popup>
        </IconsLogoutContainer>
      </LogoIconsContainer>
    </NavBar>
  )
}

export default Header
