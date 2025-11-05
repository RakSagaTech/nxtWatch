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

class Login extends Component {
  state = {
    isDarkTheme: false,
    username: '',
    password: '',
    errorMsg: '',
    showErrorMsg: false,
    isCheckboxChecked: false,
  }

  onClickChecbox = () => {
    this.setState(prevState => ({
      isCheckboxChecked: !prevState.isCheckboxChecked,
    }))
  }

  onSubmitFailure = errMsg => {
    this.setState({
      errorMsg: errMsg,
      showErrorMsg: true,
    })
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
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
        this.onSubmitSuccess(dbResponse.jwt_token)
      } else {
        this.onSubmitFailure(dbResponse.error_msg)
      }
    } catch (error) {
      this.onSubmitFailure(error.message || 'Something went wrong')
    }
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  renderPasswordField = () => {
    const {isDarkTheme, password, isCheckboxChecked} = this.state
    const checkboxType = isCheckboxChecked ? 'text' : 'password'
    return (
      <>
        <Label htmlFor="password" isDarkTheme={isDarkTheme}>
          PASSWORD
        </Label>
        <InputField
          id="password"
          type={checkboxType}
          placeholder="Password"
          isDarkTheme={isDarkTheme}
          onChange={this.onChangePassword}
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
          onChange={this.onChangeUsername}
          value={username}
        />
      </>
    )
  }

  render() {
    const {isDarkTheme, errorMsg, showErrorMsg, isCheckboxChecked} = this.state
    const logoSrc = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
    return (
      <AppContainer isDarkTheme={isDarkTheme}>
        <FormContainer isDarkTheme={isDarkTheme} onSubmit={this.onSubmitForm}>
          <CompanyLogo src={logoSrc} alt="website logo" />
          <UserInputContainer>{this.renderUsernameField()}</UserInputContainer>
          <UserInputContainer>{this.renderPasswordField()}</UserInputContainer>
          <ShowPasswordContainer>
            <Checkbox
              id="checkbox"
              type="checkbox"
              onChange={this.onClickChecbox}
              checked={isCheckboxChecked}
            />
            <ShowPassword htmlFor="checkbox" isDarkTheme={isDarkTheme}>
              Show Password
            </ShowPassword>
          </ShowPasswordContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showErrorMsg && <ErrorMessage>*{errorMsg}</ErrorMessage>}
        </FormContainer>
      </AppContainer>
    )
  }
}

export default Login
