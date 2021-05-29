import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Skill from './Skill/Skill'
import { getSkills } from '../../redux/actions/skillsActions'

import { star, starFill, checkCircle, checkCircleFill } from '../../assets/icons/icons'
import { ContainerSkills, Ul, Li, Buttons, LoadMore, BestMatch, accentBlue } from './styled'
function Skills() {
  const dispatch = useDispatch()
  const [start, setStart] = useState(10)
  const [active, setActive] = useState(false)
  const { data: stateSkills } = useSelector((state) => state.skills)
  const { _id, skills } = useSelector((state) => state.visitor)

  const loadMoreSkills = (totalResults) => {
    setStart(start + 10)
    const filterData = `start=${start}`
    dispatch(getSkills(filterData))
  }

  return (
    <>
      <ContainerSkills>
        <br />
        <h2>Welcome to Joblify</h2>
        <br />
        <h4>
          Joblify help to you match <b>your technical skills</b> with Front End Develper job requirements. To find your dream job, match with your personal skill first.
          <br />
        </h4>
        <br />
        <br />
        <p>Select your skills here:</p>
        <br />
        <Ul>{stateSkills && stateSkills.map((item) => <Skill skill={item} key={item._id} />)}</Ul>
        <Buttons>
          <LoadMore onClick={() => loadMoreSkills(stateSkills[0].totalSkills)}>Load more skills</LoadMore>
          <BestMatch className={skills.length > 4 ? 'active' : 'disabled'}>Show my best match</BestMatch>
        </Buttons>
      </ContainerSkills>
    </>
  )
}

export default Skills
