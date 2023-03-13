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
          <div>
            <label htmlFor='description'>Descripcion</label>
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
              <label htmlFor='income'>Ingreso</label>
              <Input
                name='income'
                type='number'
                placeholder='0'
                value={transaction.income}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor='expense'>Gasto</label>
              <Input
                name='expense'
                type='number'
                placeholder='0'
                value={transaction.expense}
                onChange={handleInputChange}
              />
            </div>
          </ContainerValues>
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
  width: 400px;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  i {
    position: absolute;
    top: 0;
    right: 1rem;
    color: ${(props) => props.theme.blue};
    font-size: 3rem;
    cursor: pointer;
  }
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
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`
