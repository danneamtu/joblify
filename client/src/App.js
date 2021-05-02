import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage'
import Auth from './pages/Auth'
import { GlobalStyle } from './styled-components/Global'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/jobs/:currentJobId" component={HomePage}></Route>
        <Route path="/auth" component={Auth}></Route>
      </Switch>
    </Router>
  )
}

export default App
