import {useLocation, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

const OAuth2RedirectHandler = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log("xddd");
        const params = new URLSearchParams(location.search);
        console.log("DEBUG: JWT-TOKEN: " + params.get("jwtToken"));
        console.log("DEBUG: REFRESH-TOKEN: " + params.get("refreshToken"));

    }, [location.search]);

    return <div> Redirecting... </div>;
}


export default OAuth2RedirectHandler;
