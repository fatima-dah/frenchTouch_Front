import {useState, useEffect, Fragment} from 'react';  
import axios from "axios";
import Header from "./../navBar/NavBar";
import Footer from './../footer/Footer';
import { FETCH } from "./../../../Fetch";
import InstagramFeed  from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';
import './Book.css';




function Book({cart}){
	const [home, setHome] = useState([]);

	

	useEffect(() => {
		axios
		  .get(`${FETCH}/homes`)
		  .then((res) => setHome(res.data));
	  }, []);

	


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
	  
<div className="instaFeed">
<InstagramFeed className="instagramPicture" token="IGQVJXVmg2dXBzN19DQVVab3FBdTBueUthWTJDRlNjSFZA1UWFTaTdlTlN0d0U1b1FZAZAi1qZAjdUb2NiU2NfamdxTno0bEoxa25tNTFIWGZAtZA1RTb0RqZAGhNRGF2VlplNm9XZA3REU0ZA2aXFRTnBWVVRKTAZDZD"  counter="6"/> 
</div>

		<Footer />

	    </div>
	  	)
	}


export default Book;