import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { googleLogout } from '../../redux/actions/userActions'
import { createVisitor, getVisitor } from '../../redux/actions/visitorActions'

import Search from './Search/Search'
import { CircleButton } from '../../styled-components/buttons/buttons'

import { checkCircleFill, pieChartFill, clockFill, person, personFill, starFill, barChartFill, search } from '../../assets/icons/icons'
import { Sup, CircleAvatar, Container, Row, NavbarContainer, Logo, Profile, InfoAuth } from './styled'

const Navbar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const [user, setUser] = useState(null)
  const [visitor, setVisitor] = useState(null)
  const { _id: visitorId, favorites } = useSelector((state) => state.visitor)

  useEffect(() => {
    const visitor = JSON.parse(localStorage.getItem('visitor'))
    !visitor ? dispatch(createVisitor()) : dispatch(getVisitor(visitor.result?._id))
    setVisitor(visitor.result?._id)
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [location.pathname])

  const logout = () => {
    dispatch(googleLogout())
    history.push('/')
    setUser(null)
  }
  return (
    <>
      <NavbarContainer>
        <Container>
          <Row>
            <Link to="/">
              <Logo>J</Logo>
            </Link>
            <Search />
            {/* <Profile>{visitor}</Profile> */}
            {/* <CircleButton>{checkCircleFill}</CircleButton> */}
            <Link style={{ marginLeft: 'auto' }} to={`/favorites`}>
              <CircleButton>
                {starFill}
                <Sup> {favorites.length > 0 && favorites.length}</Sup>
              </CircleButton>
            </Link>
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
