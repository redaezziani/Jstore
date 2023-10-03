import './App.css'
import {Route , Routes} from 'react-router-dom'
import {    Home,
  Products,
  Product,
  Done,
  Singin,
  Singup,
  Faild,
  Notfound
} from './utils/Routes'
function App() {
  return (
    <div className="w-full relative ">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/done" element={<Done/>} />
        <Route path="/singin" element={<Singin/>} />
        <Route path="/singup" element={<Singup/>} />
        <Route path="/faild" element={<Faild/>} />
        <Route path="*" element={<Notfound/>} />
      </Routes>	
    </div>
  )
}

export default App
