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
    console.log('add ski', data)
    dispatch(addVisitorSkill(data))
  }
  const removeSkill = () => {
    console.log('rem ski', data)
    dispatch(removeVisitorSkill(data))
  }

  console.log('thisis item', item)
  return (
    item && (
      <SkillLi className={active && 'active'}>
        <StyledLink to={`/jobs/search?location=all&currentJobId=608c55e4995adefb92619fb8&start=1&skill=${item.skill}`}>
          <div>{item.skill}</div>
          <Chip style={{ marginLeft: 'auto', marginRight: '0.5rem' }}>{item.total}</Chip>
        </StyledLink>
        <ToggleSkill onClick={!active ? addSkill : removeSkill}>{active ? checkCircleFill : checkCircle}</ToggleSkill>
      </SkillLi>
    )
  )
}

export default Skill
