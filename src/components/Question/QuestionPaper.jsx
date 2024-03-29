import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  const [questionsPaper, setUser] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    // console.log("my name is jitu");
    // console.log("my name is jitu", questionsPaper);
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8084/questionsPaper");
    // console.log('***********result***************', result)
    // console.log('***********id***************', id)
    setUser(result.data);
  };

  const deleteQuestion = async id => {
    console.log('******DELETE KE AANDER AA GYA*******', id);
    await axios.delete(`http://localhost:8084/questionsPaper/${id}`);
    loadUsers();
  }
  return (
    <div className="container">
      <div className="py-4">
        <h1>Questions Details</h1>
        <h1>{questionsPaper.option}</h1>
        <Link class="btn btn-warning btn-action" to="/question/add">
          Add Question
        </Link>
        <table class="table border shadow btn-top">
          <thead class="table-dark">
            <tr>
              <th scope="col">Q.No</th>
              <th scope="col">Question </th>
              <th scope="col">
                Options
                {/* <th style={{ border: "1px solid" }}>opt 1</th>
                <th style={{ border: "1px solid" }}>opt 2</th>
                <th style={{ border: "1px solid" }}>opt 3</th>
                <th style={{ border: "1px solid" }}>opt 4</th> */}
              </th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {questionsPaper.map((user, index) => (
              <tr>
                {/* <th scope="row"> {user.id} </th> */}
                <th scope="row"> {index + 1} </th>
                <td>{user.question}</td>
                <th>
                  {user.option}
                  {/* {user.options.map(data => ( <td> {data.opt1} </td>))} */}
                  <ul>
                    {/* <li className="travelcompany-input"> */}
                      {user.options.map((data) => (
                         <li>{data.opt1 || data.opt2 || data.opt3 || data.opt4}</li>
                      ))}
                    {/* </li> */}
                  </ul>
                  {/* <td style={{ border: "1px solid" }}>{user.options.map(data => ( <td> {data.opt1} </td>))}</td>
                  <td style={{ border: "1px solid" }}>{user.options.map(data => ( <td> {data.opt2} </td>))}</td>
                  <td style={{ border: "1px solid" }}>{user.options.map(data => ( <td> {data.opt3} </td>))}</td>
                  <td style={{ border: "1px solid" }}>{user.options.map(data => ( <td> {data.opt4} </td>))}</td> */}
                </th>
                <td>
                  <Link
                    class="btn btn-outline-primary btn-action"
                    to={`/question/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link class="btn btn-danger" onClick={() => deleteQuestion(user.id)}>
                    Delete
                  </Link>
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
