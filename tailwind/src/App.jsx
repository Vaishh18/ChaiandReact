
import './App.css'
import Card from './components/Card'

function App() {

let myObj ={
  username:"vaish",
  age:25
}
let newArr=[1,2,3]
  
  return (
    <>
      <h1 className='bg-green-500 text-black p-5 rounded-3xl'>Learning Tailwind</h1>
      <Card username="vaish" idNO="234"/>
    
      <Card username="tani"/>
    </>
  )
}

export default App
