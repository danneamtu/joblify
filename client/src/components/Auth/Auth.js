import React, { useState, useEffect, useRef } from 'react'
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
import { Btn } from '../../styled-components/buttons/buttons'
import { x, google } from '../../assets/icons/icons'
import { ContainerForm, Button, ButtonGoogle, Overlay, FormHeader, CloseModal, Title, Small, Or, Name } from './styled'
import { CircleButton } from '../../styled-components/buttons/buttons'

function Auth({ open, setOpen }) {
  //
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

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  const outsideForm = useRef(null)
  useOutsideAlerter(outsideForm)

  return ReactDom.createPortal(
    open && (
      <>
        <Overlay>
          <ContainerForm ref={outsideForm}>
            <FormHeader>
              <Title>Sign in to Joblify</Title>
              <CircleButton onClick={() => setOpen(false)}>{x}</CircleButton>
            </FormHeader>

            <form onSubmit={handleSubmit}>
              <Row justifyContent="between">
                {!signIn && (
                  <>
                    <Input md={6} handleChange={handleChange} placeholder="First Name" name="givenName" />
                    <Input md={6} handleChange={handleChange} placeholder="Last Name" name="familyName" />
                  </>
                )}
                <Input handleChange={handleChange} md={12} placeholder="Email" name="email" />
                <Input handleChange={handleChange} md={12} placeholder="Password" type="password" name="password" />
                <Btn as="button" className="btn-primary btn-block">
                  {!signIn ? 'Register' : 'Login'}
                </Btn>
                <Or>
                  <span>or</span>
                </Or>
                <GoogleLogin
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy="single_host_origin"
                  clientId="878291105482-j5jqqlccdaqol3f4iu74oe5mh20cca26.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <Btn className="btn-outline d-flex ai-center jc-center text-center  btn-block left-icon" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                      {google} Google Sign in
                    </Btn>
                  )}
                />
                <Button as="button" onClick={handleSwitch}>
                  {signIn ? 'Not Register?' : 'Already have an account?'}
                  <Small>{signIn ? 'Create an Account' : 'Please Sign in'}</Small>
                </Button>
              </Row>
            </form>
          </ContainerForm>
        </Overlay>
      </>
    ),
    document.getElementById('auth')
  )
}

export default Auth
