import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from '../style/StyleComponents'
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
  padding: 5.5rem 0 3rem;
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
            <form action=''>
              <Input
                type='text '
                placeholder='Ingresa una descripcion'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </form>
          </ModalC>
        </Container>
      )}
    </>
  )
}

export default NewItem
