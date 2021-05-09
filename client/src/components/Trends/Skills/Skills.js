import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { addSkill } from '../../../redux/actions/skillsActions'
import { getVisitor } from '../../../redux/actions/visitorActions'
import { getSkills } from '../../../redux/actions/skillsActions'
import { ContainerSkills, StyledLink, StyledLinkMore, Title, ToggleSkill } from './styled'

import Skill from './Skill/Skill'

function Skills() {
  const dispatch = useDispatch()
  const [visitorId, setVisitorId] = useState(null)
  const [mySkills, setMySkills] = useState([])
  const [showLoadMore, setShowLoadMore] = useState(true)
  const [start, setStart] = useState(5)
  const { data: stateSkills } = useSelector((state) => state.skills)
  const { _id, skills } = useSelector((state) => state.visitor)

  useEffect(() => {
    const arrSkills = skills.map((item) => item.skill)
    const filterData = `start=0&nin=${arrSkills}`
    dispatch(getSkills(filterData))
    setVisitorId(_id)
  }, [])

  useEffect(() => {
    setMySkills(skills)
  }, [skills])

  const loadMoreSkills = (totalResults) => {
    const arrSkills = skills.map((item) => item.skill)
    setStart(start + 5)
    const filterData = `start=${start}&nin=${arrSkills}`
    dispatch(getSkills(filterData))
    totalResults < start + 5 && setShowLoadMore(false)
  }
  return (
    <ContainerSkills>
      <Title>Popular Skills</Title>
      {mySkills && mySkills.map((item) => item.skill && <Skill active={true} data={item} visitorId={_id} item={item} />)}
      {stateSkills && stateSkills.map((item) => !item.totalSkills && <Skill visitorId={_id} item={item} />)}
      {showLoadMore && (
        <StyledLinkMore onClick={() => loadMoreSkills(stateSkills[0].totalSkills)} to="#">
          View more
        </StyledLinkMore>
      )}
    </ContainerSkills>
  )
}

export default Skills
