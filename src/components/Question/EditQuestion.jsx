import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";

const EditQuestion = () => {

    let history = useHistory();
    const {id} = useParams();
    // var questionPaper = [];
    // const [ questionPaper , setUser ] = useState({
    //     question: "",
    //     opt1: "",
    //     opt2: "",
    //     opt3: "",
    //     opt4: ""
    // })
    const [ questionPaper , setQuestionPaper ] = useState({
      question: "",
      options: []
    })

    
    useEffect(() => {
        loadUsers();
    }, [])

    const onInputChange = (e) => {
        console.log(e.target.value)
        setQuestionPaper({...questionPaper,  options:[...questionPaper.options, {[e.target.name] : e.target.value}]});
    }

    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:8084/questionsPaper/${id}`);
        // console.log('***********result***********', result);
        setQuestionPaper(result.data);
        console.log('*************', questionPaper);
    };

    const onSubmit = async (e) => {
        // const options = [];
        console.log('*************Question Paper AA gya re dekhlo*******************', questionPaper);
        console.log('*************Question Paper AA gya id ke post sath ******************', id);
        // options.push(questionPaper.opt1, questionPaper.opt, questionPaper.opt3, questionPaper.opt4);
        // questionPaper.options = options;
        e.preventDefault();
        // await axios.put(`http://localhost:8084/questionsPaper${id}`, questionPaper);
        // history.push("/user/question")
    }

    // const actions = [
    //     { label: "Add", value: questionPaper.options},
    //     { label: "Edit", value: 2 },
    //     { label: "Delete", value: 3 }
    //   ];


    return(
        <div className="container">
        <div className="w-75 mx-auto shadow py-4">
          <h1 className="text-center mb-5">Edit Question</h1>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <input
                type="test"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Question"
                name="question"
                value={questionPaper.question}
                onChange={(e) => onInputChange(e)}
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
                name="opt1"
                // value={questionPaper.options}
                // value={questionPaper.options.opt1}
                value={questionPaper.options.map((data) => (data.opt1 ))}
                  // value={
                  //   questionPaper.options.map((data, index) => {
                  //   // console.log('********questionPaper.options.opt1****************', questionPaper.options[0].opt1)
                  //   // console.log('********questionPaper.options****************', questionPaper.options)
                  //   // console.log('********questionPaper.options.opt1****************', questionPaper.options.opt1)
                  //   // console.log('********questionPaper.options.opt1****************', questionPaper.options[0].opt1)
                  //   console.log('************data****************', data.opt1);
                  //   return questionPaper(data, index);
                  //   // return data.opt1
                  //   // console.log('************data.opt1****************', data.opt1);
                  //   // console.log('************data.opt2****************', data.opt2);
                  //   // console.log('************data.opt3****************', data.opt3);
                  //   // console.log('************data.opt4****************', data.opt4);
                  //   // console.log('************data****************', data);
                  // //   data.options.map((data1) => {
                  // //   console.log('*********data1.opt1***********', data1.opt1);
                  // //     })
                //   })
                // }
                onChange={(e) => onInputChange(e)}
              />
              {
              console.log("arch",questionPaper.options.map((data) => (data.opt1 )))}
            </div>
            <div className="mb-3">
              <input
                type="test"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Option 2"
                name="opt2"
                value={questionPaper.options.opt2}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="test"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Option 3"
                name="opt3"
                value={questionPaper.options.opt3}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="test"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Option 4"
                name="opt4"
                value={questionPaper.options.opt4}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button className="form-control btn-danger">Update Question</button>
          </form>
        </div>
      </div>
    )
}

export default EditQuestion;