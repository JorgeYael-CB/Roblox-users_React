import { Route, Routes } from "react-router-dom"
import { MainPageApp } from "../pages/MainPageApp"



export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPageApp/>}/>
            </Routes>
        </>
    )
}
