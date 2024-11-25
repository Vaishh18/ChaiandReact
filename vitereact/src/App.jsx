
import Chai from "./chai"

function App() {
 const username="chai"

return (


    <>
    <h1>Hello people {username}{/*this is how to use variables-THIS is called Evaluted Expression*/}</h1>
  {/* <h1>Apple</h1>             in return we can only return 1 component eg <App/>     but if want to return html tags as well then wrap it in a <div>/div> or simply <></> (this is fragmentation*/}
  <Chai/>
    </>  
  )
}

export default App
