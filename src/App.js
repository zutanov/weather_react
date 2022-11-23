import './components/assets/style/App.scss';
import { Header } from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Today } from './components/today/Today';
import { useState } from 'react';
import { Weather } from './components/today/Weather';
const App = () => {

  const [data,setData] = useState({})

  return (
    <div className="App">
      <Router>
        <Header setData={setData}/>
          <Routes>
            <Route path='/' element={<Weather data={data}/>}/>
            <Route/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
