import { useState } from 'react';
import './RegisterPage.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import DraggableChessPawn from '../../utils/DraggableChessPawn.tsx';
import { draggableChessPieces } from './data/draggableChessPieces.ts';
import { register as register } from '../../service/auth/auth.tsx';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
      const [email, setEmail] = useState('');
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [terms, setTerms] = useState(false);
      const [error, setError] = useState<string | null>(null);

      const googleButtonHandler = () => {
            window.location.href = 'http://localhost:8080/oauth2/authorization/google';
      };

      const facebookButtonHandler = () => {
            window.location.href = 'http://localhost:8080/oauth2/authorization/facebook';
      };

      const classicRegisterHandler = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (password !== confirmPassword) {
                  setError('Passwords do not match');
                  return;
            }
            if (!email || !username || !password) {
                  setError('All fields are required!');
                  return;
            }
            if (!terms) {
                  setError('You need to accept terms and conditions!');
                  return;
            }
            try {
                  await register(email, username, password);
            } catch (error) {
                  console.error('ERROR: Register failed.', error);
                  setError('Register failed. Please check your credentials and try again.');
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
                              <form onSubmit={classicRegisterHandler} className='flex flex-col items-center'>
                                    <input
                                          className={'text-tiny m-1.5 w-1/2 rounded-3xl bg-[#5E998D] p-2.5 placeholder-white'}
                                          placeholder={'Username'}
                                          onChange={(e) => setUsername(e.target.value)}
                                    ></input>
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
                                    <input
                                          className={'text-tiny m-1.5 w-1/2 rounded-3xl bg-[#5E998D] p-2.5 placeholder-white'}
                                          placeholder={'Confirm Password'}
                                          type={'password'}
                                          onChange={(e) => setConfirmPassword(e.target.value)}
                                    ></input>
                                    <label className={'m-2 flex cursor-pointer items-center gap-2'}>
                                          <input type={'checkbox'} name='terms' className={'peer absolute top-0 left-0 h-5 w-5 cursor-pointer opacity-0'}></input>
                                          <span
                                                className='flex h-5 w-5 items-center justify-center rounded border border-gray-400 peer-checked:bg-[#5E998D]'
                                                onClick={() => {
                                                      setTerms(!terms);
                                                }}
                                          ></span>
                                          <a className={'text-tiny'}>I agree to the Terms & Conditions</a>
                                    </label>
                                    <button
                                          type='submit'
                                          className={'m-2 mx-auto h-auto w-3/8 rounded-2xl bg-[#1D3C37] p-2 text-sm font-bold text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:bg-emerald-950'}
                                    >
                                          REGISTER
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
                                    <i className='bi bi-facebook'></i> FACEBOOK
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
                                    <Link to={'/login'} className={'text-tiny hover:text-[#5E998D]'}>
                                          Already have an account? Log in!
                                    </Link>
                              </div>
                        </div>
                  </div>
            </>
      );
};

// @ts-ignore
export default RegisterPage;
