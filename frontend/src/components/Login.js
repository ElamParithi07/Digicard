import {  Field, Form, Formik,ErrorMessage } from "formik";
import axios from "axios";
// import { useContext, useState } from "react";
import { json } from "react-router";
import {Link} from 'react-router-dom'
import { useNavigate} from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login(){
    
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    const Navigate = useNavigate();
    const notify = async(d) => {
        await toast(d);
    };
    const submitHandler = async(values, setSubmitting,) => {
        // alert(JSON.stringify(values));
       
        const value={user_email:values.email,user_password:values.password};
        const user=await axios.post('http://localhost:8082/userlogin',value);
        if(user.data=="invalid"){
            notify("No User Found!");
        }
        else{
            
            localStorage.setItem('user',JSON.stringify(user));
            callhome();
        }
        console.log(user.data)
        
      };
      const callhome=()=>{
        notify("Logged In Successfully!");
        wait(5000);
        Navigate('/');
        window.location.reload();
    }
      const validator=(values)=>{
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
         values.email.indexOf("@")<0 || values.email.indexOf("@")>values.email.lastIndexOf(".")
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
    };
    return <>
        <section className="vh-60">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                    <div className="card" style={{border:"0"}}>
                    <div className="row g-0">
                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                        <img src="5643102.jpg"
                            alt="login form" className="img-fluid" style={{borderRadius:"1rem 0 0 1rem",marginTop:"50px"}}/>
                        </div>
                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">
                            <div className="d-flex align-items-center mb-3 pb-1">
                                <i className="fas fa-cubes fa-2x me-3" style={{color:"#ff6219"}}></i>
                                <span className="h1 fw-bold mb-0">Login</span>
                            </div>

                            <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"}}>Login into your account</h5>
                            <ToastContainer />
                        <Formik
                        onSubmit={submitHandler}
                        initialValues={{ email: "",password:"" }}
                        validate={validator}
                        style={{margin:'0 auto'}}
                        >
                        {({ isSubmitting }) => (
                            <Form>

                            <div className="form-outline mb-4">
                                <div className="form-group">
                                <label className="form-label" for="form2Example17" >Email address</label>
                                <Field type="email" id="email" className="form-control form-control-lg" name="email" placeholder=" " />
                                <ErrorMessage class="form-text text-muted" name="email" id="email" component="div" />
                                </div>
                            </div>

                            <div className="form-outline mb-4">
                                <div className="form-group">
                                <label className="form-label" for="form2Example27" >Password</label>
                                <Field type="password" id="password" className="form-control form-control-lg" name="password" placeholder=" "/>
                                <ErrorMessage class="form-text text-muted" name="password" id="password" component="div" />
                                </div>
                            </div>
    

                            <div className="pt-1 mb-4">
                                <button className="btn btn-dark btn-lg btn-block" type="submit" disabled={isSubmitting}>Login</button>
                            </div>
                            <p className="mb-5 pb-lg-2" style={{color:"#393f81"}}>Don't have an account? <button
                                style={{color:"black",border:"none",backgroundColor:"white"}}><Link to='/Signup' style={{textDecoration:"none",color:"black"}}>Register Here</Link></button></p>
                            </Form>
                        )}
                        </Formik>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
}