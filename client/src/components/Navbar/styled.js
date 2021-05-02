import styled from 'styled-components'
import { accentGreen, lightDark } from '../../styled-components/typography/colors'

export const NavbarContainer = styled.header`
  color: rgba(255, 255, 255, 0.64);
  background: #1d1d25;
  padding: 8px;
  margin-bottom: 16px;
  a {
    text-decoration: none;
  }
`
export const Container = styled.div`
  color: rgba(255, 255, 255, 0.64);
  width: 1200px;
  margin: auto;
`
export const Row = styled.div`
  display: flex;
  align-items: center;
`
export const Logo = styled.div`
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
export const Profile = styled.div`
  margin-left: auto;
  min-width: 220px;
  color: white;
`

export const InfoAuth = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.64);
  cursor: pointer;
`
export const CircleAvatar = styled.div`
  width: 33px;
  height: 33px;
  line-height: 33px;
  text-align: center;
  color: ${lightDark};
  background: ${accentGreen};
  cursor: pointer;
  border-radius: 50%;
`
