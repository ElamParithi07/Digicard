import {  Field, Form, Formik,ErrorMessage } from "formik";
import axios from "axios";
import { useContext, useState } from "react";
import { json } from "react-router";
import {Link} from 'react-router-dom';
import { useNavigate} from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Patient(){
    const Navigate = useNavigate();
    const [txtarea,settxtarea] = useState("");
    const notify = (d) => {
        toast(d);
    };
    const submitHandler = async(values, setSubmitting) => {
        
        // uniqueCard();
        const value = {user_userid:values.uname,user_name:values.name,user_email:values.email,user_password:values.password}
        alert(JSON.stringify(value));
        const msg=await axios.post('http://localhost:8082/newuser',value)
        console.log(msg.data.message)
        
        if(msg.data.message=="invalid"){
            notify("User Already Exist!");
        }
        else{
            notify("Your Account created Successfully!");
        }
        // notify(msg.data.message);
        // alert(msg);
    };
    const validator=(values)=>{
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        }
        else if (
         values.email.indexOf("@")<0 || values.email.indexOf("@")>values.email.lastIndexOf(".")
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
    };
    return <>
    <div className="px-4 py-5 px-md-5 text-left text-lg-start" >
      <div className="container">
        <div className="row gx-lg-5 align-items-left">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{justifyContent:"center",alignItems:"center"}}>
            <h1 className="my-5 display-3 fw-bold ls-tight">
              The best offer <br />
              <span className="text" style={{color:"#90EE90"}}>for your business</span>
            </h1>
            <p style={{Color: "hsl(217, 10%, 50.8%)"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet, itaque accusantium odio, soluta, corrupti aliquam
              quibusdam tempora at cupiditate quis eum maiores libero
              veritatis? Dicta facilis sint aliquid ipsum atque?
            </p>
          </div>
  
         
          <div className="col-xl-6" >
            <div className="card-body p-md-5 text-black">
              <h3 className="mb-5 text-uppercase">Patient registration form</h3>
              
              <Formik
              onSubmit={submitHandler}
              initialValues={{ email: "",password:"",name: ""}}
              validate={validator}
              style={{margin:'0 auto'}}
              >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-outline mb-4">
                            <label className="form-label " for="form3Example8">Name</label>
                            <Field text="text" id="form3Example8" className="form-control form-control-lg" name="name"/>
                            <ErrorMessage class="form-text text-muted" name="name" id="name" component="div" />
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <label className="form-label" for="form3Example1m">Age</label>
                                <Field type="number" id="form3Example1m" className="form-control form-control-lg" name="age"/>
                                <ErrorMessage class="form-text text-muted" name="age" id="age" component="div" />
                            </div>
                            </div>
                            <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <label className="form-label" for="form3Example1n">DOB</label>
                                <Field type="date" id="form3Example1n" className="form-control form-control-lg" name="dob"/>
                                <ErrorMessage class="form-text text-muted" name="dob" id="dob" component="div" />
                            </div>
                            </div>
                        </div>

                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                            <h6 className="form-outline mb-4">Gender: </h6>
                            <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                value="option1" />
                            <label className="form-check-label" for="femaleGender">Male</label>
                            </div>

                            <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                value="option2" />
                            <label className="form-check-label" for="maleGender">Female</label>
                            </div>

                            <div className="form-check form-check-inline mb-0">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                value="option3" />
                            <label className="form-check-label" for="otherGender">Other</label>
                            </div>

                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" for="form3Example97">Mobile</label>
                            <Field type="number" id="form3Example97" className="form-control form-control-lg" name="mobile"/>
                            <ErrorMessage class="form-text text-muted" name="mobile" id="mobile" component="div" />
                        </div>

                        <div className="form-outline mb-4">
                            <label  for="form3Example97">Blood Group</label>
                            <Field type="text" id="form3Example97" className="form-control form-control-lg" name="bgrp" />
                            <ErrorMessage class="form-text text-muted" name="bgrp" id="bgrp" component="div" />
                        </div>

                        <div className="form-group">
                            <label className="mb-0 me-4">Address</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>settxtarea(e.target.value)}></textarea>
                        </div>

                        <div className="d-flex justify-content-end pt-3">
                            <button className="btn btn-warning btn-lg ms-2" type="submit" disabled={isSubmitting}>Submit form</button>
                        </div>
                    </Form>
                )}
              </Formik>
              
                          
               
              
              
              
              
              
    </div>
    </div>
    </div>
    </div>
    </div>
    
    </>
}