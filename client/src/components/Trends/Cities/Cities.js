import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CityContainer, StyledLink, TitleSmall, Total } from './styled'
import { replaceSpaceWithDash } from '../../../utils/utils'
import { getLocations } from '../../../redux/actions/locationsActions'

function Cities() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLocations())
  }, [dispatch])

  const {
    data: { data: allLocations },
  } = useSelector((state) => state.locations)
  return (
    <>
      <CityContainer>
        <TitleSmall className="mb-2">Popular cities</TitleSmall>
        {allLocations &&
          allLocations.map(
            (item, index) =>
              item.city?.length > 2 &&
              index < 6 && (
                <StyledLink key={item._id} to={`/jobs/search?location=${replaceSpaceWithDash(item.city).toLowerCase()}`}>
                  {item.city}
                  <Total>{item.total}</Total>
                </StyledLink>
              )
          )}
      </CityContainer>
    </>
  )
}

export default Cities
