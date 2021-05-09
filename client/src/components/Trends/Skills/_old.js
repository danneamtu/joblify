import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { addSkill } from '../../../redux/actions/skillsActions'
import { getVisitor } from '../../../redux/actions/visitorActions'
import { getSkills } from '../../../redux/actions/skillsActions'

import { checkCircle, checkCircleFill } from '../../../assets/icons/icons'
import { Chip } from '../../../styled-components/buttons/buttons'
import { ContainerSkills, StyledLink, StyledLinkMore, Title, ToggleSkill } from './styled'

function Skills() {
  const dispatch = useDispatch()
  const [visitorId, setVisitorId] = useState(null)
  const [mySkills, setMySkills] = useState()
  const { data: allSkills } = useSelector((state) => state.skills)

  const newAllSkills = allSkills.map((item) => item.skill)
  const { _id, skills } = useSelector((state) => state.visitor)
  const skillsIntersection = newAllSkills.filter((skill) => {
    return !skills.includes(skill)
  })

  const handleSkill = (skill) => {
    dispatch(addSkill({ skill, visitorId }))
    dispatch(getVisitor(visitorId))
  }

  useEffect(() => {
    dispatch(getSkills())
    setVisitorId(_id)
    setMySkills(skills)
  }, [skills])

  const getTotalJobs = (skill) => {
    const item = allSkills.filter((item) => item.skill === skill)
    return item[0].total
  }

  return (
    <ContainerSkills>
      <Title>Popular Skills</Title>
      {mySkills && mySkills.length > 0
        ? mySkills.map((skill) => (
            <StyledLink to={`/jobs/search?location=all&currentJobId=608c55e4995adefb92619fb8&start=1&skill=${skill}`} className="active">
              {skill}
              <Chip style={{ marginLeft: 'auto', marginRight: '0.5em' }}>{getTotalJobs(skill)}</Chip>
              <ToggleSkill onClick={() => handleSkill(skill)}>{checkCircleFill}</ToggleSkill>
            </StyledLink>
          ))
        : '...loading your skills'}

      {skillsIntersection.map((skill) => (
        <StyledLink to={`/jobs/search?location=all&currentJobId=608c55e4995adefb92619fb8&start=1&skill=${skill}`}>
          <div>{skill}</div>
          <Chip style={{ marginLeft: 'auto', marginRight: '0.5rem' }}>{getTotalJobs(skill, newAllSkills)}</Chip>
          <ToggleSkill onClick={() => handleSkill(skill)}>{checkCircle}</ToggleSkill>
        </StyledLink>
      ))}

      <StyledLinkMore to="#">View more</StyledLinkMore>
    </ContainerSkills>
  )
}

export default Skills
