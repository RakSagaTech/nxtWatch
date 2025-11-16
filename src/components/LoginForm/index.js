import {Component} from 'react'
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
} from './styledComponents'

class LoginForm extends Component {
  renderPasswordInput = () => {
    return (
      <InputContainer>
        <Label htmlFor="password">PASSWORD</Label>
        <InputField type="password" id="password" placeholder="Password" />
      </InputContainer>
    )
  }

  renderUsernameInput = () => {
    return (
      <InputContainer>
        <Label htmlFor="username">USERNAME</Label>
        <InputField type="text" id="username" placeholder="Username" />
      </InputContainer>
    )
  }

  render() {
    return (
      <LoginContainer>
        <LoginFormContainer>
          <LoginNxtWatchLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          {this.renderUsernameInput()}
          {this.renderPasswordInput()}
          <ShowPasswordContainer>
            <CheckboxInput type="checkbox" id="checkbox" />
            <ShowPasswordLabel htmlFor="checkbox">
              Show Password
            </ShowPasswordLabel>
          </ShowPasswordContainer>
          <LoginButton type="submit">Login</LoginButton>
        </LoginFormContainer>
      </LoginContainer>
    )
  }
}

export default LoginForm
