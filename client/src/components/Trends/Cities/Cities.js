import React, { useEffect } from 'react'
import { CityContainer, StyledLink, TitleSmall, Total } from './styled'

function Cities({ allLocations }) {
  useEffect(() => {}, [])
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
