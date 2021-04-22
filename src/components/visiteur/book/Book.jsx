import {useState, useEffect} from 'react';  
import axios from "axios";
import Header from "./../navBar/NavBar";
import Footer from './../footer/Footer';
import { FETCH } from "./../../../Fetch";
import Instafeed from 'react-instafeed'




function Book({cart}){
	const [home, setHome] = useState([]);


	useEffect(() => {
		axios
		  .get(`${FETCH}/homes`)
		  .then((res) => setHome(res.data));
	  }, []);

	//   <script src="https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js"></script>
	//   const userFeed = new Instafeed({
	// 	  get: 'user',
	// 	  target: "instafeed-container",
	// 	  resolution: 'low_resolution',
	// 	  accessToken: 'IGQVJWTWdMdHVhU281ZA2Fwd1VfbTJ0c0pJcHNYVnJiUHlkcEFzQnBabEVIaGZAJQlRPRVRET2djZAktFN2NUYm5DbmVTTWxmQ2VTLThWNzVYTUExYnJMNF9QdEtqczQ2WEN3bU02cVlYd2lvWXlwMDZANcgZDZD'
	//   });
	


	  return(
	    <div className="Default">
			 <Header
        getCartReduce={cart.reduce((sum, { quantity }) => sum + quantity, 0)}
      />
	    <div className="imageAboutServices">
      <div className="alignTitleService App">
         <h1 className="titleAcceuilServices">Catalogue</h1>
       </div>
       {home.map((home) => (
         <div>
           <img src={home.picture_about} className="imageAbout" alt="image_acceuil" />
         </div>
       ))} 
      
       </div>
	   {/* <h1 style="text-align: center">Show Instagram Feed on your Website</h1>
    	<div id="instafeed-container"></div> */}




	 {/* <div>userFeed.run() </div> */}
		<Footer />

	    </div>
	  	)
	}


export default Book;