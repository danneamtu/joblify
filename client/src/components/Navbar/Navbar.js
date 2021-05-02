import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search/Search'
import { CircleButton } from '../../styled-components/buttons/buttons'

import { checkCircleFill, pieChartFill, clockFill, person, personFill, starFill, barChartFill, search } from '../../assets/icons/icons'
import { CircleAvatar, Container, Row, NavbarContainer, Logo, Profile, InfoAuth } from './styled'

const user = false

const Navbar = () => {
  return (
    <>
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
              <Link to="/users/">
                <Row alignItems="center">
                  <CircleAvatar>{user.name.charAt(0)}</CircleAvatar>
                  {/* <InfoAuth>{user.name}</InfoAuth> */}
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
