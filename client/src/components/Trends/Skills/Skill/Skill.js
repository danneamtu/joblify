import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getVisitor, addVisitorSkill, removeVisitorSkill } from '../../../../redux/actions/visitorActions'
import { getSkills } from '../../../../redux/actions/skillsActions'

import { checkCircle, checkCircleFill } from '../../../../assets/icons/icons'
import { Chip } from '../../../../styled-components/buttons/buttons'
import { StyledLink, ToggleSkill, SkillLi } from './styled'

function Skill({ item, active, visitorId, start, loadMoreSkills }) {
  const dispatch = useDispatch()
  const { _id, skills } = useSelector((state) => state.visitor)
  const arrSkills = skills.map((item) => item.skill)
  const filterData = `start=${start}&nin=${arrSkills}`

  const data = {
    skill: item,
    visitorId,
  }
  const addSkill = () => {
    dispatch(addVisitorSkill(data))
  }
  const removeSkill = () => {
    dispatch(removeVisitorSkill(data))
  }

  return (
    item && (
      <SkillLi className={active && 'active'}>
        <StyledLink to={`/jobs/search?skills=${item.skill}`}>
          <div>{item.skill}</div>
          <Chip style={{ marginLeft: 'auto', marginRight: '0.5rem' }}>{item.total}</Chip>
        </StyledLink>
        <ToggleSkill onClick={!active ? addSkill : removeSkill}>{active ? checkCircleFill : checkCircle}</ToggleSkill>
      </SkillLi>
    )
  )
}

export default Skill
