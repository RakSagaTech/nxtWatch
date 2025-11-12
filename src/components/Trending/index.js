import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingItem from '../TrendingItem'
import {
  TrendingContainer,
  TrendingSideBarContainer,
  TrendingLoadingContainer,
  HeaderTrendingDetails,
  TrendingDetailContainer,
  TrendingTitleContainer,
  TrendingImageContainer,
  TrendingTitle,
  TrendingFailureContainer,
  TrendingFailureImg,
  TrendingFailureHeading,
  TrendingFailureDescription,
  RetryButton,
  TrendingListContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingList: [],
    isDarkTheme: false,
    optionName: 'TRENDING',
  }

  componentDidMount() {
    this.fetchTrendingDetails()
  }

  fetchTrendingDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    try {
      const response = await fetch(apiUrl, options)
      if (response.ok === true) {
        const dbResponse = await response.json()
        const {videos} = dbResponse
        if (videos.length === 0) {
          this.setState({
            apiStatus: apiStatusConstants.success,
            trendingList: [],
          })
        } else {
          const formattedData = dbResponse.videos.map(eachVideo => ({
            channel: {
              name: eachVideo.channel.name,
              profileImageUrl: eachVideo.channel.profile_image_url,
            },
            id: eachVideo.id,
            publishedAt: eachVideo.published_at,
            thumbnailUrl: eachVideo.thumbnail_url,
            title: eachVideo.title,
            viewCount: eachVideo.view_count,
          }))
          this.setState({
            apiStatus: apiStatusConstants.success,
            trendingList: formattedData,
          })
        }
      }
    } catch {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  updateTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  updateOptionName = name => {
    this.setState({
      optionName: name,
    })
  }

  renderFailureView = () => {
    const {isDarkTheme} = this.state
    const image = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <TrendingFailureContainer isDarkTheme={isDarkTheme}>
        <TrendingFailureImg src={image} isDarkTheme={isDarkTheme} />
        <TrendingFailureHeading>
          Oops! Something Went Wrong
        </TrendingFailureHeading>
        <TrendingFailureDescription isDarkTheme={isDarkTheme}>
          We are having some trouble to complete your request. Please try again.
        </TrendingFailureDescription>
        <RetryButton type="button">Retry</RetryButton>
      </TrendingFailureContainer>
    )
  }

  renderTrendingDetailsView = () => {
    const {trendingList} = this.state
    return (
      <TrendingDetailContainer>
        <TrendingTitleContainer>
          <TrendingImageContainer>
            <HiFire size={30} />
          </TrendingImageContainer>
          <TrendingTitle>Trending</TrendingTitle>
        </TrendingTitleContainer>
        <TrendingListContainer>
          {trendingList.map(eachTrending => (
            <TrendingItem
              key={eachTrending.id}
              trendingDetails={eachTrending}
            />
          ))}
        </TrendingListContainer>
      </TrendingDetailContainer>
    )
  }

  renderLoadingView = () => (
    <TrendingLoadingContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </TrendingLoadingContainer>
  )

  renderTrendingView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderTrendingDetailsView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {optionName, isDarkTheme} = this.state
    return (
      <TrendingContainer isDarkTheme={isDarkTheme}>
        <TrendingSideBarContainer isDarkTheme={isDarkTheme}>
          <SideBar
            optionName={optionName}
            updateOptionName={this.updateOptionName}
            isDarkTheme={isDarkTheme}
          />
        </TrendingSideBarContainer>
        <HeaderTrendingDetails isDarkTheme={isDarkTheme}>
          <Header updateTheme={this.updateTheme} isDarkTheme={isDarkTheme} />
          {this.renderTrendingView()}
        </HeaderTrendingDetails>
      </TrendingContainer>
    )
  }
}

export default Trending
