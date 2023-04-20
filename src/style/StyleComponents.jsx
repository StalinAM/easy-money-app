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
  border-top: 4px solid ${(props) => props.theme.black_300};
  width: 100%;
`
