import React, { useState, useEffect } from 'react'
import { GoogleLogin } from 'react-google-login'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { googleAuth } from '../../redux/actions/userActions'

import Input from './Input/Input'
import { Row } from '../../styled-components/responsive/row'
import { Col } from '../../styled-components/responsive/col'
import  {ContainerForm, Button, ButtonGoogle} from './styled'


function Auth() {
  const [signIn, setSignIn] = useState(true)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = () => {}
  const handleChange = () => {}
  const handleSwitch = (e) => {
    e.preventDefault()
    setSignIn(!signIn)
  }
  const googleSuccess = async (res) => {
    const result = res?.profileObj
    const token = res?.tokenId
    const payload = { result, token }

    try {
      dispatch(googleAuth(payload))
      setSignIn(true)
      history.push(`users/${res?.googleId}`)
    } catch (err) {
      console.log('error', err)
    }
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
