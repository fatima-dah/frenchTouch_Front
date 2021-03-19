import {useEffect} from 'react'
import Nav from './../NavBar/Nav'
import './Admin.css'

function Admin() {

    useEffect(() => {
      window.scrollTo(0, 0)
    });
  
    return (
      <div className="messageAsso" >
        <Nav/>
        <h2 className="titl"> ADMINISTRATION </h2>
       
      </div>
    );
  }
  
  export default Admin;
