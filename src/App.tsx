import './App.css'
import GeolocationContainer from './container'
import FunctionAsChild from './functionAsChild'
import MyComponent from './hocs'

function App() {
  return (
    <div className="App">
      <GeolocationContainer />
      <MyComponent />
      <FunctionAsChild />
    </div>
  )
}

export default App
