import React from 'react'
import styled from 'styled-components'
import { Col } from '../../../styled-components/responsive/col'

const ColInput = styled.div`
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  border: none;
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  width: ${(props) => (props.md === 6 ? 'calc(50% - 0.5rem)' : '100%')};
`
const InputField = styled.input`
  padding: 0.75rem 1.25rem;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  border: none;
  left: 0;
  right: 0;
  width: 100%;

  &:focus-visible {
    outline: -webkit-focus-ring-color auto 0;
  }
`

function Input({ md, placeholder, name, handleChange, type }) {
  return (
    <ColInput md={md}>
      <InputField md={md} type={type && 'password'} onChange={handleChange} name={name} placeholder={placeholder} />
    </ColInput>
  )
}

export default Input
