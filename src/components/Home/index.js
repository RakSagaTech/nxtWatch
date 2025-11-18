import {Component} from 'react'
import {MdClose} from 'react-icons/md'
import SideBar from '../SideBar'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'

import {
  HomeContainer,
  HomeHeaderContent,
  BannerContainer,
  BannerContent,
  BannerLogo,
  BannerDescription,
  BannerButton,
  CloseButton,
} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {closeBanner, bannerClose} = value
          return (
            <HomeContainer>
              <SideBar />
              <HomeHeaderContent>
                <Header />
                <BannerContainer bannerClose={bannerClose}>
                  <BannerContent>
                    <BannerLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BannerDescription>
                      Buy Nxt Watch Premium prepaid plans with UPI
                    </BannerDescription>
                    <BannerButton type="button">GET IT NOW</BannerButton>
                  </BannerContent>
                  <CloseButton type="button" onClick={closeBanner}>
                    <MdClose style={{width: '100%', height: '100%'}} />
                  </CloseButton>
                </BannerContainer>
              </HomeHeaderContent>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
