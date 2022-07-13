import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    // console.log("my name is jitu");
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8084/users");
    setUser(result.data.reverse()); //this is for use revers the array data
    // setUser(result.data);    //this is display the actual array data
    // console.log(result);
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:8084/users/${id}`);
    loadUsers();
  }
  return (
    <div className="container">
      <div className="py-4">
        <h1>Users Details</h1>
        <Link class="btn btn-outline-dark btn-action"  to='/user/addUser'>Add user</Link>
        <table class="table border shadow btn-top">
          <thead class="table-dark">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row"> {index + 1} </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-primary btn-action" exact to={`/user/${user.id}`}>View</Link>
                  <Link class="btn btn-outline-primary btn-action" exact to={`/user/edit/${user.id}`}>Edit</Link>
                  <Link class="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
