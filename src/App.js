import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './container/Home'
import Post from './container/Post'

function App() {
  return (
    <main>
      <section>
        <Router>
          <div>
            <Switch>
              <Route path="/:subject/:id">
                <Post />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </section>
    </main>
  )
}

export default App
