
function LoginPage() {

    return (
        <div
            className={"flex flex-col justify-center justify-self-center w-1/3 min-h-1/2 bg-black mt-60"}>
            <img src={"/assets/123.jpg"} className={"w-50 mx-auto h-auto"} alt={"chess-logo"}></img>
            <a className={""}>Sign in to your account</a>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">Email address</label>
            <input className={"mx-auto rounded-md bg-white/5 px-3 py-1.5 text-white outline-2"} placeholder={"Login"}></input>
            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">Password</label>
            <input className={"mx-auto"} placeholder={"Password"}></input>
            <h1>Not a member? Register now!</h1>
        </div>
    );
}

export default LoginPage