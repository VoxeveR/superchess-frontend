import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChessGamePage from "./ChessGamePage.tsx";
import StarterPage from "./StarterPage.tsx";
import LoginPage from "./LoginPage.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StarterPage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path='game/:gameCode' element={<ChessGamePage />} />
            </Routes>
        </BrowserRouter>
    );
}
