import './App.css'
import AxiosMethods from './Component/AxiosMethods'
import AxiosMethodsimg from './Component/AxiosMethodsimg'
import Fetchmethod from './Component/Fetchmethod'
import Usestate from './Component/Usestate'
function App() {
  return (
    <div>
    <Usestate/>
    <Fetchmethod/>
    {/* <AxiosMethods/> */}
    <hr />
    <AxiosMethodsimg/>
    </div>
  )
}

export default App
