import styled from 'styled-components'

export const VideoInfoContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  @media screen and (min-width: 768px) {
    width: 30%;
    margin-right: 14px;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const CardContent = styled.div`
  display: flex;
  padding: 16px 20px;
  padding-bottom: 22px;
  @media screen and (min-width: 768px) {
    padding-left: 0px;
    padding-right: 16px;
    padding-bottom: 70px;
  }
`

export const ProfileImage = styled.img`
  width: 34px;
  height: 34px;
  @media screen and (min-width: 768px) {
    width: 42px;
    height: 42px;
  }
`

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  @media screen and (min-width: 768px) {
    margin-left: 32px;
  }
`

export const VideoTitle = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#424242')};
  font-size: 14px;
  line-height: 1.5;
  margin: 0px;
  font-weight: 405;
  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.4;
  }
`

export const VideoStats = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin: 0px;
  color: #64748b;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 17px;
    margin-top: 8px;
  }
`

export const ViewsPublish = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Views = styled.div`
  display: flex;
  align-items: center;
`

export const ViewsDot = styled.div`
  display: flex;
  align-items: center;
  color: #475569;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ViewsCount = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`

export const Publish = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const PublishDot = styled.div`
  display: flex;
  align-items: center;
  color: #64748b;
  font-weight: 500;
`

export const Published = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #64748b;
  margin: 0px;
  padding: 0px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`
