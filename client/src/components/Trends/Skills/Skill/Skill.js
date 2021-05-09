import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addSkill } from '../../../../redux/actions/skillsActions'
import { getVisitor } from '../../../../redux/actions/visitorActions'
import { getSkills } from '../../../../redux/actions/skillsActions'

import { checkCircle, checkCircleFill } from '../../../../assets/icons/icons'
import { Chip } from '../../../../styled-components/buttons/buttons'
import { StyledLink, ToggleSkill } from './styled'

function Skill({ item }) {
  const dispatch = useDispatch()

  const handleSkill = (skill) => {
    dispatch(addSkill(skill))
  }

  return (
    <StyledLink to={`/jobs/search?location=all&currentJobId=608c55e4995adefb92619fb8&start=1&skill=${item.skill}`}>
      <div>{item.skill}</div>
      <Chip style={{ marginLeft: 'auto', marginRight: '0.5rem' }}>{item.total}</Chip>
      <ToggleSkill onClick={() => handleSkill(item)}>{checkCircle}</ToggleSkill>
    </StyledLink>
  )
}

export default Skill
