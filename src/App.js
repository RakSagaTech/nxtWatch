import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ThemeContext from './context/ThemeContext'
import MenuContext from './context/MenuContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    theme: 'Light',
    activeMenuId: 'HOME',
    bannerClose: false,
  }

  updateBanner = () => {
    this.setState(prevState => ({
      bannerClose: !prevState.bannerClose,
    }))
  }

  updateActiveMenu = id => {
    this.setState({
      activeMenuId: id,
    })
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'Light' ? 'Dark' : 'Light',
    }))
  }

  render() {
    const {theme, activeMenuId, bannerClose} = this.state
    return (
      <ThemeContext.Provider
        value={{
          theme,
          changeTheme: this.toggleTheme,
          closeBanner: this.updateBanner,
          bannerClose,
        }}
      >
        <MenuContext.Provider
          value={{activeMenuId, changeMenu: this.updateActiveMenu}}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/" component={Home} />
          </Switch>
        </MenuContext.Provider>
      </ThemeContext.Provider>
    )
  }
}
export default App
