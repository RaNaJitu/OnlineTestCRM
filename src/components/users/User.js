import React,   { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const User = () => {

    const {id} = useParams();

    const [ user, setUser ] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })
    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      const result = await axios.get(`http://localhost:8084/users/${id}`);
      setUser(result.data);
    };

    return (
        <div className="container">
            <Link className="btn btn-warning textStyle" to='/user/Details'>
                Back To Home
            </Link>
            <h1 className="display-4">User Id: {id}</h1><br></br>
            <hr />
            <ul>
                <li className="list-group-item">name: {user.name}</li>
                <li className="list-group-item">username: {user.username}</li>
                <li className="list-group-item">Email: {user.email}</li>
                <li className="list-group-item">Phone Number: {user.phone}</li>
                <li className="list-group-item">Website: {user.website}</li>
            </ul>
        </div>
    )
}

export default User;