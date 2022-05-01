import React, { useState } from 'react';
import TheLayout from './views/pages/TheLayout';

function App() {
  const [state, setState] = useState();

  return (
    <div >
      <TheLayout />
    </div>
  );
}

export default App;
