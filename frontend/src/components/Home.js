import { Link ,useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home(){
    const navigate = useNavigate();
    function validentry() {
        const d = localStorage.getItem('user');
        
        if (!d) {
          notify("You are not logged in:)");
        } else {
          const parsedData = JSON.parse(d);
          if (parsedData.data.user_role==="Doctor") {
            console.log("good");
            navigate('/RecordDash');
          }
          else{
            notify("Sorry! You Can't Access this page");
          }
        }
    }
    function validhandle() {
        const d = localStorage.getItem('user');
        
        if (!d) {
          notify("You are not logged in:)");
        } else {
          const parsedData = JSON.parse(d);
          if (parsedData.data.user_role==="Patient" || parsedData.data.user_role==="Doctor") {
            console.log("good");
            navigate('/RecordDash');
          }
          else{
            notify("Sorry! You Can't Access this page");
          }
        }
    }
    function validhospital() {
        const d = localStorage.getItem('user');
        
        if (!d) {
          notify("You are not logged in:)");
        } else {
          const parsedData = JSON.parse(d);
          if (parsedData.data.user_role==="Hospital") {
            console.log("good");
            navigate('/RecordDash');
          }
          else{
            notify("Sorry! You Can't Access this page");
          }
        }
    }
    const notify = (d) => {
        toast(d);
    };

    return <>
        <div><ToastContainer />
        <div className="container">
            <div className="row" style={{marginTop:"50px"}}>
            <div className="col-md-6" style={{alignContent:"center",padding:"50px"}}>
                <div className="d-flex"  style={{alignItems:"center"}}>
                <div className="col-md-12"  style={{padding:"70px 5px 5px 10px",marginTop:"5px"}}>
                    <span style={{marginTop:"15px",color:"#90EE90"}}>Keep all your medical records at your Fingertips!</span>
                    <p className="display-5" style={{fontWeight:"bold",marginTop:"15px"}}>We Keep You and Your Records Safe till Death<span style={{color:"#90EE90"}}>.</span></p>
                    {/* Expert & professional home services */}
                    <p  style={{marginTop:"15px"}}>Book the finest home services at your fingertips. From skilled technicians to experienced handymen, we've got you covered. Trust us to transform your living spaces into havens of comfort and functionality.</p>
                    <button type="button" className="btn btn-primary btn-lg" style={{borderRadius:"0px",marginTop:"15px",backgroundColor:"#90EE90",border:"1px solid white"}}>Learn more.</button>
                </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="bg-image" style={{backgroundImage:"url(asian-young-main-group-hospital-professional-removebg-preview.png)",width:"100%",height:"400px",backgroundRepeat:"no-repeat",marginTop:"90px"}}></div>
            </div>
            </div>
        </div>
        <section style={{marginTop:"-30px"}}>
            <div className="container">
                <div className="row d-flex justify-content-center  h-100">
                <div className="col col-xl-10">
                    <div className="card mb-5" style={{borderRadius:"15px",boxShadow:"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",border:"1px"}}>
                    <div className="card-body p-4" style={{borderRadius:"15px"}}>
                      {/* #3c3b5b */}
                    <div>
                    <h1 style={{textAlign:"center"}} className="homelink"><span>
                        <button type="button" className="btn  btn-lg" style={{borderRadius:"10px",backgroundColor:"white",color:"black",marginLeft:"30px"}} onClick={validhandle}>View my Medical record<span style={{color:"#90EE90",fontWeight:"bold"}}>&rarr;</span></button>
                        <button type="button" className="btn  btn-lg" style={{borderRadius:"10px",backgroundColor:"white",color:"black",marginLeft:"30px"}}  onClick={validentry}>Record Entry <span style={{color:"#90EE90",fontWeight:"bold"}}>&rarr;</span></button>
                        <button type="button" className="btn  btn-lg" style={{borderRadius:"10px",backgroundColor:"white",color:"black",marginLeft:"30px"}}  onClick={validhospital}>View Hospital record<span style={{color:"#90EE90",fontWeight:"bold"}}>&rarr;</span></button>
                        </span></h1>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </div>
    </>
}