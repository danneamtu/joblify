import { useDispatch, useSelector } from 'react-redux'

import { star, starFill } from '../../../../assets/icons/icons'
import { CircleButton, Btn } from '../../../../styled-components/buttons/buttons'
import { addFavorite, removeFavorite } from '../../../../redux/actions/visitorActions'
import { Favorite } from './styled'

function FavoriteStar({ jobId, save, circle }) {
  const { _id: visitorId, favorites } = useSelector((state) => state.visitor)
  const dispatch = useDispatch()
  const addJobFavorite = () => {
    dispatch(addFavorite(jobId, visitorId))
  }
  const removeJobFavorite = () => {
    dispatch(removeFavorite(jobId, visitorId))
  }
  const circleStar = () =>
    favorites.includes(jobId) ? (
      <Btn className={circle ? 'btn-circle' : 'btn-outline d-inline-flex ai-center right-icon'} onClick={removeJobFavorite}>
        {!circle && 'Unsave'}
        {starFill}
      </Btn>
    ) : (
      <Btn className={circle ? 'btn-circle' : 'btn-outline d-inline-flex ai-center js-center right-icon'} onClick={addJobFavorite}>
        {!circle && 'Save'}
        {star}
      </Btn>
    )
  return <Favorite save={save}>{circleStar()}</Favorite>
}

export default FavoriteStar
