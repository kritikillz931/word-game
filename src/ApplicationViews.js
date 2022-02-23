import { Route, Router, Routes } from "react-router-dom"
import { GameDetails } from "./components/GameDetails"

import { WelcomePage } from "./components/welcomePage"





export const ApplicationViews = () => {
    return  (

        
        <>
    <main style={{
        margin: "5rem 2rem",
        lineHeight: "1.75rem"
    }}>
        <Routes>
            <Route exact path="/" element={<WelcomePage/>}/>
            {/* <Route  path="/Lobby" element={<Lobby/>}/> */}
            
        </Routes>

    </main>
    </>
        )
}