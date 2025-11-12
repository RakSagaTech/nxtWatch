import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 968px) {
    width: 20vw;
  }
`

export const HeaderBannerVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f4f4f4')};
  @media screen and (min-width: 768px) {
    width: 80vw;
  }
`

export const SearchInputVideosContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f4f4f4')};
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`
export const SearchInputLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 34px;
  margin: 16px;
  border: ${props =>
    props.isDarkTheme ? '1px solid #606060' : '1px solid #909090'};
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    width: 590px;
    height: 34px;
    margin: 0px;
  }
`

export const SearchInput = styled.input`
  height: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  border-right: 2px solid #909090;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  padding: 10px 13px;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#606060')};
  font-family: 'Roboto';
  font-size: 14px;
`

export const SearchIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px 30px;
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#ebebeb')};
  border: none;
  outline: none;
  curspor: pointer;
  color: ${props => (props.isDarkTheme ? '#909090' : '#424242')};
  @media screen and (min-width: 768px) {
    padding: 10px 34px;
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 100px;
`

export const VideosDetailsContainer = styled.div`
  dispaly: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 14px;
  @media screen and (min-width: 768px) {
    margin-top: 36px;
  }
`

export const VideosListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-left: 0px;
  list-stye-type: none;
  flex-grow: 1;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 30px;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`

export const FailureImg = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
    margin-bottom: 16px;
    margin-top: 20px;
  }
`

export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
  text-align: center;
  margin: 0px;
  line-height: 1.6;
  font-weight: 430;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    font-size: 22px;
    width: 550px;
  }
`

export const RetryButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 16px;
  background-color: #4f46e5;
  color: #ffffff;
  padding: 14px 40px;
  border-radius: 4px;
  font-size: @media screen and (min-width: 768px) {
    padding: 16px 42px;
  }
`

export const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 30px;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`

export const SearchResultsImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const SearchResultsHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
    margin-bottom: 16px;
    margin-top: 20px;
  }
`

export const SearchResultsDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
  text-align: center;
  margin: 0px;
  line-height: 1.6;
  font-weight: 430;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    font-size: 22px;
    width: 550px;
  }
`
