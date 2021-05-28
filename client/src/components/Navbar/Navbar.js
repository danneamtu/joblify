import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Container } from '../../styled-components/responsive/container'
import { Row, Col } from '../../styled-components/responsive/responsive'
import { googleLogout } from '../../redux/actions/userActions'
import { createVisitor, getVisitor } from '../../redux/actions/visitorActions'

import Search from './Search/Search'
import Auth from '../Auth/Auth'

import { CircleButton } from '../../styled-components/buttons/buttons'

import { personFill, starFill, barVertical } from '../../assets/icons/icons'
import { Sup, CircleAvatar, NavbarContainer, Logo, InfoAuth } from './styled'

const Navbar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const [user, setUser] = useState(null)
  const [visitor, setVisitor] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const { jobs: paramJobs } = useParams()
  const { favorites } = useSelector((state) => state.visitor)

  useEffect(() => {
    const visitor = JSON.parse(localStorage.getItem('visitor'))

    !visitor ? dispatch(createVisitor()) : dispatch(getVisitor(visitor.result._id))

    setVisitor(visitor.result._id)
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [location])

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
            <Col md={12} style={{ display: 'flex' }}>
              <Link to="/">
                <Logo>J</Logo>
              </Link>
              <Search />
              {/* <Link style={{ marginLeft: 'auto' }} to={`skills`}>
                <CircleButton>
                  {barVertical}
                  <Sup> {favorites.length > 0 && favorites.length}</Sup>
                </CircleButton>
              </Link> */}

              <Link style={{ marginLeft: 'auto' }} to={paramJobs ? `search?favorites=show&start=1` : `jobs/search?favorites=show&start=1`}>
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
                    <InfoAuth className="show-md" style={{ marginRight: '8px' }}>
                      Hi {user.result?.givenName}
                    </InfoAuth>
                    <InfoAuth className="show-md" onClick={logout}>
                      Logout
                    </InfoAuth>
                  </Row>
                </Link>
              ) : (
                <Row onClick={() => setModalOpen(true)} alignItems="center">
                  <CircleButton style={{ marginLeft: '10px', marginRight: '10px' }}>{personFill}</CircleButton>
                  <InfoAuth className="show-md">
                    Welcome, <br />
                    <small>Sign in or Register</small>
                  </InfoAuth>
                </Row>
              )}
            </Col>
          </Row>
        </Container>
      </NavbarContainer>
      <Auth open={modalOpen} setOpen={setModalOpen} />
    </>
  )
}

export default Navbar
