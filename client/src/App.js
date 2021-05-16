import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage'
import Favorites from './pages/Favorites'
import User from './pages/User'
import Auth from './pages/Auth'
import { GlobalStyle } from './styled-components/Global'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/users/:id" component={User}></Route>
        <Route path="/:jobs" component={HomePage}></Route>
        <Route path="/jobs/:currentJobId" component={HomePage}></Route>
        <Route path="/favorites" component={Favorites}></Route>
      </Switch>
    </Router>
  )
}

export default App
