import styled from 'styled-components'

export const JobInfo = styled.div`
  background: #1d1d25;
  padding: 32px;
  border-radius: 4px;
  margin-right: 30px;
`
export const CompanyLogo = styled.div`
  max-width: 84px;
  margin-bottom: 32px;
  margin-right: 2rem;
  flex: 1 0 0;
  & img {
    width: 100%;
    border-radius: 4px;
  }
`
export const CompanyInfo = styled.div`
  margin-bottom: 24px;
`
export const CompanyShare = styled.div`
  margin-left: auto;
  text-align: right;
`
export const Title = styled.h1`
  font-size: 21px;
  margin-bottom: 4px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.94);
  margin: 0;
  margin-bottom: 16px;
  padding: 0;
`
export const TitleInfo = styled.h3`
  font-size: 16px;
  margin: 0;
  padding: 0;
  margin-bottom: 8px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.94);
`
export const TitleInfoDetail = styled.h4`
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.64);
  margin: 0;
  margin-bottom: 4px;
  padding: 0;
`
export const ColD = styled.div`
  flex: 1 0 0;
`

export const JobSubTitle = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  margin-bottom: 16px;
  padding: 0;
`
export const ButtonApply = styled.button`
  font-size: 14px;
  background: #0261fb;
  color: rgba(255, 255, 255, 0.89);
  margin-right: 16px;
  padding: 0.8rem 2rem;
  border: none;
  font-weight: 500;
  border-radius: 24px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  & svg {
    margin-left: 0.5rem;
  }
`
export const ButtonSave = styled.button`
  font-size: 14px;
  background: #292a32;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  & svg {
    margin-left: 0.5rem;
  }
`
export const ColInfo = styled.div`
  flex: 1 0 0%;
  border: solid 1px rgba(255, 255, 255, 0.1);
  padding: 16px;
  &:first-child,
  &:last-child {
    border-left: solid 0 rgba(255, 255, 255, 0.1);
    border-right: solid 0 rgba(255, 255, 255, 0.1);
  }
`

export const Content = styled.div`
  width: 100%;
  font-size: 15px;
  padding-top: 48px;
  padding-bottom: 48px;
  color: rgba(255, 255, 255, 0.6);
`
export const JobButtons = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`
