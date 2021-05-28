import React, { useState } from 'react'
import { ContainerSkills, AddThis, PopularSkills, StyledLinkMore, Title } from './styled'
import { insertSkill } from '../../../api/index'
function Add() {
  const [state, getState] = useState('')
  const getSkill = (e) => {
    getState(e.target.value)
  }
  const postSkill = () => {
    // send to api request
    insertSkill(state)
    alert(state)
    getState('')
  }
  return (
    <AddThis>
      <input value={state} placeholder="Add skill" onChange={getSkill} type="text" />
      <button onClick={postSkill}>Submit</button>
    </AddThis>
  )
}

export default Add
