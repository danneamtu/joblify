import styled from 'styled-components'
export const companyLogo = <img alt="some alt" src="https://media-exp1.licdn.com/dms/image/C4D0BAQGZqU18UiRgmA/company-logo_100_100/0/1584036996496?e=1627516800&v=beta&t=fRi_xTII3AcPqBlZxY_K9pq7XzIltHjuplrqj24SvEI" />

export const JobContainer = styled.div`
  text-decoration: none;
  background: #1d1d25;
  border-radius: 4px;
  color: white;
  margin-bottom: 16px;
  padding: 16px;
  margin-right: 24px;
  cursor: pointer;
  &:hover {
    background: rgba(74, 74, 97, 0.23);
  }
  ${(props) => {
    if (props.active) {
      return 'background: rgba(74, 74, 97, 0.23)'
    }
  }}
`

export const CompanyLogo = styled.div`
  width: 48px;
  margin-right: 8px;
  & img {
    width: 100%;
    border-radius: 4px;
  }
`
export const CompanyInfo = styled.div`
  width: 100%;
  margin-bottom: 16px;
`
export const Favorite = styled.div`
  cursor: pointer;
  border-radius: 4px;
  padding: 8px !important;
  margin-right: -8px;
  margin-top: -4px;
  display: inline-block;
  color: rgba(255, 255, 255, 0.6);
`
export const JobTitle = styled.h2`
  font-size: 16px;
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
  padding: 0;
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
  max-width: 50px;
`
