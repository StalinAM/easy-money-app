import React, { useState } from 'react'
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
function NewItem({ active, setActive }) {
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [income, setIncome] = useState('')
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
                  label='Basic example'
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue)
                  }}
                  renderInput={({ inputRef, inputProps, InputProps }) => (
                    <Box
                      sx={{ display: 'flex', alignItems: 'center', gap: '0' }}
                    >
                      <Input ref={inputRef} {...inputProps} />
                      {InputProps?.endAdornment}
                    </Box>
                  )}
                />
              </LocalizationProvider>
              <Input
                type='text'
                placeholder='Ingresa una descripcion'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Input
                type='text'
                placeholder='Ingresa el valor'
                value={income}
                onChange={(e) => setIncome(e.target.value)}
              />
            </FormC>
          </ModalC>
        </Container>
      )}
    </>
  )
}

export default NewItem
