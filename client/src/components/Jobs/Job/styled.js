import styled from 'styled-components'
export const companyLogo = <img alt="some alt" src="https://media-exp1.licdn.com/dms/image/C4D0BAQGZqU18UiRgmA/company-logo_100_100/0/1584036996496?e=1627516800&v=beta&t=fRi_xTII3AcPqBlZxY_K9pq7XzIltHjuplrqj24SvEI" />

export const JobContainer = styled.div`
  position: relative;
  text-decoration: none;
  background: #1d1d25;
  border-radius: 4px;
  color: white;
  margin-bottom: 12px;
  padding: 20px;
  cursor: pointer;
  z-index: 0;
  ${(props) => {
    if (props.active) {
      return 'background: rgba(74, 74, 97, 0.23)'
    }
  }}
`

export const CompanyLogo = styled.div`
  min-width: 42px;
  max-width: 42px;
  margin-right: 12px;
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
