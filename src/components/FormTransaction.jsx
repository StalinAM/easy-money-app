import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from '../style/StyleComponents'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Box } from '@mui/material'
import 'dayjs/locale/es'
function FormTransaction({
  handleSubmit,
  active,
  setActive,
  transaction,
  setTransaction,
  setDate
}) {
  const [dateInput, setDateInput] = useState(null)
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
          <LocalizationProvider adapterLocale={'es'} dateAdapter={AdapterDayjs}>
            <DatePicker
              value={dateInput}
              inputFormat='DD/MM/YYYY'
              onChange={(newDate) => {
                setDateInput(newDate)
                setDate(newDate.$d.toLocaleString('es-CL').slice(0, -10))
              }}
              disableMaskedInput={true}
              renderInput={({ inputRef, inputProps, InputProps }) => (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Input ref={inputRef} {...inputProps} />
                  {InputProps?.endAdornment}
                </Box>
              )}
            />
          </LocalizationProvider>
          <Input
            name='description'
            type='text'
            placeholder='Ingresa una descripcion'
            value={transaction.description}
            onChange={handleInputChange}
          />
          <Input
            name='expense'
            type='number'
            placeholder='Ingresa el valor del gasto'
            value={transaction.expense}
            onChange={handleInputChange}
          />
          <Input
            name='income'
            type='number'
            placeholder='Ingresa el valor del ingreso'
            value={transaction.income}
            onChange={handleInputChange}
          />
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
  display: flex;
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
  max-width: 350px;
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
