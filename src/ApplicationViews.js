import { Route, Router, Routes } from "react-router-dom"
import { GameCode } from "./components/GameCode"

import { GameLobby } from "./components/GameLobby"

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
            <Route path={`/GameLobby/${GameCode}`} element={<GameLobby/>}/>
            
        </Routes>

    </main>
    </>
        )
}