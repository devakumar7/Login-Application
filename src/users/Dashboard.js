import { useNavigate, Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import AuthContext from "../users/AuthProvider";
import { removeUserSession } from "../Utils/Common";

const Home = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const id = sessionStorage.getItem('cid');

    useEffect(() => {
        console.log(sessionStorage.getItem("accessToken"))
        console.log(sessionStorage.getItem("isAdmin"))
        console.log(sessionStorage.getItem("isAdmin") === true)
        console.log(sessionStorage.getItem("isAdmin") == true)
        console.log((sessionStorage.getItem("accessToken") === undefined || sessionStorage.getItem("accessToken") === null) && !sessionStorage.getItem("isAdmin") === true)
        if (sessionStorage.getItem("accessToken") === undefined || sessionStorage.getItem("accessToken") === null) {
            console.log("in the if block")
            navigate("/");
        } else {
            console.log("in the else block")
            if (sessionStorage.getItem("isAdmin") === true) {
                console.log("in the if block of else block")
                navigate("/");
            }
            else {
                console.log("in the else block of else block")
                navigate("/dashboard");
            }
        }
    }, []);

    const logout = async () => {
        removeUserSession();
        navigate('/');
    }

    return (
        <section>
            <h1>Home</h1>
            <br />
            <p>You are logged in!</p>
            <br />

            <nav>
                <Link to={`/users/viewuser/${id}`}>Profile</Link>
                <br />
                <Link to={`/users/edituser/${id}`}>Account</Link>
            </nav>

            <Link to="/editor">Go to the Editor page</Link>
            <br />
            <Link to="/admin">Go to the Admin page</Link>
            <br />
            <Link to="/lounge">Go to the Lounge</Link>
            <br />
            <Link to="/linkpage">Go to the link page</Link>
            <div className="flexGrow">
                <button onClick={logout}>Sign Out</button>
            </div>
        </section>
    )
}

export default Home
