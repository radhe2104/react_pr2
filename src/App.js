import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const App = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => { 
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime,1000)
  return (
    <div>
      <h1>{ctime}</h1>
    </div>

  );
}

export default App;
