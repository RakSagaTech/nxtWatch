import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f9f9f9')};
  padding: 0px 16px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 50px;
  padding-left: 16px;
  padding-right: 16px;
  box-shadow: 0px 4px 8px 0px rgba(7, 7, 7, 0.08);
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  border-radius: 12px;
  width: 100%;
  @media screen and (min-width: 768px) {
    min-width: 300px;
    max-width: 470px;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }
`

export const CompanyLogo = styled.img`
  width: 120px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 190px;
    margin-bottom: 40px;
  }
`

export const UserInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`

export const Label = styled.label`
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
  font-size: 12px;
  magin: 0px;
  font-weight: 600;
  line-height: 1.8;
  @media screen and (min-width: 768px) {
    line-height: 2;
    font-size: 13px;
  }
`

export const InputField = styled.input`
  border: ${props =>
    props.isDarkTheme ? '1px solid #475569' : '1px solid #d7dfe9'};
  height: 40px;
  padding: 0px 18px;
  font-family: 'Roboto';
  font-size: 15px;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`

export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`

export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const LoginButton = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  background-color: #3b82f6;
  border: none;
  outline: none;
  cursor: pointer;
  height: 40px;
  border-radius: 8px;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`

export const ErrorMessage = styled.p`
  color: #ff0000;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  width: 100%;
  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`
