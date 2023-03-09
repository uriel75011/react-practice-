import Navbar  from './Navbar';  
import Home from './Home';  
import { Route, Routes } from 'react-router-dom';
import Notfound from './Notfound';  
import Blogsdeatail from './Blogsdeatail';
import Create from './Create';


function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <div className="content">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/names/:id" element={<Blogsdeatail />} />
      <Route path="/create" element={<Create/>} />
      <Route path="*" element={<Notfound/>} />
      </Routes>
       </div>
       
    </div>
    
  );
 
}

export default App;
