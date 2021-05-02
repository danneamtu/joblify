import React from 'react'
import styled from 'styled-components'
import { Col } from '../../../styled-components/responsive/col'

const InputField = styled.input`
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  left: 0;
  right: 0;
  width: 100%;
`

function Input({ md, placeholder, name, handleChange, type }) {
  return (
    <Col md={md}>
      <InputField type={type && 'password'} onChange={handleChange} name={name} placeholder={placeholder} />
    </Col>
  )
}

export default Input
