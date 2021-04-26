import { useState } from 'react'
import styled from 'styled-components'
import { Row } from '../../styles/components'
const companyLogo = <img alt="some alt" src="https://media-exp1.licdn.com/dms/image/C4D0BAQGZqU18UiRgmA/company-logo_100_100/0/1584036996496?e=1627516800&v=beta&t=fRi_xTII3AcPqBlZxY_K9pq7XzIltHjuplrqj24SvEI" />

const JobInfo = styled.div`
  width: 100%;
  background: #1d1d25;
  padding: 32px;
  border-radius: 4px;
`
const CompanyLogo = styled.div`
  width: 86px;
  margin-bottom: 32px;
  margin-right: 32px;
  & img {
    width: 100%;
  }
`
const CompanyInfo = styled.div`
  max-width: 100%;
  margin-bottom: 24px;
`
const CompanyShare = styled.div`
  width: 260px;
`
const Title = styled.h1`
  font-size: 21px;
  margin-bottom: 4px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.94);
  margin: 0;
  margin-bottom: 16px;
  padding: 0;
`
const TitleInfo = styled.h3`
  font-size: 16px;
  margin: 0;

  padding: 0;
  margin-bottom: 8px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.94);
`
const TitleInfoDetail = styled.h4`
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.64);
  margin: 0;
  margin-bottom: 4px;
  padding: 0;
`

const JobSubTitle = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  margin-bottom: 16px;
  padding: 0;
`
const ButtonApply = styled.button`
  font-size: 14px;
  background: #0261fb;
  color: rgba(255, 255, 255, 0.89);
  margin-right: 16px;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  float: left;
`
const ButtonSave = styled.button`
  float: left;
  font-size: 14px;
  background: #292a32;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
`
const ColInfo = styled.div`
  width: 100%;
  border: solid 1px rgba(255, 255, 255, 0.1);
  padding: 16px;
  &:first-child,
  &:last-child {
    border-left: solid 0 rgba(255, 255, 255, 0.1);
    border-right: solid 0 rgba(255, 255, 255, 0.1);
  }
`

const Content = styled.div`
  width: 100%;
  font-size: 15px;
  padding-top: 48px;
  padding-bottom: 48px;
  color: rgba(255, 255, 255, 0.6);
`

const JobDescription = () => {
  return (
    <>
      <JobInfo>
        <Row>
          <CompanyLogo>{companyLogo}</CompanyLogo>

          <CompanyInfo>
            <Title>Cloud - Senior JavaScript Engineer Billing</Title>
            <JobSubTitle>Vodafone &middot; Berlin, Germany</JobSubTitle>
          </CompanyInfo>
          <CompanyShare>
            <ButtonApply>Apply</ButtonApply>
            <ButtonSave>Save</ButtonSave>
          </CompanyShare>
        </Row>

        <Row>
          <ColInfo>
            <TitleInfo> Job</TitleInfo>
            <TitleInfoDetail>Full time</TitleInfoDetail>
          </ColInfo>
          <ColInfo>
            <TitleInfo> Job</TitleInfo>
            <TitleInfoDetail>Full time</TitleInfoDetail>
          </ColInfo>
          <ColInfo>
            <TitleInfo> Job</TitleInfo>
            <TitleInfoDetail>Full time</TitleInfoDetail>
          </ColInfo>
        </Row>

        <Content>
          <TitleInfoDetail>Technologies detected:</TitleInfoDetail>
          <br />
          HTML, CSS, React, JavaScript, TypeScript, Git, Jira, Jest
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi mollitia illo ut sit dolor natus velit architecto aspernatur voluptate. Iusto sit officiis recusandae, quis quos veniam non ut sed porro?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi mollitia illo ut sit dolor natus velit architecto aspernatur voluptate. Iusto sit officiis recusandae, quis quos veniam non ut sed porro?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi mollitia illo ut sit dolor natus velit architecto aspernatur voluptate. Iusto sit officiis recusandae, quis quos veniam non ut sed porro?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi mollitia illo ut sit dolor natus velit architecto aspernatur voluptate. Iusto sit officiis recusandae, quis quos veniam non ut sed porro?</p>
        </Content>
      </JobInfo>
    </>
  )
}

export default JobDescription
