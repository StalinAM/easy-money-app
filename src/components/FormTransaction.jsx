import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from '../style/StyleComponents'
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
        <i onClick={() => setActive(!active)} className='uil uil-times' />
        <FormC onSubmit={handleSubmit}>
          <Input
            name='description'
            type='text'
            placeholder='Ingresa una descripcion'
            value={transaction.description}
            onChange={handleInputChange}
          />
          <div>
            <label for='income'>Valor del Ingreso</label>
            <Input
              name='income'
              type='number'
              placeholder='Ingresa el valor del ingreso'
              value={transaction.income}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label for='expense'>Valor del Gasto</label>
            <Input
              name='expense'
              type='number'
              placeholder='Ingresa el valor del gasto'
              value={transaction.expense}
              onChange={handleInputChange}
            />
          </div>
          <SubmitBtn type='submit'>Añadir</SubmitBtn>
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
  width: 425px;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  i {
    position: absolute;
    top: 1rem;
    right: 2rem;
    color: ${(props) => props.theme.blue};
    font-size: 3rem;
    cursor: pointer;
  }
`
const FormC = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  gap: 1.125rem;
  margin: 0 auto;
`
const SubmitBtn = styled.button`
  padding: 0.75rem 1rem;
  border-radius: 12px;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  background-color: ${(props) => props.theme.blue};
  font-size: ${(props) => props.theme.mFont};
  &:hover {
    background-color: ${(props) => props.theme.lightBlue};
  }
`
const ContainerValues = styled.div`
  gap: 1rem;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`
