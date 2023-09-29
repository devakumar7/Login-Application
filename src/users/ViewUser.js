import axios from "axios";
import React, { useEffect, useState } from "react";
/* import { Link, useParams } from "react-router-dom"; */
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import { removeUserSession } from "../Utils/Common";

export default function ViewUser() {
  const [user, setUser] = useState({
    cid: "",
    firstName: "",
    lastName: "",
    emailId: "",
    contactNo: "",
    address: "",
    city: "",
    state: "",
    country: "",
    gender: "",
  });
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);
  console.log(sessionStorage.getItem("isAdmin"));

  const isAdmin = sessionStorage.getItem("isAdmin");
  console.log(isAdmin);

  let tempId = undefined;
  console.log(tempId);

  console.log(!(sessionStorage.getItem('isAdmin') === false))
  /* !isAdmin ? tempId = sessionStorage.getItem('cid') : tempId = id; */

  console.log(tempId);
  console.log(id);
  console.log(isAdmin == false);
  console.log(isAdmin === false);

  if (isAdmin) {
    console.log(tempId);
    /* tempId = sessionStorage.getItem('cid') */
    tempId = id
    console.log(tempId === ":id")
    /* (tempId===":id")? tempId */
    console.log(tempId);
  }
  else {
    console.log(tempId)
    tempId = id
    console.log(tempId)
  }


  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("accessToken") === undefined && sessionStorage.getItem("accessToken") === null) {
      navigate("/");
    }

  }, []);

  const logout = async () => {
    // if used in more components, this should be in context 
    // axios to /logout endpoint 
    // setAuth({});
    removeUserSession();
    navigate('/');
  }


  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8520/viewCust/${tempId}`);
    console.log(result)
    setUser(result.data.data);
  }

  return (
    <div className="container pb-5" >
      <div className="row" >
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Customer Details</h2>

          <div className="card" >
            <div className="card-header">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Customer Id:</b>
                  {user.cid}
                </li>
                <li className="list-group-item">
                  <b>FirstName:</b>
                  {user.firstName}
                </li>
                <li className="list-group-item">
                  <b>lastName:</b>
                  {user.lastName}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {user.emailId}
                </li>
                <li className="list-group-item">
                  <b>contactNo:</b>
                  {user.contactNo}
                </li>
                <li className="list-group-item">
                  <b>address:</b>
                  {user.address}
                </li>
                <li className="list-group-item">
                  <b>city:</b>
                  {user.city}
                </li>
                <li className="list-group-item">
                  <b>state:</b>
                  {user.state}
                </li>
                <li className="list-group-item">
                  <b>country:</b>
                  {user.country}
                </li>
                <li className="list-group-item">
                  <b>gender:</b>
                  {user.gender}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/users/edituser/" + tempId}>
            Update
          </Link>

          {/* <Link className="btn btn-danger my-2"  to={"/"}>
            logout
          </Link> */}

          <button className="btn btn-danger my-2" onClick={logout}>Sign Out</button>

        </div>
      </div>
    </div>
  );
}
