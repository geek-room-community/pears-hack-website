import React, { useState } from 'react';
import CircularDiv from './Components/circulardiv';
import ScrollContent from './Components/scrollcontent';
import PieChart from './Components/circulardiv';
import './App.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="scroll-content-container">
        <AboutUs /> {/* Replace with your content pages */}
        <ScrollContent
          totalIndexes={10}
          onIndexChange={(index) => setActiveIndex(index)} // Update active index
        />
      </div>
      
      <div className="cirdiv">
        <PieChart activeIndex={activeIndex - 5} />
      </div>
      
    </>
  );
}

export default App;
