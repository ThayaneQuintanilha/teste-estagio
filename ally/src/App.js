import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Destinations from './pages/Destinations';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={ Destinations } ></Route>
    </BrowserRouter>
  );
}

export default App;
