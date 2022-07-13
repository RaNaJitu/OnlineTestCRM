import React, {useState} from "react";
import Axios from "axios";
import { useHistory } from 'react-router-dom';
import Select from 'react-select';

const AddQuestion = () => {

    let history = useHistory();
    // var questionPaper = [];
    // const [ questionPaper , setUser ] = useState({
    //     question: "",
    //     opt1: "",
    //     opt2: "",
    //     opt3: "",
    //     opt4: ""
    // })
    const [ questionPaper , setUser ] = useState({
      question: "",
      options: [
        {
          opt1: "",
          opt2: "",
          opt3: "",
          opt4: "",
        }
      ]
    })

    const onInputChange = (e) => {
        console.log(e.target.value)
        setUser({...questionPaper, [ e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        const options = [];
        console.log('*************Question Paper AA gya re dekhlo*******************', questionPaper);
        options.push(questionPaper.opt1, questionPaper.opt, questionPaper.opt3, questionPaper.opt4);
        questionPaper.options = options;
        e.preventDefault();
        await Axios.post("http://localhost:8084/questionsPaper", questionPaper);
        history.push("/user/question")
    }

    // const actions = [
    //     { label: "Add", value: questionPaper.options},
    //     { label: "Edit", value: 2 },
    //     { label: "Delete", value: 3 }
    //   ];


    return (
        <div className="container">
      <div className="w-75 mx-auto shadow py-4">
        <h1 className='text-center mb-5'>Add Question</h1>
        <form onSubmit={e => onSubmit(e) }>
        <div className="mb-3">
          <input
            type="test"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Question"
            name='question'
            // value={questionPaper.question}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
        {/* <Select options={ actions } /> */}
          <input
            type="test"
            className="form-control"
            disabled
            id="exampleFormControlInput1"
            placeholder="Enter Options"
          />
        </div>
        <div className="mb-3">
          <input
            type="test"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter option 1"
            name='opt1'
            value={questionPaper.options}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="test"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Option 2"
            name='opt2'
            // value={questionPaper.options.map(data => ( data.opt2))}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="test"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Option 3"
            name='opt3'
            // value={questionPaper.options.map(data => ( data.opt3))}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="test"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Option 4"
            name='opt4'
            // value={questionPaper.options.map(data => ( data.opt4))}
            onChange={e => onInputChange(e)}
          />
        </div>
        <button className="form-control btn-success" >
            Add User
        </button>
        </form>
      </div>
    </div>
    )
}

export default AddQuestion;