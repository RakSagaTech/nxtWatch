import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const TrendingLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 100px;
`

export const TrendingSideBarContainer = styled.div`
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

export const HeaderTrendingDetails = styled.div`
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

export const TrendingDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TrendingTitleContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ebebeb;
  padding: 12px 26px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    padding: 26px 60px;
  }
`

export const TrendingImageContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #d7dfe9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  color: #ff0b37;
  @media screen and (min-width: 768px) {
    width: 88px;
    height: 88px;
    margin-right: 16px;
  }
`

export const TrendingTitle = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  color: #181818;
  font-size: 22px;
  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`

export const TrendingFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 30px;
  margin-top: 30px;
  height: 100%;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`

export const TrendingFailureImg = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const TrendingFailureHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
    margin-bottom: 16px;
    margin-top: 20px;
  }
`

export const TrendingFailureDescription = styled.p`
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
    font-size: 18px;
    width: 450px;
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

export const TrendingListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style-type: none;
`
