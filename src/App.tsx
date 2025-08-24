import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChessGamePage from './pages/ChessGamePage/ChessGamePage.tsx';
import LandingPage from './pages/LandingPage/LandingPage.tsx';
import LoginPage from './pages/LoginPage/LoginPage.tsx';
import OAuth2RedirectHandler from './service/auth/OAuth2RedirectHandler.tsx';
import { AuthProvider } from './context/AuthContext.tsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.tsx';

export default function App() {
      return (
            <BrowserRouter>
                  <AuthProvider>
                        <Routes>
                              <Route path='/' element={<LandingPage />}></Route>
                              <Route path='/login' element={<LoginPage />}></Route>
                              <Route path='/register' element={<RegisterPage />}></Route>
                              <Route path='/game/:gameCode' element={<ChessGamePage />} />
                              <Route path={'/oauth2/redirect'} element={<OAuth2RedirectHandler />}></Route>
                        </Routes>
                  </AuthProvider>
            </BrowserRouter>
      );
}
