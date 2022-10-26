import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Destinations from './pages/Destinations';
import Provider from './context/myProvider';
import SaveForm from './pages/SaveForm';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Route exact path="/" component={ Destinations } />
        <Route path="/saveForm" component={ SaveForm } />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
