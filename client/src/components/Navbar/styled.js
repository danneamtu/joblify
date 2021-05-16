import styled from 'styled-components'
import { accentGreen, lightDark, accentBlue, accentBlueHover } from '../../styled-components/typography/colors'

export const NavbarContainer = styled.header`
  color: rgba(255, 255, 255, 0.64);
  background: #1d1d25;
  padding: 8px;
  margin-bottom: 16px;
  z-index: 9999;
  a {
    text-decoration: none;
  }
`

export const Logo = styled.div`
  width: 36px;
  overflow: hidden;
  height: 36px;
  background: ${accentBlue};
  color: white;
  line-height: 36px;
  text-align: center;
  font-size: 21px;
  border-radius: 4px;
  margin-right: 16px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background: ${accentBlueHover};
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
  margin-right: 4px;
  text-transform: uppercase;
  overflow: hidden;
  & img {
    border-radius: 50%;
    width: 100%;
  }
`
export const Sup = styled.div`
  position: absolute;
  right: 4px;
  top: 4px;
  font-size: 12px;
  font-weight: 500;
`
