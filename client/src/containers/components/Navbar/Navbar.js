import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { clockFill, person, personFill, starFill, barChartFill, search } from '../../icons/icons'
const NavbarContainer = styled.header`
  color: rgba(255, 255, 255, 0.64);
  background: #1d1d25;
  padding: 8px;
  margin-bottom: 16px;
  .searchInput {
    width: 200px;
    height: 28px;
    line-height: 28px;
    padding-left: 28px;
    padding-right: 16px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border: none;
    margin-right: 8px;
    transition: 0.3s;
    outline-offset: 0;
    outline: none;
    background: rgba(255, 255, 255, 0.9);
  }
  .searchInput:focus {
    border: none;
    outline-offset: 0;
    outline: none;
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
  width: 30px;
  overflow: hidden;
  height: 30px;
  background: blue;
  color: white;
  line-height: 21px;
  text-align: center;
  font-size: 28px;
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
const CircleButton = styled.div`
  width: 38px;
  height: 38px;
  text-align: center;
  cursor: pointer;

  color: rgba(255, 255, 255, 0.712);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  transition: 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.04);
  }
`

const SearchBox = styled.div`
  position: relative;
  z-index: 1;
  & svg {
    position: absolute;
    z-index: 2;
    color: rgba(0, 0, 0, 0.664);
    top: 0;
    margin-top: auto;
    margin-bottom: auto;
    left: 8px;
    bottom: 0;
    width: 14px;
    height: 14px;
  }
`
const InfoAuth = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.64);
  cursor: pointer;
`

const SearchButton = styled.button`
  line-height: 28px;
  border: solid 1px blue;
  color: blue;
  text-align: center;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  margin-left: -16px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background: #0561fb;
    color: white;
  }
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
            <SearchBox>
              {search}
              <input placeholder="City or country" className="searchInput" />
              <SearchButton>Search</SearchButton>
            </SearchBox>
            <CircleButton>{clockFill}</CircleButton>
            <Profile> </Profile>
            <CircleButton>{barChartFill}</CircleButton>
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
