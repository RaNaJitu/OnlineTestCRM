import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  // const [users, setUser] = useState([]);
  // useEffect(() => {
  //   // console.log("my name is jitu");
  //   loadUsers();
  // }, []);

  // const loadUsers = async () => {
  //   const result = await axios.get("http://localhost:8084/users");
  //   setUser(result.data);
  //   console.log(result);
  // };
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <div className="row">
          <div className="col-md-3">
          <Link className='btn btn-primary homeButton' exact to="user/Details" size="lg">
              <div>
                <h3 className="textStyle">Users</h3>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
          <Link className='btn btn-danger homeButton' exact to="user/Details" size="lg">
              <div>
                <h3 className="textStyle">Users Details</h3>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
          <Link className='btn btn-warning homeButton' exact to="/user/question" size="lg">
              <div>
                <h3 className="textStyle">Question</h3>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
          <Link className='btn btn-success homeButton' exact to="user/Details" size="lg">
              <div>
                <h3 className="textStyle">Users Details</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
