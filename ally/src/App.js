import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Destinations from './pages/Destinations';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Destinations } />
    </BrowserRouter>
  );
}

export default App;
