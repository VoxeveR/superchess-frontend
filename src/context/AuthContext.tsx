import { createContext, useContext, useState } from 'react';
import { login as loginHandler, logout as logoutHandler } from '../service/auth/auth.tsx';
import { useNavigate } from 'react-router-dom';

type AuthContextType = {
      accessToken?: string;
      accessTokenType?: string;
      accessTokenExpires?: number;
      refreshToken?: string;
      refreshTokenExpires?: number;
      login: (email: string, password: string) => Promise<void>;
      logout: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
      const [accessToken, setAccessToken] = useState('');
      const [accessTokenExpires, setAccessTokenExpires] = useState<number | null>(null);
      const [accessTokenType, setAccessTokenType] = useState('');
      const [refreshToken, setRefreshToken] = useState('');
      const [refreshTokenExpires, setRefreshTokenExpires] = useState<number | null>(null);
      const navigate = useNavigate();

      const login = async (email: string, password: string) => {
            try {
                  console.log('Trying to login with email: ' + email);
                  console.log('Trying to login with password: ' + password);
                  const responseData = await loginHandler(email, password);

                  setAccessToken(responseData.access_token);
                  sessionStorage.setItem('accessToken', responseData.access_token);
                  setAccessTokenExpires(responseData.access_token_expires_in);
                  sessionStorage.setItem('accessTokenExpires', responseData.access_token_expires_in.toString());
                  setAccessTokenType(responseData.access_token_type);
                  sessionStorage.setItem('accessTokenType', responseData.access_token_type);
                  setRefreshToken(responseData.refresh_token);
                  sessionStorage.setItem('refreshToken', responseData.refresh_token);
                  setRefreshTokenExpires(responseData.refresh_token_expires_in);
                  sessionStorage.setItem('refreshTokenExpires', responseData.refresh_token_expires_in.toString());

                  navigate('/StarterPage');
            } catch (error) {
                  console.error('Login failed', error);
                  throw error;
            }
      };

      const logout = async () => {
            try {
                  await logoutHandler();
                  navigate('/');
            } catch (error) {
                  console.error('Logout failed', error);
                  throw error;
            }
      };

      const value = {
            accessToken: accessToken,
            accessTokenType: accessTokenType,
            accessTokenExpires: accessTokenExpires,
            refreshToken: refreshToken,
            refreshTokenExpires: refreshTokenExpires,
            login,
            logout,
      };

      return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
      const context = useContext(AuthContext);

      if (!context) throw new Error('useAuth must be used within the AuthProvider');

      return context;
}
