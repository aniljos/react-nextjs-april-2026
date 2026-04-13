import Counter from "./components/Counter"
import Message from "./components/Message"

function App() {
  
  return (
   <div>
      <h3>React Vite Application</h3>
      <Message text="Hello React" color="blue" />
      {/* <Message text="Welcome to the trainings" color="green"/> */}
      <Counter initCount={5}/>
      <Counter initCount={15}/>
   </div>
  )
}

export default App
