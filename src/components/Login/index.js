import {Component} from 'react'
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
  }

  renderPasswordField = () => {
    const {isDarkTheme, password} = this.state
    return (
      <>
        <Label htmlFor="password" isDarkTheme={isDarkTheme}>
          PASSWORD
        </Label>
        <InputField
          id="password"
          type="password"
          placeholder="Password"
          isDarkTheme={isDarkTheme}
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
          value={username}
        />
      </>
    )
  }

  render() {
    const {isDarkTheme, errorMsg, showErrorMsg} = this.state
    const logoSrc = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
    return (
      <AppContainer isDarkTheme={isDarkTheme}>
        <FormContainer isDarkTheme={isDarkTheme}>
          <CompanyLogo src={logoSrc} alt="website logo" />
          <UserInputContainer>{this.renderUsernameField()}</UserInputContainer>
          <UserInputContainer>{this.renderPasswordField()}</UserInputContainer>
          <ShowPasswordContainer>
            <Checkbox id="checkbox" type="checkbox" />
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
