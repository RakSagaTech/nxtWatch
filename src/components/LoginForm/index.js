import {Component} from 'react'
import Cookies from 'js-cookie'
import {
  LoginContainer,
  LoginFormContainer,
  LoginNxtWatchLogo,
  InputContainer,
  Label,
  InputField,
  ShowPasswordContainer,
  CheckboxInput,
  ShowPasswordLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showPassword: false,
    showErrorMsg: false,
  }

  handleLoginFailure = error => {
    this.setState({
      errorMsg: error,
      showErrorMsg: true,
    })
  }

  handleLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  handleFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userLoginCredentials = {username, password}

    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userLoginCredentials),
    }

    try {
      const response = await fetch(apiUrl, options)
      const db = await response.json()
      if (response.ok === true) {
        this.handleLoginSuccess(db.jwt_token)
      } else {
        this.handleLoginFailure(db.error_msg)
      }
    } catch (error) {
      this.handleLoginFailure(error.message || 'Something went wrong')
    }
  }

  handleShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
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

  renderPasswordInput = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <InputContainer>
        <Label htmlFor="password">PASSWORD</Label>
        <InputField
          type={inputType}
          id="password"
          placeholder="Password"
          onChange={this.handlePasswordChange}
          value={password}
        />
      </InputContainer>
    )
  }

  renderUsernameInput = () => {
    const {username} = this.state
    return (
      <InputContainer>
        <Label htmlFor="username">USERNAME</Label>
        <InputField
          type="text"
          id="username"
          placeholder="Username"
          onChange={this.handleUsernameChange}
          value={username}
        />
      </InputContainer>
    )
  }

  render() {
    const {password, showPassword, showErrorMsg, errorMsg} = this.state
    const isPasswordEmpty = password.trim().length === 0
    return (
      <LoginContainer>
        <LoginFormContainer onSubmit={this.handleFormSubmit}>
          <LoginNxtWatchLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          {this.renderUsernameInput()}
          {this.renderPasswordInput()}
          <ShowPasswordContainer>
            <CheckboxInput
              type="checkbox"
              id="checkbox"
              disabled={isPasswordEmpty}
              onChange={this.handleShowPassword}
              checked={!isPasswordEmpty && showPassword}
            />
            <ShowPasswordLabel htmlFor="checkbox">
              Show Password
            </ShowPasswordLabel>
          </ShowPasswordContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
        </LoginFormContainer>
      </LoginContainer>
    )
  }
}

export default LoginForm
