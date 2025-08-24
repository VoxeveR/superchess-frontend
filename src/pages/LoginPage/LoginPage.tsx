import { useState } from 'react';
import { useAuth } from '../../context/AuthContext.tsx';
import './LoginPage.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import DraggableChessPawn from '../../utils/DraggableChessPawn.tsx';
import { draggableChessPieces } from './data/draggableChessPieces.ts';
import { Link } from 'react-router-dom';

const LoginPage = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState<string | null>(null);
      const auth = useAuth();

      const googleButtonHandler = () => {
            window.location.href = 'http://localhost:8080/oauth2/authorization/google';
      };

      const facebookButtonHandler = () => {
            window.location.href = 'http://localhost:8080/oauth2/authorization/facebook';
      };

      const classicLoginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            try {
                  await auth.login(email, password);
            } catch (error) {
                  console.error('ERROR: Login failed.', error);
                  setError('Login failed. Please check your credentials and try again.');
            }
      };

      return (
            <>
                  {draggableChessPieces.map((piece, index) => (
                        <DraggableChessPawn key={index} pawn={piece.pawn} size={piece.size} position={piece.position} />
                  ))}
                  {error && (
                        <div className='absolute mb-2 w-full rounded-xl bg-red-500 p-3 text-center text-sm font-bold text-white shadow-lg'>
                              {error}
                              <button onClick={() => setError(null)} className='ml-3 rounded bg-red-700 px-2 py-1 text-xs'>
                                    X
                              </button>
                        </div>
                  )}
                  <div className={'flex h-screen min-w-1/2 items-center justify-center'}>
                        <div className={'flex flex-col rounded-2xl bg-[#2C5B52]'}>
                              <img src={'/assets/auth/logo.svg'} className={'mx-auto h-3/8 w-3/8 select-none'} alt={'chess-pawn-logotype'}></img>
                              <a className={'w-full p-2 text-base'}>Sign in to your account</a>
                              <form onSubmit={classicLoginHandler} className='flex flex-col items-center'>
                                    <input
                                          className={'text-tiny m-1.5 w-1/2 rounded-3xl bg-[#5E998D] p-2.5 placeholder-white'}
                                          placeholder={'Email'}
                                          onChange={(e) => setEmail(e.target.value)}
                                    ></input>
                                    <input
                                          className={'text-tiny m-1.5 w-1/2 rounded-3xl bg-[#5E998D] p-2.5 placeholder-white'}
                                          placeholder={'Password'}
                                          type={'password'}
                                          onChange={(e) => setPassword(e.target.value)}
                                    ></input>
                                    <button
                                          type='button'
                                          className={'m-2 mx-auto h-auto w-3/8 rounded-2xl bg-[#1D3C37] p-2 text-sm font-bold text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:bg-emerald-950'}
                                    >
                                          LOGIN
                                    </button>
                              </form>

                              <div className={'flex items-center justify-center'}>
                                    <span className={'h-px w-1/10 bg-gray-300'}></span>
                                    <a className={'ms-2 me-2 text-sm'}>or</a>
                                    <span className={'h-px w-1/10 bg-gray-300'}></span>
                              </div>
                              <button
                                    onClick={() => facebookButtonHandler()}
                                    className={
                                          'm-2 mx-auto mb-0 flex h-auto w-3/8 justify-between rounded-2xl bg-[#1D3C37] p-2 text-sm font-bold text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:bg-emerald-950'
                                    }
                              >
                                    <i className='bi bi-facebook'></i>FACEBOOK
                                    <div></div>
                              </button>
                              <button
                                    onClick={() => googleButtonHandler()}
                                    className={
                                          'm-2 mx-auto mb-8 flex h-auto w-3/8 justify-between rounded-2xl bg-[#1D3C37] p-2 text-sm font-bold text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:bg-emerald-950'
                                    }
                              >
                                    <i className='bi bi-google'></i>GOOGLE
                                    <div></div>
                              </button>
                              <div className={'rounded-b-2xl bg-[#1D3C37] p-2.5'}>
                                    <Link to={'/register'} className={'text-tiny hover:text-[#5E998D]'}>
                                          New? Sign up - and start playing chess!
                                    </Link>
                              </div>
                        </div>
                  </div>
            </>
      );
};

// @ts-ignore
export default LoginPage;
