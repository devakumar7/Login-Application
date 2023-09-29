import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Register from "./users/Register";
import RegistrationForm from "./users/RegistrationForm";
import { BrowserRouter as Router, Routes, Route, Switch, Navigate } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import Login from "../src/users/Login";
import Dashboard from "../src/users/Dashboard";
/* import useAuth from "../../fullstack-frontend-master/src/users/useAuth" */
import RequireAuth from "../src/users/RequireAuth"
import Lounge from "../src/users/Lounge";
/* import useToken from '../users/onEnter'; */
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, getUser, removeUserSession, setUserSession } from './Utils/Common';


const ROLES = {
  'customer': 2001,
  'seller': 1984,
  'admin': 5150
}

function App() {

  /* const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  } */
  /* console.log(getUser()); */
  console.log(getToken());



  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/signup" element={<RegistrationForm />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/viewusers" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          {/* <Route exact path="/edituser/:id" element={<EditUser />} /> */}
          {/* <Route exact path="/viewuser/:id" element={<ViewUser />} /> */}

          {/* <Route exact path='/viewuser/:id' element={<PrivateRoute />}>
            <Route exact path='/viewuser/:id' element={<ViewUser />} />
          </Route> */}

          <Route exact path='/users/' element={<PrivateRoute />}>
            <Route exact path='viewuser/:id' element={<ViewUser />} />
            <Route exact path='edituser/:id' element={<EditUser />} />
          </Route>

          {/* <Route exact path="/viewuser/:id" element={<ViewUser />} onEnter={onEnter()} /> */}

          {/* (sessionStorage.getItem('emailId') !== null && sessionStorage.getItem('emailId') !== undefined && sessionStorage.getItem('cid') === id)?
          (<Route exact path="/viewuser/:id" element={<ViewUser />} /> ):(<Route exact path="/login" element={<Login />} />) */}

          {/* <PrivateRoute path="/viewuser/:id" element={<ViewUser />} /> */}
          <Route exact path="*" element={<div>Page Not Found</div>} />

          {/* <PublicRoute path="/login" component={Login} /> */}
          {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}

          {/* we want to protect these routes */}
          <Route element={<RequireAuth allowedRoles={[ROLES.admin]} />}>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/viewusers" element={<Home />} /> */}
          </Route>

          {/* <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
            <Route path="editor" element={<Editor />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.admin]} />}>
            <Route path="admin" element={<Admin />} />
          </Route> */}

          <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.admin]} />}>
            <Route path="lounge" element={<Lounge />} />
          </Route>

          {/* catch all */}
          {/* <Route path="*" element={<Missing />} /> */}



        </Routes>


        <Footer />
      </Router>
    </div >
  );
}
/* function Login(){
  return <div>User Page</div>;
}
function UserPage(){
  return <div>User Page</div>;
}

function Admin(){
  return <div>Admin Page</div>;
} */

export default App;
