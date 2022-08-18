import React, {useState} from 'react';
import Axios from "axios";
import { useHistory } from 'react-router-dom';

const AddUser = () => {
    let history = useHistory();

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

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("*********user***********", user);
        await Axios.post("http://localhost:8084/users", user);
        history.push("/user/Details")
    }
    return (
        <div className="container">
      <div className="w-75 mx-auto shadow py-4">
        <h1 className='text-center mb-5'>Add User</h1>
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
        <button className="form-control btn-primary" >
            Add User
        </button>
        </form>
      </div>
    </div>
    );
};

export default AddUser;