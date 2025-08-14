import {Link} from "react-router-dom";
import {useState} from "react";
import {useAuth} from "../context/AuthContext.tsx"

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuth();

    const googleButtonHandler = () => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/google';
    }

    const facebookButtonHandler = () =>  {
        window.location.href = 'http://localhost:8080/oauth2/authorization/facebook';
    }

    const classicLoginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            auth.login(email, password)
        } catch (error) {
            console.error("ERROR: Login failed.", error);
        }
    }

    return (
        <div className={"flex flex-col  justify-center justify-self-center w-1/3 min-h-1/2 bg-black mt-60"}>
            <img src={"/assets/123.jpg"} className={"w-50 mx-auto h-auto"} alt={"chess-logo"}></img>
            <a className={""}>Sign in to your account</a>
            <form onSubmit={classicLoginHandler}>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">Email address</label>
                <input className={"mx-auto rounded-md bg-white/5 px-3 py-1.5 text-white outline-2"} placeholder={"Login"} onChange={(e) => setEmail(e.target.value)}></input>
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">Password</label>
                <input className={"mx-auto rounded-md bg-white/5 px-3 py-1.5 text-white outline-2"} placeholder={"Password"} onChange={(e) => setPassword(e.target.value)}></input>
                <br></br>
                <button type="submit" className={"mx-auto h-auto w-1/4 bg-emerald-800 hover:bg-emerald-950 text-white font-bold border rounded-2xl py-2 my-2"}>LOGIN</button>
            </form>
            <h1>Not a member? Register now!</h1>
            <h3>---- Or -----</h3>
            <button onClick={() => googleButtonHandler()} className={" mx-auto h-auto w-1/4 bg-emerald-800 hover:bg-emerald-950 text-white font-bold border rounded-2xl py-2 my-2"}>GOOGLE</button>
            <button onClick={() => facebookButtonHandler()} className={" mx-auto h-auto w-1/4 bg-emerald-800 hover:bg-emerald-950 text-white font-bold border rounded-2xl py-2"}>FACEBOOK</button>
        </div>
    );
}

export default LoginPage