import styled from 'styled-components'
import { light, dark, lightDark, lightDarker, darkLightHover, darkLight, darkLighter } from '../../../styled-components/typography/colors'

export const JobContainer = styled.div`
  position: relative;
  text-decoration: none;
  background: ${darkLight};
  border-radius: 4px;
  color: ${light};
  margin-bottom: 12px;
  padding: 18px 16px;
  cursor: pointer;
  z-index: 0;
  transition: 0.2s;
  background: ${(props) => props.active && darkLightHover};
  &:hover {
    background: ${darkLightHover};
  }
  @media (min-width: 768px) {
    flex-direction: column;
    padding: 22px 24px;
  }
`

export const CompanyLogo = styled.div`
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  text-align: center;
  line-height: 42px;
  margin-right: 12px;
  border-radius: 4px;
  font-size: 22px;
  background: ${light};
  color: ${dark};
  & img {
    width: 100%;
    border-radius: 4px;
  }
`
export const CompanyInfo = styled.div`
  flex: 1 0 0%;
  margin-bottom: 16px;
  margin-right: 40px;
`
export const Favorite = styled.div`
  position: absolute;

  top: 8px;
  cursor: pointer;
  z-index: 22;
  display: inline-block;
  color: rgba(255, 255, 255, 0.6);
`
export const JobTitle = styled.h2`
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 4px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.94);
  margin: 0;
  padding: 0;
`
export const JobSubTitle = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  padding-top: 8px;
`
export const Chip = styled.span`
  display: inline-block;
  padding: 4px 12px;
  background: #292a33;
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  border-radius: 4px;
  margin-right: 8px;
`
export const Date = styled.span`
  display: inline-block;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  margin-left: auto;
  max-width: 29px;
  min-width: 29px;
  text-align: center;
`
