import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { lightDarker, lightDark, darkLight, darkLighter } from '../../styled-components/typography/colors'

export const JobLoaderContainer = styled.div`
  background: ${darkLight};
  border-radius: 5px;
  padding: 14px;
  border-radius: 5px;
  margin-bottom: 16px;
`

export const Header = styled.div`
  display: flex;
  width: 100%;
`
export const Container = styled.div`
  flex: 0 1 auto;
  width: 100%;
  margin-bottom: 10px;
  margin-left: 16px;
  margin-right: 16px;
`

export const Logo = styled.div`
  background: ${darkLighter};
  width: 42px;
  height: 42px;
  flex: 0 0 auto;
  border-radius: 5px;
`
export const Star = styled.div`
  background: ${darkLighter};
  width: 16px;
  height: 16px;
  flex: 0 0 auto;
  border-radius: 50%;
  margin-right: 6px;
`

export const Title = styled.div`
  background: ${darkLighter};
  width: auto;
  flex: 0 1 auto;
  height: 20px;
  margin-bottom: 10px;
`

export const SubTitle = styled.div`
  background: ${darkLighter};
  width: auto;
  height: 16px;
  flex: 0 1 auto;
`

export const Footer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 6px;
`

export const Tag = styled.div`
  background: ${darkLighter};
  width: ${(props) => props.width + 'px'};
  height: 16px;
  border-radius: 4px;
  margin-right: 16px;
`

export const DynoContainer = styled.a`
  background: ${darkLight};
  border-radius: 5px;
  padding: 14px;
  border-radius: 5px;
  margin-bottom: 16px;
  text-decoration: none;
  color: ${lightDark};
  display: block;
`
export const DynoTitle = styled.p`
  color: ${lightDark};
  font-size: 18px;
`
export const DynoSubTitle = styled.p`
  color: ${lightDark};
  font-size: 16px;
`
export const SuperLink = styled(Link)`
  margin-top: 16px;
  padding: 8px 22px;
  border: solid 1px ${lightDark};
  color: ${lightDark};
  border-radius: 35px;
  display: inline-block;
  text-decoration: none;
  &:hover,
  &:focus {
    background: ${darkLighter};
  }
`
