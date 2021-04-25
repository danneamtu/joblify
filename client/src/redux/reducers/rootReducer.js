import { combineReducers } from 'redux'
import jobReducer from './jobReducer'
import jobsReducer from './jobsReducer'

const rootReducer = combineReducers({
  jobs: jobsReducer,
  job: jobReducer,
})

export default rootReducer
