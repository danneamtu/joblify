import React from 'react'
import styled from 'styled-components'
import { Col } from '../../../styled-components/responsive/col'

const InputField = styled.input`
  padding: 0.75rem 1.7rem;
  border-radius: 0.5rem;
  margin-bottom: 0.25rem;
  border: none;
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
