import { Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/MainPage"
import { FantasyLayout } from "../ui/FantasyLayout"

export const MainRouter = () => {
  return (
    <FantasyLayout>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
        </Routes>
    </FantasyLayout>
    )
}
