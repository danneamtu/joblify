import { combineReducers } from 'redux'
import jobReducer from './jobReducer'
import jobsReducer from './jobsReducer'
import locationsReducer from './locationsReducer'

const rootReducer = combineReducers({
  jobs: jobsReducer,
  job: jobReducer,
  locations: locationsReducer,
})

export default rootReducer
