import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { addSkill } from '../../../redux/actions/skillsActions'
import { getVisitor } from '../../../redux/actions/visitorActions'

import { checkCircle, checkCircleFill } from '../../../assets/icons/icons'
import { lightDark, lightDarker } from '../../../styled-components/typography/colors'
import { Chip } from '../../../styled-components/buttons/buttons'

const ContainerSkills = styled.div`
  padding-bottom: 1em;
  margin-bottom: 1em;
  border-bottom: solid 1px lightDark;
  & img {
    margin-right: 12px;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  min-width: 100%;
  text-decoration: none;
  color: ${lightDarker};
  transition: 0.2s;
  &:hover {
    color: ${lightDark};
  }
  & svg {
    font-size: 0.6em;
  }
`
const StyledLinkMore = styled(StyledLink)`
  font-size: 0.9em;
  margin-top: 0.5em;
`

const Title = styled.h4`
  font-size: 1em;
  color: ${lightDarker};
  margin-bottom: 0.5em;
`
const Logo = styled.div`
  max-width: 1.5em;
  max-height: 1.5em;
  margin-right: 0.5em;
  & img {
    width: 100%;
  }
`
const ToggleSkill = styled.div``

function Skills() {
  const dispatch = useDispatch()
  const [skillIcon, setSkillIcon] = useState(true)
  const [visitorId, setVisitorId] = useState(null)
  const [mySkills, setMySkills] = useState()

  const handleSkill = (skill) => {
    dispatch(addSkill({ skill, visitorId }))
    dispatch(getVisitor(visitorId))
  }

  const allSkills = ['React', 'Node.js', 'TypeScript', 'Express', 'landba', 'JavaScript', 'HTML', 'CSS']
  const { _id, skills } = useSelector((state) => state.visitor)
  const skillsIntersection = allSkills.filter((skill) => !skills.includes(skill))

  useEffect(() => {
    setVisitorId(_id)
    setMySkills(skills)
  }, [skills])

  return (
    <ContainerSkills>
      <Title>Your {mySkills && mySkills.length} skills</Title>
      {mySkills && mySkills.length > 0
        ? mySkills.map((skill) => (
            <StyledLink to="#">
              <Logo>
                <img src="https://styled-components.com/atom.png" alt="" />
              </Logo>
              <div> {skill}</div>
              <Chip style={{ marginLeft: 'auto', marginRight: '0.5em' }}>22</Chip>
              <ToggleSkill onClick={() => handleSkill(skill)}>{checkCircleFill}</ToggleSkill>
            </StyledLink>
          ))
        : '...loading your skills'}

      {skillsIntersection.map((skill) => (
        <StyledLink to="#">
          <Logo>
            <img src="https://styled-components.com/atom.png" alt="" />
          </Logo>
          <div> {skill}</div>
          <Chip style={{ marginLeft: 'auto', marginRight: '0.5em' }}>22</Chip>
          <ToggleSkill onClick={() => handleSkill(skill)}>{checkCircle}</ToggleSkill>
        </StyledLink>
      ))}

      <StyledLinkMore to="#">View more</StyledLinkMore>
    </ContainerSkills>
  )
}

export default Skills
