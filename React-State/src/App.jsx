import { use, useState } from 'react';
import { sculptureList } from './data.js';


function App() {

  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let sculpture = sculptureList[index];


  function handleNextClick() {
    if (index < sculptureList.length - 1) {
      setIndex  (index + 1);
    }
    else {
      setIndex(0);
    }
  }


  function handlePreviousClick() {
    if (index > 0) {
      setIndex  (index - 1);
    } else {
      setIndex(sculptureList.length - 1)
    }
  }

  function handeleMoreClick() {
    setShowMore(!showMore);
  }



  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <button onClick={handlePreviousClick}>previous</button>

      <h2>
        <i> {sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>

      <button onClick={handeleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button> <br />

      <img src={sculpture.url} alt={sculpture.alt} />

      {showMore && <p>{sculpture.description}</p>}

    </>
  )
}

export default App