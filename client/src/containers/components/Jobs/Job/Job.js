import React from 'react'
import styled from 'styled-components'
import { heart } from '../../../icons/icons'
const companyLogo = <img alt="some alt" src="https://media-exp1.licdn.com/dms/image/C4D0BAQGZqU18UiRgmA/company-logo_100_100/0/1584036996496?e=1627516800&v=beta&t=fRi_xTII3AcPqBlZxY_K9pq7XzIltHjuplrqj24SvEI" />

const WrapperStyle = styled.div`
  .ml-auto {
    margin-left: auto;
  }
  .mr-auto {
    margin-right: auto;
  }
  .mt-auto {
    margin-top: auto;
  }
  .mb-auto {
    margin-bottom: auto;
  }

  .ml-5 {
    margin-left: 32px;
  }
  .ml-4 {
    margin-left: 24px;
  }
  .ml-3 {
    margin-left: 16px;
  }
  .ml-2 {
    margin-left: 8px;
  }
  .ml-1 {
    margin-left: 4px;
  }
  .ml-0 {
    margin-left: 0;
  }

  .mr-5 {
    margin-right: 32px;
  }
  .mr-4 {
    margin-right: 24px;
  }
  .mr-3 {
    margin-right: 16px;
  }
  .mr-2 {
    margin-right: 8px;
  }
  .mr-1 {
    margin-right: 4px;
  }
  .mr-0 {
    margin-right: 0;
  }

  .mt-5 {
    margin-top: 32px;
  }
  .mt-4 {
    margin-top: 24px;
  }
  .mt-3 {
    margin-top: 16px;
  }
  .mt-2 {
    margin-top: 8px;
  }
  .mt-1 {
    margin-top: 4px;
  }
  .mt-0 {
    margin-top: 0;
  }

  .mb-5 {
    margin-bottom: 32px;
  }
  .mb-4 {
    margin-bottom: 24px;
  }
  .mb-3 {
    margin-bottom: 16px;
  }
  .mb-2 {
    margin-bottom: 8px;
  }
  .mb-1 {
    margin-bottom: 4px;
  }
  .mb-0 {
    margin-bottom: 0;
  }

  .p-5 {
    padding: 32px;
  }
  .p-4 {
    padding: 24px;
  }
  .p-3 {
    padding: 16px;
  }
  .p-2 {
    padding: 8px;
  }
  .p-1 {
    padding: 4px;
  }
  .p-0 {
    padding: 0;
  }
  .rounded-5 {
    border-radius: 32px;
  }
  .rounded-4 {
    border-radius: 24px;
  }
  .rounded-3 {
    border-radius: 16px;
  }
  .rounded-2 {
    border-radius: 8px;
  }
  .rounded-1 {
    border-radius: 4px;
  }
  .rounded-0 {
    border-radius: 0;
  }
`

const Container = styled.div`
  background: #1d1d25;
  border-radius: 5px;
  color: white;
  margin-bottom: 16px;
`
const Row = styled.div`
  display: flex;
  ${(props) => {
    switch (props.alignItems) {
      case 'center':
        return 'align-items:center'
      case 'start':
        return 'align-items:start'
      case 'end':
        return 'align-items:end'
      default:
        return ''
    }
  }}
  ${(props) => {
    switch (props.justifyContent) {
      case 'center':
        return 'justify-content:center'
      case 'start':
        return 'justify-content:start'
      case 'end':
        return 'justify-content:end'
      default:
        return ''
    }
  }}
`

const CompanyLogo = styled.div`
  width: 48px;
  & img {
    width: 100%;
    border-radius: 4px;
  }
`
const CompanyInfo = styled.div`
  width: 100%;
`
const Favorite = styled.div``

const JobTitle = styled.h2`
  font-size: 16px;
  color: white;
  margin: 0;
  padding: 0;
`
const JobSubTitle = styled.h3`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  padding: 0;
`
const Chip = styled.span`
  display: inline-block;
  padding: 4px 12px;
  background: #292a33;
  color: white;
  font-size: 13px;
`
const Date = styled.span`
  display: inline-block;
  color: white;
  margin-left: auto;
  max-width: 50px;
`

function Job() {
  return (
    <WrapperStyle>
      <Container className="p-3">
        <Row>
          <CompanyLogo className="mr-2 ">{companyLogo}</CompanyLogo>
          <CompanyInfo className="mb-3">
            <JobTitle className="mb-1">Front end developer</JobTitle>
            <JobSubTitle>Berlin, Germany</JobSubTitle>
          </CompanyInfo>
          <Favorite>{heart}</Favorite>
        </Row>
        <Row alignItems="center">
          <Chip className="rounded-1">Senior</Chip>
          <Chip className="rounded-1 ml-2">Full time</Chip>
          <Date className="ms-auto">3d</Date>
        </Row>
      </Container>
    </WrapperStyle>
  )
}

export default Job
