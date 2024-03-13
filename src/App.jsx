import { Routes, Route } from "react-router-dom"
import { MainLayout } from "./layout/main-layout"


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout/>} >

        </Route>
      </Routes>
    </div>
  )
}

export default App
