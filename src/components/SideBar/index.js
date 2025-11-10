import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'

import {
  NxtWatchLogoContainer,
  NxtWatchLogo,
  OptionsContactContainer,
  OptionsContainer,
  IconOptioButtonContainer,
  OptionIcon,
  Option,
  ContactLogoContainer,
  ContactHeading,
  LogosContainer,
  Logo,
  ContactDescription,
} from './styledComponents'

const SideBar = props => {
  const {updateOptionName, optionName, isDarkTheme} = props

  const nxtWatchLogo = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

  const onClickOption = option => {
    updateOptionName(option)
  }

  return (
    <>
      <NxtWatchLogoContainer isDarkTheme={isDarkTheme}>
        <NxtWatchLogo src={nxtWatchLogo} alt="nxt watch logo" />
      </NxtWatchLogoContainer>
      <OptionsContactContainer isDarkTheme={isDarkTheme}>
        <OptionsContainer isDarkTheme={isDarkTheme}>
          <IconOptioButtonContainer
            onClick={() => onClickOption('HOME')}
            isActive={optionName === 'HOME'}
            isDarkTheme={isDarkTheme}
          >
            <OptionIcon
              isActive={optionName === 'HOME'}
              isDarkTheme={isDarkTheme}
            >
              <AiFillHome size={21} />
            </OptionIcon>
            <Option isActive={optionName === 'HOME'} isDarkTheme={isDarkTheme}>
              Home
            </Option>
          </IconOptioButtonContainer>
          <IconOptioButtonContainer
            onClick={() => onClickOption('TRENDING')}
            isActive={optionName === 'TRENDING'}
            isDarkTheme={isDarkTheme}
          >
            <OptionIcon
              isActive={optionName === 'TRENDING'}
              isDarkTheme={isDarkTheme}
            >
              <HiFire size={21} />
            </OptionIcon>
            <Option
              isActive={optionName === 'TRENDING'}
              isDarkTheme={isDarkTheme}
            >
              Trending
            </Option>
          </IconOptioButtonContainer>
          <IconOptioButtonContainer
            onClick={() => onClickOption('GAMING')}
            isActive={optionName === 'GAMING'}
            isDarkTheme={isDarkTheme}
          >
            <OptionIcon
              isActive={optionName === 'GAMING'}
              isDarkTheme={isDarkTheme}
            >
              <SiYoutubegaming size={21} />
            </OptionIcon>
            <Option
              isActive={optionName === 'GAMING'}
              isDarkTheme={isDarkTheme}
            >
              Gaming
            </Option>
          </IconOptioButtonContainer>
          <IconOptioButtonContainer
            onClick={() => onClickOption('SAVED VIDEOS')}
            isActive={optionName === 'SAVED VIDEOS'}
            isDarkTheme={isDarkTheme}
          >
            <OptionIcon
              isActive={optionName === 'SAVED VIDEOS'}
              isDarkTheme={isDarkTheme}
            >
              <RiMenuAddLine size={21} />
            </OptionIcon>
            <Option
              isActive={optionName === 'SAVED VIDEOS'}
              isDarkTheme={isDarkTheme}
            >
              Saved Videos
            </Option>
          </IconOptioButtonContainer>
        </OptionsContainer>
        <ContactLogoContainer>
          <ContactHeading isDarkTheme={isDarkTheme}>CONTACT US</ContactHeading>
          <LogosContainer>
            <Logo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <Logo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <Logo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linkend in logo"
            />
          </LogosContainer>
          <ContactDescription isDarkTheme={isDarkTheme}>
            Enjoy! Now to see your channels and recommendations!
          </ContactDescription>
        </ContactLogoContainer>
      </OptionsContactContainer>
    </>
  )
}

export default SideBar
