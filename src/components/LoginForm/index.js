import {Component} from 'react'
import Cookies from 'js-cookie'
import {
  AppContainer,
  FormContainer,
  CompanyLogo,
  UserInputContainer,
  Label,
  InputField,
  ShowPasswordContainer,
  Checkbox,
  ShowPassword,
  LoginButton,
  ErrorMessage,
} from './StyledComponents'

class LoginForm extends Component {
  state = {
    isDarkTheme: true,
    username: '',
    password: '',
    errorMsg: '',
    isErrorVisible: false,
    showPassword: false,
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  handleLoginFailure = errMsg => {
    this.setState({
      errorMsg: errMsg,
      isErrorVisible: true,
    })
  }

  handleLoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    const {history} = this.props
    history.replace('/')
  }

  handleSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userLoginCredentials = {
      username: username.trim(),
      password: password.trim(),
    }

    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userLoginCredentials),
    }
    try {
      const response = await fetch(apiUrl, options)
      const dbResponse = await response.json()

      if (response.ok === true) {
        this.handleLoginSuccess(dbResponse.jwt_token)
      } else {
        this.handleLoginFailure(dbResponse.error_msg)
      }
    } catch (error) {
      this.handleLoginFailure(error.message || 'Something went wrong')
    }
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value,
    })
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value,
    })
  }

  renderPasswordField = () => {
    const {isDarkTheme, password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <>
        <Label htmlFor="password" isDarkTheme={isDarkTheme}>
          PASSWORD
        </Label>
        <InputField
          id="password"
          type={inputType}
          placeholder="Password"
          isDarkTheme={isDarkTheme}
          onChange={this.handlePasswordChange}
          value={password}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {isDarkTheme, username} = this.state
    return (
      <>
        <Label htmlFor="username" isDarkTheme={isDarkTheme}>
          USERNAME
        </Label>
        <InputField
          id="username"
          type="text"
          placeholder="Username"
          isDarkTheme={isDarkTheme}
          onChange={this.handleUsernameChange}
          value={username}
        />
      </>
    )
  }

  render() {
    const {
      isDarkTheme,
      errorMsg,
      showPassword,
      isErrorVisible,
      username,
      password,
    } = this.state
    const nxtWatchImage = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
    return (
      <AppContainer isDarkTheme={isDarkTheme}>
        <FormContainer isDarkTheme={isDarkTheme} onSubmit={this.handleSubmit}>
          <CompanyLogo src={nxtWatchImage} alt="nxt watch logo" />
          <UserInputContainer>{this.renderUsernameField()}</UserInputContainer>
          <UserInputContainer>{this.renderPasswordField()}</UserInputContainer>
          <ShowPasswordContainer>
            <Checkbox
              id="show-password"
              type="checkbox"
              onChange={this.onToggleShowPassword}
              checked={showPassword}
              disabled={!password}
            />
            <ShowPassword htmlFor="show-password" isDarkTheme={isDarkTheme}>
              Show Password
            </ShowPassword>
          </ShowPasswordContainer>
          <LoginButton type="submit" disabled={!username || !password}>
            Login
          </LoginButton>
          {isErrorVisible && <ErrorMessage>*{errorMsg}</ErrorMessage>}
        </FormContainer>
      </AppContainer>
    )
  }
}

export default LoginForm
