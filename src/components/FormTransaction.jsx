import React from 'react'
import styled from 'styled-components'
import { Input, LabelInput } from '../style/StyleComponents'
import 'dayjs/locale/es'
function FormTransaction({
  handleSubmit,
  active,
  setActive,
  transaction,
  setTransaction
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setTransaction((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <Container>
      <ModalC>
        <FormC onSubmit={handleSubmit}>
          <div>
            <LabelInput htmlFor='description'>Descripción</LabelInput>
            <Input
              name='description'
              type='text'
              placeholder='Luz, Agua, etc'
              value={transaction.description}
              onChange={handleInputChange}
            />
          </div>
          <ContainerValues>
            <div>
              <LabelInput htmlFor='income'>Ingreso</LabelInput>
              <Input
                name='income'
                type='number'
                placeholder='0'
                value={transaction.income}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <LabelInput htmlFor='expense'>Gasto</LabelInput>
              <Input
                name='expense'
                type='number'
                placeholder='0'
                value={transaction.expense}
                onChange={handleInputChange}
              />
            </div>
          </ContainerValues>
          <div>
            <LabelInput htmlFor='savings'>Ahorro</LabelInput>
            <Input
              name='savings'
              type='number'
              placeholder='0'
              value={transaction.savings}
              onChange={handleInputChange}
            />
          </div>
          <ContainerBtns>
            <Button type='submit'>Añadir</Button>
            <Button onClick={() => setActive(!active)}>Cerrar</Button>
          </ContainerBtns>
        </FormC>
      </ModalC>
    </Container>
  )
}

export default FormTransaction

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px) brightness(0.7);
  z-index: 100;
`
const ModalC = styled.div`
  background-color: ${(props) => props.theme.white};
  position: relative;
  border-radius: 30px;
  width: 400px;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 480px) {
    width: 300px;
  }
`
const FormC = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: 1.125rem;
  margin: 0 auto;
`
const ContainerBtns = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`
const Button = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  background-color: ${(props) => props.theme.black_500};
  font-size: ${(props) => props.theme.mFont};
  &:hover {
    background: none;
    box-shadow: inset 0 0 0 4px ${(props) => props.theme.black_500};
    color: ${(props) => props.theme.black_500};
  }
`
const ContainerValues = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`
