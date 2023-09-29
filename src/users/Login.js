import { useRef, useState, useEffect } from 'react';
import useAuth from './useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { setUserSession } from '../Utils/Common';

import axios from "axios";

const Login = () => {
    /* const { setAuth } = useAuth(); */

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [emailId, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        console.log(sessionStorage.getItem("accessToken"))
        console.log(sessionStorage.getItem("accessToken") !== undefined)
        console.log(sessionStorage.getItem("accessToken") !== null)
        console.log(sessionStorage.getItem("accessToken") !== null || sessionStorage.getItem("accessToken") !== undefined)

        if (sessionStorage.getItem("accessToken") === undefined || sessionStorage.getItem("accessToken") === null) {
            console.log("In the if block");
            navigate("/");
        }
    }, []);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [emailId, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8520/login",
                JSON.stringify({ emailId, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    /* withCredentials: true */
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const cid = response?.data?.cid;
            const customer = response?.data?.customer;
            const roles = response?.data?.roles;
            const finalRole = response?.data?.finalRole;
            const isAdmin = response?.data?.isAdmin;
            console.log(accessToken);
            console.log(cid);
            console.log(customer);
            console.log(roles);

            const id = cid;

            /* setAuth({ emailId, password, roles, accessToken, cid }); */
            setUserSession(emailId, password, accessToken, cid, customer, isAdmin, finalRole);
            console.log("UserSession Set Successfully");
            /* sessionStorage.setItem('emailId', emailId);
            sessionStorage.setItem('accessToken', accessToken);
            sessionStorage.setItem('cid', cid); */
            setUser('');
            setPwd('');
            console.log("end of try block before navigate statement");
            if (isAdmin == true) {
                navigate('/viewusers');
            } else {
                navigate('/dashboard');
            }
            /*  navigate('/dashboard'); */
            /* navigate("/viewuser/"+id); */
            console.log("end of try block after navigate statement");

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
        console.log("methodCompleted");
    }

    return (

        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="emailId">EmailId :</label>
                <input
                    type="text"
                    id="emailId"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={emailId}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={password}
                    required
                />
                <button>Sign In</button>
            </form>
            <p>
                Need an Account?<br />
                <span className="line">
                    <Link to="/register">Sign Up</Link>
                </span>
            </p>
        </section>

    )
}

export default Login
