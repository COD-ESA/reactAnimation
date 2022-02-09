import React from 'react'
import { useState } from 'react';
import './app.sass';
import { Button } from '../Button/Button';
import { Square } from '../Square/Square';


export const context = React.createContext();

function App() {

  const [state, setState] = useState(false);

  const handleSetState = () => {
    console.log("im run: ", state);

    setState(!state);
  }

  return (
    <context.Provider value={{handleSetState, state}}>
      <div className="App">
        <Button/>

        <Square/>


      </div>
    </context.Provider>

  );
}

export default App;
