import React, {useState, useEffect } from 'react';
import Axios from "axios";
import { useHistory, useParams } from 'react-router-dom';

const EditUser = () => {
    let history = useHistory();
    const {id} = useParams();

    const [ user, setUser ] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })

    const onInputChange = (e) => {
        console.log(e.target.value)
        setUser({...user, [ e.target.name]: e.target.value });
    }

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await Axios.get(`http://localhost:8084/users/${id}`);
        setUser(result.data);
        // console.log(result);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await Axios.put(`http://localhost:8084/users/${id}`, user);
        history.push("/user/Details")
    }
    return (
        <div className="container">
      <div className="w-75 mx-auto shadow py-4">
        <h1 className='text-center mb-5'>Edit User</h1>
        <form onSubmit={e => onSubmit(e) }>
        <div className="mb-3">
          <input
            type="test"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Name"
            name='name'
            value={user.name}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="test"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Username"
            name='username'
            value={user.username}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="test"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your email...  name@example.com"
            name='email'
            value={user.email}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="test"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Phone No"
            name='phone'
            value={user.phone}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="test"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Website"
            name='website'
            value={user.website}
            onChange={e => onInputChange(e)}
          />
        </div>
        <button className="form-control btn-warning" >
            Update User
        </button>
        </form>
      </div>
    </div>
    );
};

export default EditUser;