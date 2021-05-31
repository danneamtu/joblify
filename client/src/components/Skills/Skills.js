import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Skill from './Skill/Skill'
import { getSkills } from '../../redux/actions/skillsActions'

import { ContainerSkills, Ul, Buttons, LoadMore, BestMatch } from './styled'
import { arrowDown } from '../../assets/icons/icons'
function Skills() {
  const dispatch = useDispatch()
  const [start, setStart] = useState(18)
  const [isDispatch, setIsDispatch] = useState(true)
  const [limit, setLimit] = useState(18)

  const { data: stateSkills } = useSelector((state) => state.skills)
  const { _id, skills } = useSelector((state) => state.visitor)
  const filterData = `start=${start}&limit=${limit}`

  console.log('this is state sta', stateSkills)

  const loadMoreSkills = (totalResults) => {
    setStart(start + 18)
    dispatch(getSkills(filterData))
    console.log('start', start, filterData)
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
        <p>Select your skills here: {isDispatch}</p>
        <br />
        <Ul>{stateSkills && stateSkills.map((item) => <Skill skill={item} key={item._id} />)}</Ul>
        <Buttons>
          {start < 72 && <LoadMore onClick={() => loadMoreSkills()}>Load More</LoadMore>}
          <Link to="&order=match">
            <BestMatch className={skills && skills.length > 2 ? 'active' : 'disabled'}>Show best match jobs</BestMatch>
          </Link>
        </Buttons>
      </ContainerSkills>
    </>
  )
}

export default Skills
