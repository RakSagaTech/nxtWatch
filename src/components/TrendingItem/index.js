import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import {
  TrendingListItem,
  TrendingThumbnailImg,
  TrendingProfileDescritpion,
  TrendingProfileContainer,
  TrendingProfileImg,
  TrendingDescriptionContainer,
  TrendingDescription,
  TrendingStatsContainer,
  TrendingChannel,
  StatsContainer,
  ViewsDot,
  PublishedDot,
  Stats,
  TrendingStats,
} from './styledComponents'

const TrendingItem = props => {
  const {trendingDetails} = props
  const {
    channel,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    id,
  } = trendingDetails
  const {name, profileImageUrl} = channel
  const published = formatDistanceToNow(new Date(publishedAt))
  const publishedYearList = published.split(' ')
  const publishedYear = `${publishedYearList[1]} ${publishedYearList[2]}`
  return (
    <TrendingListItem>
      <TrendingThumbnailImg src={thumbnailUrl} />
      <TrendingProfileDescritpion>
        <TrendingProfileContainer>
          <TrendingProfileImg src={profileImageUrl} />
        </TrendingProfileContainer>
        <TrendingDescriptionContainer>
          <TrendingDescription>{title}</TrendingDescription>
          <TrendingStatsContainer>
            <TrendingChannel>{name}</TrendingChannel>
            <StatsContainer>
              <Stats>
                <ViewsDot>
                  <BsDot size={24} />
                </ViewsDot>
                <TrendingStats>{viewCount} views</TrendingStats>
              </Stats>
              <Stats>
                <PublishedDot>
                  <BsDot size={24} />
                </PublishedDot>
                <TrendingStats>{publishedYear} ago</TrendingStats>
              </Stats>
            </StatsContainer>
          </TrendingStatsContainer>
        </TrendingDescriptionContainer>
      </TrendingProfileDescritpion>
    </TrendingListItem>
  )
}

export default TrendingItem
