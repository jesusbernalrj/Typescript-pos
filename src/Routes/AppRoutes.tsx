import { Route, Routes } from "react-router-dom"
import IndexMain from "../page/IndexMain"

function AppRoutes() {
  return (
    <Routes>
   <Route path="/" element={<IndexMain/>}/>

    </Routes>
  )
}

export default AppRoutes