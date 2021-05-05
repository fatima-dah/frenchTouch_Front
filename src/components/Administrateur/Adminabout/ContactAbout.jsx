import {useState, useEffect} from "react";
import axios from "axios";
import "./ContactAbout.css";
import {FETCH} from './../../../Fetch'; 


function ContactAbout(){
    const [about, setAbout] = useState([]);
    
    useEffect(() => {
        axios.get(`${FETCH}/abouts`).then((res) => setAbout(res.data));
      }, []);

    return(
        <div>
            <h2>Contact client</h2>
            <div>
               {about.map((about) => (
                   <div className="abouts App">
                       <p className="">{about.firstname} </p>
                       <p className="">{about.lastname} </p>
                       <p className="">{about.email} </p>
                       <p className="">{about.message} </p>
                       </div>
               ))} 
            </div>

        </div>
    )
} 
export default ContactAbout;