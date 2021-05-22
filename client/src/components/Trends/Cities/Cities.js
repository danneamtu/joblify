import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { star } from '../../../assets/icons/icons'
import { lightDark, lightDarker, darkLight } from '../../../styled-components/typography/colors'
import { Chip } from '../../../styled-components/buttons/buttons'
import { CityContainer, StyledLink, Title, TitleSmall, Hr, Total } from './styled'

function Cities({ allLocations }) {
  useEffect(() => {}, [])

  console.log('these are all locations', allLocations)
  const replaceMe = (string) => {
    return string.replace(/\s+/g, '-').toLowerCase()
  }

  return (
    <>
      <CityContainer>
        <TitleSmall className="mb-2">Popular cities</TitleSmall>
        {allLocations.map(
          (item, index) =>
            item.city?.length > 2 &&
            index < 6 && (
              <StyledLink to={`/jobs/search?location=${replaceMe(item.city)}`}>
                <div> {item.city}</div>
                <Total>{item.total}</Total>
              </StyledLink>
            )
        )}
      </CityContainer>
    </>
  )
}

export default Cities
