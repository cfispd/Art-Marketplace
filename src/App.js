import logo from './logo.svg';
import './Painting.css';
import Artist from './components/Artist';
import Initial from './components/Initial';
import Header from './components/Header';
import Popular from './components/Popular';
import Like from './components/Like';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <Header />
    //   <Initial />
    //   <Popular />
    //   <Like />
    //   <Artist />
    // </div>
    <Router>
    <Header />
    <Routes>
        <Route exact path='/'  element={<><Initial /><Popular /><Like /><Artist /></>} />
       
    </Routes>
    </Router>
    
  );
}

export default App;
