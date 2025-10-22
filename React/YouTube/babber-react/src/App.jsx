import './App.css'
import LoggerComponent from './components/LoggerComponent'
// import Counter from './components/Counter'
// import { useEffect, useState } from 'react'

function App() {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);

  // Run on every render
  // useEffect(() => {
  //   alert("I will run on each render")
  // })

  // Run on 1st render
  // useEffect(() => {
  //       alert("I will run on each render")
  // }, [])

  // useEffect(() => {
  //   alert("I will run on each render of count")
  // }, [count])

  // multiple snippets
  // useEffect(() => {
  //   alert("update on total and count")
  // }, [count,total])

  // now add cleanup function
  // useEffect(() => {
  //   alert("Counter is updated")

  //   return () => {
  //     alert("Count is unmounted from UI")
  //   }
  // }, [count])

  // function handleClick() {
  //   setCount(count + 2);
  // }

  // function handleTotal() {
  //   setTotal(total + 2);
  // }


  return (
    // <>
    //   <Counter />
    // </>

    // <>
    //   <div>
    //     Count is : {count}
    //     <br />
    //     <button onClick={handleClick}>Update Count</button>
    //   </div>
    //   <div>
    //     Total is : {total}
    //     <br />
    //     <button onClick={handleTotal}>Update Total</button>
    //   </div>
    // </>

    <>
    <LoggerComponent/>

    </>
  )
}

export default App
