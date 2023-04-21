import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  border: 2px solid ${(props) => props.theme.black_400};
  padding: 0.75rem 1rem;
  border-radius: 12px;
  background: none;
  color: ${(props) => props.theme.black_500};
  font-weight: 400;
  font-size: ${(props) => props.theme.mFont};
  &::placeholder {
    color: ${(props) => props.theme.black_400};
  }
`
export const LabelInput = styled.label`
  color: ${(props) => props.theme.black_500};
`
export const Line = styled.hr`
  border: none;
  margin: 1rem 0;
  border-top: 4px solid ${(props) => props.theme.black_300};
  width: 100%;
`
export const Container = styled.article`
  display: flex;
  gap: 4rem;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: center;
  img {
    max-width: 30rem;
    border-radius: 12px;
    border: 2px solid ${props=>props.theme.black_500};
    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
  }
`
export const Content = styled.div`
  max-width: 50ch;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h3 {
    font-size: ${(props) => props.theme.xlFont};
    color: ${(props) => props.theme.black_500};
  }
  p {
    font-size: ${(props) => props.theme.mFont};
    color: ${(props) => props.theme.black_500};
    font-weight: 300;
  }
`
