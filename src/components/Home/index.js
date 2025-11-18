import {Component} from 'react'
import SideBar from '../SideBar'
import Header from '../Header'

import {HomeContainer} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <SideBar />
        <Header />
      </HomeContainer>
    )
  }
}

export default Home
