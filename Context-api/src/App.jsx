// UseContext()=React Hooks that allows you too share values between multiple level of components without passing props through each level

import React from 'react'
import ComponentA from './Components/ComponentA'
import ComponentB from './Components/ComponentB'
import ComponentC from './Components/ComponentC';
import ComponentD from './Components/ComponentD';

function App() {
  return (
    <div>
      <ComponentA />
     
    </div>
  );
}

export default App