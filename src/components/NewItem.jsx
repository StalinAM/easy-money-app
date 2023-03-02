import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Input } from '../style/StyleComponents'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Box } from '@mui/material'
import 'dayjs/locale/es'
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
function NewItem({ active, setActive }) {
  const [date, setDate] = useState(null)
  const [dates, setDates] = useState(null)
  const [transaction, setTransaction] = useState({
    description: '',
    value: ''
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setTransaction((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <>
      {active && (
        <Container>
          <ModalC>
            <i onClick={() => setActive(!active)} className='uil uil-times' />
            <FormC action=''>
              <LocalizationProvider
                adapterLocale={'es'}
                dateAdapter={AdapterDayjs}
              >
                <DatePicker
                  value={date}
                  inputFormat='D/M/YYYY'
                  onChange={(newDate) => {
                    setDate(newDate)
                  }}
                  renderInput={({ inputRef, inputProps, InputProps }) => (
                    <Box
                      onChange={() => setDates(inputProps)}
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
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
                name='value'
                type='text'
                placeholder='Ingresa el valor'
                value={transaction.value}
                onChange={handleInputChange}
              />
              <SubmitBtn>Añadir</SubmitBtn>
            </FormC>
          </ModalC>
        </Container>
      )}
    </>
  )
}

export default NewItem
