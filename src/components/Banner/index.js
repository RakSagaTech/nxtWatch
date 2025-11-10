import {IoClose} from 'react-icons/io5'

import {
  BannerContainer,
  DescriptionButtonContainer,
  NxtWatchLogo,
  Description,
  GetButton,
  CloseButton,
} from './styledComponents'

const Banner = () => (
    <BannerContainer>
      <DescriptionButtonContainer>
        <NxtWatchLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <Description>Buy Nxt Watch Premium prepaid plans with UPI</Description>
        <GetButton>GET IT NOW</GetButton>
      </DescriptionButtonContainer>
      <CloseButton>
        <IoClose size={26} />
      </CloseButton>
    </BannerContainer>
  )

export default Banner
