import { Outlet } from "react-router-dom"
import Header from "../components/Header"

function HomeLayout() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}
export default HomeLayout