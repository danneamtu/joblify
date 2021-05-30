import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVisitor, addVisitorSkill, removeVisitorSkill } from '../../../redux/actions/visitorActions'

import { star, starFill, checkCircle, checkCircleFill } from '../../../assets/icons/icons'

import { SkillContainer } from './styled'
function Skill({ skill }) {
  const dispatch = useDispatch()

  const { _id, skills } = useSelector((state) => state.visitor)
  const arrSkills = skills.map((item) => item.skill)
  const intersection = arrSkills.includes(skill.skill)



  const [active, setActive] = useState(intersection)
  const data = {
    skill: skill,
    visitorId: _id,
  }
  
  const addSkill = () => {
    dispatch(addVisitorSkill(data))
    setActive(!active)
  }
  const removeSkill = () => {
    dispatch(removeVisitorSkill(data))
    setActive(!active)
  }

  return (
    <SkillContainer key={skill._id} className={active ? 'active' : ''} onClick={!active ? addSkill : removeSkill}>
      {skill.skill} {checkCircleFill}
      <small>{skill.total} jobs</small>
    </SkillContainer>
  )
}

export default Skill
