import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSkills } from '../../../redux/actions/skillsActions'
import { ContainerSkills, MySkills, PopularSkills, StyledLinkMore, TitleSmall, Title, ToggleSkill } from './styled'

import Skill from './Skill/Skill'

function Skills() {
  const dispatch = useDispatch()
  const [mySkills, setMySkills] = useState([])
  const [showLoadMore, setShowLoadMore] = useState(true)
  const [start, setStart] = useState(10)
  const { data: stateSkills } = useSelector((state) => state.skills)
  const { _id, skills } = useSelector((state) => state.visitor)

  useEffect(() => {
    const arrSkills = skills.map((item) => item.skill)
    const filterData = `start=0&nin=${arrSkills}`
    dispatch(getSkills(filterData))
  }, [])

  useEffect(() => {
    setMySkills(skills)
  }, [skills])

  const loadMoreSkills = (totalResults) => {
    const arrSkills = skills.map((item) => item.skill)
    setStart(start + 10)
    const filterData = `start=${start}&nin=${arrSkills}`
    dispatch(getSkills(filterData))
    totalResults < start + 10 && setShowLoadMore(false)
  }
  return (
    <>
      <ContainerSkills>
        {mySkills.length > 0 && (
          <MySkills>
            {<Title className="mb-3 mt-2">My Skills</Title>}
            {mySkills && mySkills.map((item) => item.skill && <Skill loadMoreSkills={loadMoreSkills} start={start} active={true} data={item} visitorId={_id} item={item} />)}
          </MySkills>
        )}
        <>
          <PopularSkills>
            <Title className="mb-3 mt-2">Skills</Title>
            {stateSkills && stateSkills.map((item) => !item.totalSkills && <Skill popularSkills={true} start={start} visitorId={_id} item={item} />)}
            {showLoadMore && (
              <StyledLinkMore onClick={() => loadMoreSkills(stateSkills[0].totalSkills)} to="#">
                Load more
              </StyledLinkMore>
            )}
          </PopularSkills>
        </>
      </ContainerSkills>
    </>
  )
}

export default Skills
