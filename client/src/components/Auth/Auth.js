import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'

import { GoogleLogin } from 'react-google-login'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signup, signin } from '../../redux/actions/userActions'
import styled from 'styled-components'

import { googleAuth } from '../../redux/actions/userActions'

import Input from './Input/Input'
import { Row } from '../../styled-components/responsive/row'
import { Col } from '../../styled-components/responsive/col'

import { ContainerForm, Button, ButtonGoogle, Overlay } from './styled'

function Auth() {
  const initialUserData = {
    familyName: '',
    givenName: '',
    email: '',
    password: '',
  }

  const [signIn, setSignIn] = useState(false)
  const [userData, setUserData] = useState(initialUserData)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (signIn) {
      dispatch(signin(userData, history))
    } else {
      dispatch(signup(userData, history))
    }
  }

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

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
  const closeModal = () => {}

  return ReactDom.createPortal(
    <Overlay>
      <ContainerForm>
        <button onClikc={closeModal}>Close</button>
        <form onSubmit={handleSubmit}>
          <Row>
            {!signIn && (
              <>
                <Input handleChange={handleChange} md={6} placeholder="First Name" name="givenName" />
                <Input handleChange={handleChange} md={6} placeholder="Last Name" name="familyName" />
              </>
            )}
            <Input handleChange={handleChange} md={12} placeholder="Email" name="email" />
            <Input handleChange={handleChange} md={12} placeholder="Password" type="password" name="password" />
            <Button>{!signIn ? 'Register' : 'Login'}</Button>
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
            <Button onClick={handleSwitch}>{signIn ? 'Not Register? then sign up' : 'Already have an account? then sign in'}</Button>
          </Row>
        </form>
      </ContainerForm>
    </Overlay>,
    document.getElementById('auth')
  )
}

export default Auth
