import { useEffect, useState } from "react";
import { Link,Outlet, json, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout(){
    const [details,setDetails] = useState(null);
    const navigate = useNavigate();
    const notify = (d) => {
      toast(d);
  };

    useEffect(()=>{
      const d = localStorage.getItem('user');
      if(!details){
        setDetails(JSON.parse(d));
      }
      // console.log(details.data)
    },[details])

    function handleLogout(e){
      e.preventDefault();
      localStorage.removeItem('user');
      navigate('/');
      window.location.reload();notify("Logged out Successfully!");
    }

    return <>
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed">
            <div className="container">
              <Link to="/"style={{textDecoration:"none"}}><p className="navbar-brand fs-1 text-black">
                <b>Digi<span style={{color:"#90EE90"}}>Record</span></b>
              </p></Link>
              <button className="navbar-toggler shadow-none color-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" style={{color: "black"}}>
                <span className="navbar-toggler-icon">
                    <i class="bi bi-list" style={{color:"black"}}></i>
                </span>
              </button>
              <div className="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header text-black border-bottom">
                  <h5 className="offcanvas-title fs-1" id="offcanvasNavbarLabel"><b>DigiRecord</b></h5>
                  <button type="button" className="btn-close btn-close-dark shadow-none" data-bs-dismiss="offcanvas" aria-label="Close">

                  </button>
                </div>
                <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                  <ul className="navbar-nav flex-grow-1 ">
                    {/* <li className="nav-item">
                      <button className="nav-link mx-2 active text-black "  aria-current="page">Home</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link mx-2 text-black" >Book a Service</button>
                    </li>
                    <li className="nav-item">
                      <button className="nav-link mx-2 text-black" >About</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link mx-2 text-black" >Help</button>
                    </li> */}
                    <li className="nav-item">
                        <button className="nav-link mx-2 text-black">About Us</button>
                    </li>
                    <li className="nav-item float-right" >
                        <button className="nav-link text-black" ><Link to="/Patient">Patient Form</Link></button>
                    </li>
                  </ul>
                  {/* {
                    0?
                    <> <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                    <button className="text-black px-4 py-2 bg-white border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" style={{marginRight:"10px"}}>
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                      <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                      User</button>
                    <button className="text-white px-4 py-2 rounded-5 border-0" style={{backgroundColor:"#90EE90"}}>Logout</button>
                  </div>
                    </>:
                    <> 
                    <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                    <button className="text-black px-4 py-2 bg-white border-0"><Link to="/Login" style={{textDecoration:"none",color:"black"}}>Login</Link></button>
                    <button className="text-white px-3 py-2 rounded-1 border-0" style={{backgroundColor:"#90EE90",boxShadow:"0 0 15px 0 #ccc"}}><Link to="/Signup" style={{textDecoration:"none",color:"white"}}>Signup</Link></button>
                  </div>
                    </>
                  } */}
                  {
                    details?
                    <> <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                    {/* <p className="text-white px-4 py-2" style={{marginTop:"15px",backgroundColor:"blueviolet",borderRadius:"50%"}}>{details.data.user_name[0]}</p> */}
                    <button className="text-black px-4 py-2 bg-white border-0">{details.data.user_name}</button>
                    <button className="text-white px-3 py-2 rounded-1 border-0" style={{backgroundColor:"#90EE90",boxShadow:"0 0 15px 0 #ccc"}} onClick={handleLogout}>Logout</button>
                  </div>
                    </>:
                    <> <ToastContainer /><div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                    <button className="text-black px-4 py-2 bg-white border-0"><Link style={{textDecoration:"none",color:"black"}} to="/Login">{details?details.data.name:"Login"}</Link></button>
                    <button className="text-white px-3 py-2 rounded-1 border-0" style={{backgroundColor:"#90EE90",boxShadow:"0 0 15px 0 #ccc"}}><Link style={{textDecoration:"none",color:"white"}} to="/Signup">Signup</Link></button>
                  </div>
                    </>
                  }
                </div>
              </div>
            </div>
        </nav>
        <div>
        <Outlet/>
        </div>
        </div>
    </>
}