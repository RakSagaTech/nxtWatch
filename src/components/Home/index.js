import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {
  HomeContainer,
  SideBarContainer,
  HeaderBannerVideosContainer,
  SearchInputVideosContainer,
  SearchInputLogoContainer,
  SearchInput,
  SearchIcon,
  LoadingContainer,
  VideosDetailsContainer,
  VideosListContainer,
  FailureViewContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
  RetryButton,
  SearchResultsContainer,
  SearchResultsImage,
  SearchResultsHeading,
  SearchResultsDescription,
} from './styledComponents'
import SideBar from '../SideBar'
import Header from '../Header'
import Banner from '../Banner'
import VideoCard from '../VideoCard'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    optionName: 'HOME',
    apistatus: apiStatusConstants.initial,
    videosLists: [],
    isDarkTheme: false,
    searchInput: '',
  }

  componentDidMount() {
    this.fetchVideosData()
  }

  fetchVideosData = async () => {
    this.setState({
      apistatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const {searchInput} = this.state

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    try {
      const response = await fetch(apiUrl, options)
      if (response.ok === true) {
        const dbResponse = await response.json()
        const {videos} = dbResponse
        if (videos.length === 0) {
          this.setState({
            apistatus: apiStatusConstants.success,
            videosLists: [],
          })
        } else {
          const formattedData = dbResponse.videos.map(eachVideo => ({
            id: eachVideo.id,
            title: eachVideo.title,
            thumbnailUrl: eachVideo.thumbnail_url,
            channel: {
              name: eachVideo.channel.name,
              profileImageUrl: eachVideo.channel.profile_image_url,
            },
            viewCount: eachVideo.view_count,
            publishedAt: eachVideo.published_at,
          }))
          this.setState({
            apistatus: apiStatusConstants.success,
            videosLists: formattedData,
          })
        }
      } else {
        this.setState({
          apistatus: apiStatusConstants.failure,
        })
      }
    } catch {
      this.setState({
        apistatus: apiStatusConstants.failure,
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

  onClickSearch = () => {
    this.fetchVideosData()
  }

  onEnterSearch = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.onClickSearch()
    }
  }

  onChangeSearchInput = event => {
    const {value} = event.target
    if (value === '') {
      this.fetchVideosData()
    } else {
      this.setState({
        searchInput: value,
      })
    }
  }

  renderNoSearchResultsView = () => {
    const {isDarkTheme} = this.state
    return (
      <SearchResultsContainer isDarkTheme={isDarkTheme}>
        <SearchResultsImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <SearchResultsHeading isDarkTheme={isDarkTheme}>
          No Search results found
        </SearchResultsHeading>
        <SearchResultsDescription isDarkTheme={isDarkTheme}>
          Try different key words or remove search filter
        </SearchResultsDescription>
        <RetryButton type="button">Retry</RetryButton>
      </SearchResultsContainer>
    )
  }

  renderFailureView = () => {
    const {isDarkTheme} = this.state
    const image = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <FailureViewContainer isisDarkTheme={isDarkTheme}>
        <FailureImg src={image} />
        <FailureHeading isDarkTheme={isDarkTheme}>
          Oops! Something Went Wrong
        </FailureHeading>
        <FailureDescription isDarkTheme={isDarkTheme}>
          We are having some trouble to complete your request. Please try again.
        </FailureDescription>
        <RetryButton type="button">Retry</RetryButton>
      </FailureViewContainer>
    )
  }

  renderSuccessView = () => {
    const {videosLists, isDarkTheme} = this.state
    if (videosLists.length === 0) {
      return this.renderNoSearchResultsView()
    }
    return (
      <VideosDetailsContainer>
        <VideosListContainer>
          {videosLists.map(eachVideo => (
            <VideoCard
              key={eachVideo.id}
              videoDetails={eachVideo}
              isDarkTheme={isDarkTheme}
            />
          ))}
        </VideosListContainer>
      </VideosDetailsContainer>
    )
  }

  renderLoadingView = () => (
    <LoadingContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoadingContainer>
  )

  renderVideosListView = () => {
    const {apistatus} = this.state
    switch (apistatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {isDarkTheme, optionName} = this.state
    return (
      <HomeContainer>
        <SideBarContainer isDarkTheme={isDarkTheme}>
          <SideBar
            optionName={optionName}
            updateOptionName={this.updateOptionName}
            isDarkTheme={isDarkTheme}
          />
        </SideBarContainer>
        <HeaderBannerVideosContainer isDarkTheme={isDarkTheme}>
          <Header isDarkTheme={isDarkTheme} updateTheme={this.updateTheme} />
          <Banner />
          <SearchInputVideosContainer isDarkTheme={isDarkTheme}>
            <SearchInputLogoContainer isDarkTheme={isDarkTheme}>
              <SearchInput
                type="search"
                placeholder="Search"
                isDarkTheme={isDarkTheme}
                onChange={this.onChangeSearchInput}
                onKeyDown={this.onEnterSearch}
              />
              <SearchIcon
                isDarkTheme={isDarkTheme}
                onClick={this.onClickSearch}
              >
                <AiOutlineSearch size={17} />
              </SearchIcon>
            </SearchInputLogoContainer>
            {this.renderVideosListView()}
          </SearchInputVideosContainer>
        </HeaderBannerVideosContainer>
      </HomeContainer>
    )
  }
}

export default Home
