
import './App.css';
import Count from './component/Count'
import { useState } from 'react';
function App() {
  const [state, setState] = useState(2)
 
  return (
    <div className="App">
      <Count setState={setState} state={state } />
      
      
    </div>
  );
}

export default App;
