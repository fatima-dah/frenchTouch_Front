import {useState, useEffect} from 'react';  
import axios from "axios";
import Header from "./../navBar/NavBar";
import Footer from './../footer/Footer';
import { FETCH } from "./../../../Fetch";




function Book({cart}){
	const [home, setHome] = useState([]);


	useEffect(() => {
		axios
		  .get(`${FETCH}/homes`)
		  .then((res) => setHome(res.data));
	  }, []);
// const [data, setData] = useState([]); 

// // Touch Instagram API using fetch
// useEffect(()=>{
//   axios.get(`https://api.instagram.com/v1/users/356910872413649/media/recent/?count=99&access_token=IGQVJVSWxkQlJIZA1M3Nmx6LU9MVklYM2VQR3FTd3JnQTY3TjFtT01zZAldLYzBrT2ZAJS0FVY0FwdmNPSVpZAVHRoQ0R3YkdpV1BRdTU1dkFJUGYxcWxMcXo3SFVCa1N6RkJtUE95dGMzOV9TbTE3ZAkRVXwZDZD`)
//     .then(res =>res.json())
//     .then((responseJson) => {
//     	// testing promise to see if I can get data in console
//     	// console.log(responseJson.data);
//     	let instaFeed = responseJson.data.map((el, i, arr) => {
//     		return {
//     			images: el.images.standard_resolution.url
//     		};
//     	});
//     	setData( { data: instaFeed });
//     	// return responseJson.data;
//     })
//     .catch((error) => {
//     	console.error(error);
//     });
// } )
	


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
       
  	      {/* {
	      	data.map((el, i, arr) => <div className="posts-default" key={i} style={{backgroundImage: `url(${el.images})`}}>
          </div>)
	      } */}
        <div>hey</div>
        <div id="instafeed"></div>
		<Footer />

	    </div>
	  	)
	}


export default Book;