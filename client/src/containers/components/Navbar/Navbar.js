import React from 'react'
import styled from 'styled-components'
import { person, personFill, starFill, barChartFill, search } from '../../icons/icons'
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
    border-radius: 4px;
    border: none;
    margin-right: 16px;
    transition: 0.3s;
    outline-offset: 0;
    outline: none;
     background: rgba(255,255,255,0.9);
  }
  .searchInput:focus {
    width: 230px;
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
  width: 32px;
  height: 32px;
  background: blue;
  color: white;
  line-height: 32px;
  text-align: center;
  font-size: 20px;
  border-radius: 4px;
  margin-right: 16px;
`
const Profile = styled.div`
  margin-left: auto;
  min-width: 220px;
  color: white;
`
const CircleButton = styled.div`
  width: 40px;
  height: 40px;
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
    background: rgba(255, 255, 255, 0.05);
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

function Navbar() {
  return (
    <>
      <NavbarContainer>
        <Container>
          <Row>
            <Logo>J</Logo>
            <SearchBox>
              {search}
              <input placeholder="City or country" className="searchInput" />
            </SearchBox>
            <Profile> </Profile>
            <CircleButton>{barChartFill}</CircleButton>
            <CircleButton>{starFill}</CircleButton>
            <CircleButton>{personFill}</CircleButton>
            Welcome, <br />
            to your job board
          </Row>
        </Container>
      </NavbarContainer>
    </>
  )
}

export default Navbar
