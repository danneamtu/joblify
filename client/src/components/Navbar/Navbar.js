import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Search from './Search/Search'
import { CircleButton } from '../../styled-components/buttons/buttons'

import { checkCircleFill, pieChartFill, clockFill, person, personFill, starFill, barChartFill, search } from '../../assets/icons/icons'
const NavbarContainer = styled.header`
  color: rgba(255, 255, 255, 0.64);
  background: #1d1d25;
  padding: 8px;
  margin-bottom: 16px;

  a {
    text-decoration: none;
  }
`
const Container = styled.div`
  color: rgba(255, 255, 255, 0.64);
  width: 1200px;
  margin: auto;
`
const Row = styled.div`
  display: flex;
  align-items: center;
`
const Logo = styled.div`
  margin-left: -16px;
  width: 33px;
  overflow: hidden;
  height: 33px;
  background: blue;
  color: white;
  line-height: 33px;
  text-align: center;
  font-size: 21px;
  border-radius: 4px;
  margin-right: 16px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background: #0561fb;
  }
`
const Profile = styled.div`
  margin-left: auto;
  min-width: 220px;
  color: white;
`

const InfoAuth = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.64);
  cursor: pointer;
`

function Navbar() {
  return (
    <>
      <NavbarContainer>
        <Container>
          <Row>
            <Link to="/">
              <Logo>J</Logo>
            </Link>
            <Search />
            {/* <CircleButton style={{ marginLeft: 'auto', marginRight: 'auto' }}>{pieChartFill}</CircleButton> */}
            <Profile> </Profile>
            <CircleButton>{checkCircleFill}</CircleButton>
            <CircleButton>{starFill}</CircleButton>
            <CircleButton>{personFill}</CircleButton>
            <Link to="/profile/1231">
              <InfoAuth>
                Welcome, <br />
                <small>Sign in or Register</small>
              </InfoAuth>
            </Link>
          </Row>
        </Container>
      </NavbarContainer>
    </>
  )
}

export default Navbar
