import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChessGamePage from "./pages/ChessGamePage.tsx";
import StarterPage from "./pages/StarterPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import OAuth2RedirectHandler from "./OAuth2RedirectHandler.tsx";
import {AuthProvider} from "./context/AuthContext.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<StarterPage />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path='/game/:gameCode' element={<ChessGamePage />} />

                   <Route path={"/oauth2/redirect"} element={<OAuth2RedirectHandler/>}></Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}
