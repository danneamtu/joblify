import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DynoContainer, DynoTitle, DynoSubTitle, SuperLink } from './styled'
import { Btn } from '../../styled-components/buttons/buttons'
const text = ' Make a noise!'
function Dyno() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 1500)
  }, [])

  return (
    <>
      {show && (
        <DynoContainer href="https://www.joblify.be">
          <DynoSubTitle>Mmm... it seems that our free Dyno is sleeping</DynoSubTitle>
          <DynoSubTitle>Make a noise or simply refresh te page</DynoSubTitle>
          <SuperLink to={{ pathname: 'https://joblify.be' }} target="_blank">
            Wake up Dyno!
          </SuperLink>
        </DynoContainer>
      )}
    </>
  )
}

export default Dyno
