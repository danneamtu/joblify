import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Navbar from './containers/components/Navbar/Navbar'
import HomePage from './containers/pages/HomePage'
function App(props) {
  console.log('tdsa', props)
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/jobs/:currentJobId" component={HomePage}></Route>
      </Switch>
    </Router>
  )
}

export default App
