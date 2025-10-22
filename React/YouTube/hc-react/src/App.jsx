// import './App.css'
// import { useState } from 'react';

// function App() {
//   let [counter, setCounter] = useState(0);

//   const addValue = () => {
//     // counter = counter + 1
//     setCounter(counter + 1);
//   }

//   const removeValue = () => {
//     setCounter(counter - 1);
//   }

//   return (
//     <>
//       <h1>Counter using Hook</h1>
//       <h2>Counter Value : {counter}</h2>
//       <button
//       onClick={addValue}
//       >Add Value</button>
//       <br />
//       <button
//       onClick={removeValue}
//       >Remove Value</button>
//     </>
//   )
// }

// export default App

import MediaCard from './components/Card'
import './App.css'
function App() {
  // let myObj = {
  //   username: "Farhan",
  //   age: 21
  // }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 mb-5 rounded-xl flex justify-center'>Tailwind Test</h1>
      {/* <MediaCard someObj = {myObj}/> */}
      <div className='grid grid-cols-4 ml-3'>
        <MediaCard username="Farhan" pic={"/src/assets/Goku.jpg"} />
        <MediaCard username="Tayyab" pic={"/src/assets/no.jpg"} />
        <MediaCard username="Ali" pic={"/src/assets/GTR.jpg"} />
        <MediaCard username="Bilal" pic={"/src/assets/opop.jpg"} />
        <MediaCard />
        <MediaCard />
        <MediaCard username="Ali" pic={"/src/assets/GTR.jpg"} />
        <MediaCard username="Bilal" pic={"/src/assets/opop.jpg"} />
        <MediaCard />
        <MediaCard username="Farhan" pic={"/src/assets/Goku.jpg"} />
      </div>
    </>
  )
}

export default App
