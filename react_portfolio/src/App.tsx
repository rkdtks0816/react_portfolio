import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css'
import Main from './pages/Main/Main';

function App() {

  return (
    <Router>
      <Route exact path='/' component={Main}/>
    </Router>
  )
}

export default App
