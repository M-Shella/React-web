import AppNavbar from './components/AppNavbar';
import FillText from './components/FillText';
import * as RScroll from 'react-scroll';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style.css'

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar 
          Portfolio={() => RScroll.scroller.scrollTo('Portfolio',{smooth: true})}
          AboutMe={() => RScroll.scroller.scrollTo('AboutMe',{smooth: true})}
          Contact={() => RScroll.scroller.scrollTo('Contact',{smooth: true})}
        />
        <FillText/>
      </div>
    </Router>
  );
}

export default App;
