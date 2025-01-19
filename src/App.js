import React, { useState } from 'react';
import CircularDiv from './Components/circulardiv';
import ScrollContent from './Components/scrollcontent';
import PieChart from './Components/circulardiv';
import Timer from './Components/Timer';
import './App.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (

    // <>
    // <Timer/>
    // </>
    <>
      <div className="scroll-content-container">
        <ScrollContent
          totalIndexes={10}
          onIndexChange={(index) => setActiveIndex(index)}
        />
      </div>

      <div className="cirdiv">
        <PieChart activeIndex={activeIndex - 5} />
      </div>
    </>
  );
}

export default App;
