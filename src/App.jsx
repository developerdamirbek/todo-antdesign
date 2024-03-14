import { Routes, Route } from "react-router-dom"
import { MainLayout } from "./layout/main-layout"
import AddUser from "./pages/add-user"
import UserList from "./pages/userlist"


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout/>} >
          <Route path="add-user" element={<AddUser/>}/>
          <Route path="user-list" element={<UserList/>}/>

        </Route>
      </Routes>
    </div>
  )
}

export default App
