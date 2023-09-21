import {  Field, Form, Formik,ErrorMessage } from "formik";
import axios from "axios";
import { useContext, useState } from "react";
import { json } from "react-router";
import {Link} from 'react-router-dom';
import { useNavigate} from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Signup(){
    // const [cardno,setcardno]=useState([])
    const Navigate = useNavigate();
    const [account,setAccount] = useState("");
    const notify = (d) => {
        toast(d);
    };

    const submitHandler = async(values, setSubmitting) => {
        console.log(account);
        // uniqueCard();
        const value = {user_userid:values.uname,user_name:values.name,user_email:values.email,user_password:values.password,user_role:account}
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
        <section>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                <div className="col col-xl-10">
                    <div className="card" style={{border:"none"}}>
                    <div className="row g-0">
                        <div className="col-md-6 col-lg-5 d-none d-md-block" style={{margin:"60px 0 0 0"}}>
                        <img src="5643102.jpg"
                            alt="login form" className="img-fluid" style={{borderRadius:"1rem 0 0 1rem"}}/>
                        </div>
                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">
                        <div className="d-flex align-items-center mb-3 pb-1">
                                <i className="fas fa-cubes fa-2x me-3" style={{color:"#ff6219"}}></i>
                                <span className="h1 fw-bold mb-0">Signup</span>
                            </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"}}>create your account</h5>
                        <ToastContainer />
                        <Formik
                        onSubmit={submitHandler}
                        initialValues={{ email: "",password:"",name: ""}}
                        validate={validator}
                        style={{margin:'0 auto'}}
                        >
                        {({ isSubmitting }) => (
                            <Form>

                            <div className="form-outline mb-4">
                                <div className="form-group">
                                <label className="form-label" for="form2Example17" >Your Name</label>
                                <Field text="text" id="name" className="form-control form-control-lg" name="name" placeholder=" " />
                                <ErrorMessage class="form-text text-muted" name="name" id="name" component="div" />
                                </div>

                            </div> 

                            <div className="form-outline mb-4">
                                <div className="form-group">
                                <label className="form-label" for="form2Example17" >Your Unique username</label>
                                <Field text="text" id="uname" className="form-control form-control-lg" name="uname" placeholder=" " />
                                <ErrorMessage class="form-text text-muted" name="uname" id="uname" component="div" />
                                </div>

                            </div> 

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

                            <div className="form-outline mb-4">
                                <div className="form-group">
                                <label className="form-label" for="form2Example27">Select Who you are *</label>
                                {/* <Field as="select" name="accounttype" id="accounttype" style={{marginLeft:"20px",padding:"5px"}} onChange={(e)=>setAccount(e.target.option)} >
                                  <option value="Professional">Professional</option>
                                  <option value="Consumer">Consumer</option>
                                </Field> */}
                                <select  style={{marginLeft:"20px",padding:"5px",border:"1px solid gray"}} onChange={(e)=>setAccount(e.target.value)}>
                                    <option value="Select-one">Select-one</option>
                                    <option value="Patient">Patient</option>
                                    <option value="Doctor">Doctor</option>
                                    <option value="Hospital">Hospital</option>
                                </select>
                                </div>
                                {/* <Field type="password" id="password" className="form-control form-control-lg" name="password" placeholder=" "/>
                                <ErrorMessage class="form-text text-muted" name="password" id="password" component="div" /> */}
                            </div>

                            {/* <select name="pets" id="pet-select">
                                <option value="">--Please choose an option--</option>
                                <option value="dog">Dog</option>
                            </select> */}

                            <div className="pt-1 mb-4">
                                <button className="btn btn-dark btn-lg btn-block" type="submit" disabled={isSubmitting}>Create</button>
                            </div>
                            <p className="mb-5 pb-lg-2" style={{color:"#393f81"}}>Already have an account? <button 
                                style={{color:"black",border:"none",backgroundColor:"white"}}><Link to='/Login' style={{textDecoration:"none",color:"black"}}>Login Here</Link></button></p>
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