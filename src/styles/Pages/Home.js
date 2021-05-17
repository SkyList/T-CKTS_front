import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 72px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;

    span {
      color: ${props => props.theme.colors.secondary};
    }
  }

  p {
    margin-top: 32px;
    font-size: 24px;
    line-height: 64px;
  }
`
