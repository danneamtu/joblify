import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage'
import Favorites from './pages/Favorites'
import UserPage from './pages/UserPage'
import Auth from './pages/Auth'
import JobPage from './pages/JobPage'
import SkillsPage from './pages/SkillsPage'
import { GlobalStyle } from './styled-components/Global'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/skills" component={SkillsPage}></Route>
        <Route exact path="/favorites" component={Favorites}></Route>

        <Route path="/users/:id" component={UserPage}></Route>
        <Route path="/jobs/view/:id" component={JobPage}></Route>
        <Route path="/:jobs" component={HomePage}></Route>
      </Switch>
    </Router>
  )
}

export default App
