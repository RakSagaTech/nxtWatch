import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  min-height: 100vh;
  border: 2px solid blue;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`
