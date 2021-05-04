import { combineReducers } from 'redux'
import jobReducer from './jobReducer'
import jobsReducer from './jobsReducer'
import authReducer from './authReducer'
import locationsReducer from './locationsReducer'

const rootReducer = combineReducers({
  jobs: jobsReducer,
  job: jobReducer,
  locations: locationsReducer,
  user: authReducer,
})

export default rootReducer
