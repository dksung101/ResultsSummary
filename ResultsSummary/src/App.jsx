import { useEffect, useState } from 'react'
import Box from './components/Box'
import List from './components/List'
import Button from './components/Button'
import Circle from './components/Circle';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('src/data.json');
      const json = await result.json();
      setData(json);
    }
    fetchData();
  }, []);


  const transformData = 
    data.map((item) => {
      return item.score;
    })

  const average = ((transformData) => {
    let sum = 0;
    for (let i=0; i<transformData.length; i++) {
      sum+=transformData[i];
    }
    return Math.floor(sum/transformData.length);
  })
  (transformData);

  return (
    <>
      <div className='container'>
        {/* Left box */}
        <Box>
          <h1>Your Result</h1>
          <Circle average={average}></Circle>
          <h2>Great</h2>
          <p>You scored higher than 65% of <br />
          the people who have taken <br /> these tests.</p>
          
        </Box>
        {/* Right box */}
        <Box>
          <List reaction={transformData[0]} memory={transformData[1]} verbal={transformData[2]} visual={transformData[3]}></List>
          <Button></Button>
        </Box>
      </div>
    </>
  )
}

export default App
