import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import {
  VideoInfoContainer,
  Thumbnail,
  CardContent,
  ProfileImage,
  VideoInfo,
  VideoTitle,
  VideoStats,
  ChannelName,
  ViewsPublish,
  Views,
  ViewsDot,
  ViewsCount,
  Publish,
  Published,
  PublishDot,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails, isDarkTheme} = props
  const {thumbnailUrl, channel, title, viewCount, publishedAt} = videoDetails
  const {profileImageUrl, name} = channel

  const formattedPublishedAt = formatDistanceToNow(new Date(publishedAt))
  const publishedYearList = formattedPublishedAt.split(' ')
  const publishedYear = `${publishedYearList[1]} ${publishedYearList[2]}`

  return (
    <VideoInfoContainer>
      <Thumbnail src={thumbnailUrl} />
      <CardContent>
        <ProfileImage src={profileImageUrl} />
        <VideoInfo>
          <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
          <VideoStats>
            <ChannelName>{name}</ChannelName>
            <ViewsPublish>
              <Views>
                <ViewsDot>
                  <BsDot size={22} />
                </ViewsDot>
                <ViewsCount isDarkTheme={isDarkTheme}>
                  {viewCount} views
                </ViewsCount>
              </Views>
              <Publish>
                <PublishDot>
                  <BsDot size={22} />
                </PublishDot>
                <Published isDarkTheme={isDarkTheme}>
                  {publishedYear} ago
                </Published>
              </Publish>
            </ViewsPublish>
          </VideoStats>
        </VideoInfo>
      </CardContent>
    </VideoInfoContainer>
  )
}

export default VideoCard
