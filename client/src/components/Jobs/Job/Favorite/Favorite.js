import { useDispatch, useSelector } from 'react-redux'

import { star, starFill } from '../../../../assets/icons/icons'
import { CircleButton } from '../../../../styled-components/buttons/buttons'
import { addFavorite, removeFavorite } from '../../../../redux/actions/visitorActions'
import { Favorite } from './styled'

function FavoriteStar({ jobId }) {
  const { _id: visitorId, favorites } = useSelector((state) => state.visitor)
  const dispatch = useDispatch()

  const addJobFavorite = () => {
    dispatch(addFavorite(jobId, visitorId))
  }
  const removeJobFavorite = () => {
    dispatch(removeFavorite(jobId, visitorId))
  }

  const circleStar = () => (favorites.includes(jobId) ? <CircleButton onClick={removeJobFavorite}> {starFill}</CircleButton> : <CircleButton onClick={addJobFavorite}>{star}</CircleButton>)

  return <Favorite>{circleStar()}</Favorite>
}

export default FavoriteStar
