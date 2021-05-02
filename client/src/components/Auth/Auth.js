import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { GoogleLogin } from 'react-google-login'

import Input from './Input/Input'

import { Row } from '../../styled-components/responsive/row'
import { Col } from '../../styled-components/responsive/col'

const ContainerForm = styled.div`
  background: blue;
  padding: 1rem;
  border-radius: 0.5rem;
`
const Button = styled.button`
  background: red;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  cursor: pointer;
  display: block;
  width: 100%;
`
const ButtonGoogle = styled.button`
  background: red;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  cursor: pointer;
  display: block;
  width: 100%;
`

function Auth() {
  const [signIn, setSignIn] = useState(true)
  const dispatch = useDispatch()
  const handleSubmit = () => {}
  const handleChange = () => {}
  const handleSwitch = (e) => {
    e.preventDefault()
    setSignIn(!signIn)
  }
  const googleSuccess = async (res) => {
    const result = res?.profileObj
    const token = res?.tokenId

    try {
      dispatch({ type: 'AUTH', payload: { result, token } })
    } catch (err) {
      console.log('error', err)
    }

    setSignIn(true)
    console.log('google response', res)
  }
  const googleFailure = (err) => {
    console.log('google error', err)
  }

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit}>
        <Row>
          {signIn && (
            <>
              <Input onChange={handleChange} md={6} placeholder="First Name" name="firstName" />
              <Input onChange={handleChange} md={6} placeholder="Last Name" name="lastName" />
            </>
          )}
          <Input onChange={handleChange} md={12} placeholder="Email" name="email" />
          <Input onChange={handleChange} md={12} placeholder="Password" type="password" name="password" />
          <Button>{signIn ? 'Register' : 'Login'}</Button>
          <GoogleLogin
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
            clientId="878291105482-j5jqqlccdaqol3f4iu74oe5mh20cca26.apps.googleusercontent.com"
            render={(renderProps) => (
              <ButtonGoogle onClick={renderProps.onClick} disabled={renderProps.disabled}>
                Google SignIn
              </ButtonGoogle>
            )}
          />
          <Button onClick={handleSwitch}>Not login? then register</Button>
        </Row>
      </form>
    </ContainerForm>
  )
}

export default Auth
