import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './container/Home';

function App() {
  return (
    <main>
      <section>
        <Router>
          <Switch>
            <Route path="/">
              <div>
                <Home /> 
              </div>
            </Route>
          </Switch>
        </Router>
      </section>
    </main>
  );
}

export default App;
