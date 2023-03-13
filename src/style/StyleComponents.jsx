import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  border: 2px solid ${(props) => props.theme.xLightBlue};
  padding: 0.75rem 1rem;
  border-radius: 12px;
  background: none;
  color: ${(props) => props.theme.darkBlue};
  font-weight: 400;
  font-size: ${(props) => props.theme.mFont};
  &::placeholder {
    color: ${(props) => props.theme.gray};
  }
`
export const LabelInput = styled.label`
  color: ${(props) => props.theme.darkLightBlue};
  font-weight: bold;
`
export const Line = styled.hr`
  border: none;
  margin: 1rem 0;
  border-top: 2px solid ${(props) => props.theme.white};
  width: 100%;
`
export const SectionC = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  padding: 4rem 6rem 2rem;
  min-height: 100vh;
  @media screen and (max-width: 1080px) {
    padding: 3rem 3rem 2rem;
  }
  @media screen and (max-width: 768px) {
    padding: 1.5rem 1.5rem 2rem;
  }
  @media screen and (max-width: 480px) {
    padding: 1rem 1rem 2rem;
  }
`
