import styled from 'styled-components'

export const TrendingListItem = styled.li`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px){
        flex-direction: row;
        padding-top: 60px;
    padding-left: 70px;
    padding-right; 70px;
    padding-bottom: 100px;
    }
`

export const TrendingThumbnailImg = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 110%;
  }
`

export const TrendingProfileDescritpion = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    width: 50%;
    margin-left: 14px;
  }
`

export const TrendingProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const TrendingProfileImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`

export const TrendingDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const TrendingDescription = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 0px;
  color: #231f20;
  font-weight: normal;
  @media screen and (min-width: 768px) {
    font-size: 34px;
    width: 80%;
    line-height: 1.6;
  }
`

export const TrendingStatsContainer = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const TrendingChannel = styled.h1`
  font-family: 'Roboto';
  font-size: 13px;
  color: #64748b;
  font-weight: normal;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const StatsContainer = styled.div`
  display: flex;
  aligin-items: center;
`

export const Stats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ViewsDot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-weight: normal;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const PublishedDot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-weight: normal;
`

export const TrendingStats = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  margin: 0px;
  color: #64748b;
  font-weight: normal;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
