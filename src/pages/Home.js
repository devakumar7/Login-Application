import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, NavLink, useNavigate } from "react-router-dom";
import { removeUserSession } from "../Utils/Common";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { cid } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("accessToken") === undefined && sessionStorage.getItem("accessToken") === null) {
      navigate("/");
    }
    else {
      navigate("/viewusers");
    }
  }, []);

  const logout = async () => {
    // if used in more components, this should be in context 
    // axios to /logout endpoint 
    // setAuth({});
    removeUserSession();
    navigate('/');
  }

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8520/viewCusts");
    console.log(result)
    /* setUsers(result.data); */
    setUsers(result.data);
  };

  const deleteUser = async (cid) => {
    await axios.get(`http://localhost:8520/deleteCust/${cid}`);
    loadUsers();
  };

  return (
    <div className="container">

      <div className="py-4">
        <div className="flexGrow">
          <button className="btn btn-danger mx-2" onClick={logout}>Sign Out</button>
        </div>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S No</th>
              <th scope="col">Customer Id</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Email</th>
              <th scope="col">contactNo</th>
              <th scope="col">address</th>
              <th scope="col">city</th>
              <th scope="col">state</th>
              <th scope="col">country</th>
              <th scope="col">gender</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.cid}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.emailId}</td>
                <td>{user.contactNo}</td>
                <td>{user.address}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.country}</td>
                <td>{user.gender}</td>
                <td>
                  <NavLink
                    className="btn btn-primary mx-2"
                    to={`/users/viewuser/${user.cid}`}
                  >
                    View
                  </NavLink>
                  {/* <Navigate to="/viewCust/${user.cid}" /> */}
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/users/edituser/${user.cid}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.cid)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
