import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { googleLogout } from '../../redux/actions/userActions'
import { createVisitor } from '../../redux/actions/visitorActions'

import Search from './Search/Search'
import { CircleButton } from '../../styled-components/buttons/buttons'

import { checkCircleFill, pieChartFill, clockFill, person, personFill, starFill, barChartFill, search } from '../../assets/icons/icons'
import { CircleAvatar, Container, Row, NavbarContainer, Logo, Profile, InfoAuth } from './styled'

const Navbar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = user?.token
    setUser(JSON.parse(localStorage.getItem('user')))
   
    const visitor = JSON.parse(localStorage.getItem('visitor'))
    if (!visitor) {
      console.log('create visitor', visitor)
      dispatch(createVisitor())
    }
  }, [location.pathname])

  console.log('before inside return', user)

  const logout = () => {
    dispatch(googleLogout())
    history.push('/')
    setUser(null)
  }
  return (
    <>
      {console.log('inside navbar', user)}
      <NavbarContainer>
        <Container>
          <Row>
            <Link to="/">
              <Logo>J</Logo>
            </Link>
            <Search />
            <Profile> </Profile>
            <CircleButton>{checkCircleFill}</CircleButton>
            <CircleButton>{starFill}</CircleButton>
            {user ? (
              <Link to={`/users/${user.result.googleId || user.result._id}`}>
                <Row alignItems="center">
                  {user.result?.imageUrl ? (
                    <CircleAvatar>
                      <img alt={user.result?.givenName} src={user.result?.imageUrl} />
                    </CircleAvatar>
                  ) : (
                    <CircleAvatar>{user.result?.givenName.charAt(0)}</CircleAvatar>
                  )}
                  Hi {user.result?.givenName}
                  <InfoAuth onClick={logout}>Logout</InfoAuth>
                </Row>
              </Link>
            ) : (
              <Link to="/auth">
                <Row alignItems="center">
                  <CircleButton>{personFill}</CircleButton>
                  <InfoAuth>
                    Welcome, <br />
                    <small>Sign in or Register</small>
                  </InfoAuth>
                </Row>
              </Link>
            )}
          </Row>
        </Container>
      </NavbarContainer>
    </>
  )
}

export default Navbar
