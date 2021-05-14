import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { star } from '../../../assets/icons/icons'
import { lightDark, lightDarker, darkLight } from '../../../styled-components/typography/colors'
import { Chip } from '../../../styled-components/buttons/buttons'

const ContainerSkills = styled.div`
  padding-bottom: 1em;
  margin-bottom: 1em;
  border-bottom: solid 1px lightDark;
  & img {
    margin-right: 12px;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  min-width: 100%;
  text-decoration: none;
  text-transform: capitalize;
  color: ${lightDarker};
  transition: 0.2s;
  &:hover {
    color: ${lightDark};
  }
  & svg {
    font-size: 0.6em;
  }
`
const StyledLinkMore = styled(StyledLink)`
  font-size: 0.9em;
  margin-top: 0.5em;
`

const Title = styled.h4`
  font-size: 1em;
  color: ${lightDarker};
  margin-bottom: 0.5em;
`
const Logo = styled.div`
  max-width: 1.5em;
  max-height: 1.5em;
  margin-right: 0.5em;
  & img {
    width: 100%;
  }
`

function Cities({ allLocations }) {
  useEffect(() => {}, [])

  console.log('these are all locations', allLocations)
  const replaceMe = (string) => {
    return string.replace(/\s+/g, '-').toLowerCase()
  }

  return (
    <>
      <ContainerSkills>
        <Title>Locations</Title>
        {allLocations.map(
          (item, index) =>
            item.city?.length > 2 &&
            index < 20 && (
              <StyledLink to={`/jobs/search?location=${replaceMe(item.city)}`}>
                <div> {item.city}</div>
                <Chip style={{ marginLeft: 'auto', marginRight: '0.5em' }}>{item.total}</Chip>
              </StyledLink>
            )
        )}
      </ContainerSkills>
    </>
  )
}

export default Cities
