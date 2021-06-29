import { useState, useEffect, Fragment } from 'react';
import axios from "axios";
import Header from "./../navBar/NavBar";
import Footer from './../footer/Footer';
import { FETCH } from "./../../../Fetch";
import InstagramFeed from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';
import './Book.css';


function Book({ cart }) {

	const [home, setHome] = useState([]);

	useEffect(() => {
		axios
			.get(`${FETCH}/homes`)
			.then((res) => setHome(res.data));
	}, []);

	return (
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

			<div className="instaFeed ">
				<InstagramFeed className="instagramPicture " token="IGQVJWck0tSDQyRTlBTm8xUFVjd1FvWlduNGMtdnEtRU5zTHMtQXlDNW1QUHl4eF9SYmJYVXItOGZAUXzNabElYck03OXFqdlgzUjBPdml1YTExSVpCSVNhS21GbkNXSV92djJtcHRCcmlXelpuSElfbAZDZD" counter="90" />
			</div>
			<div className="bookBtnFlex">
				<a href="https://www.instagram.com/helene_french_touch/?hl=fr"><button className="btn bookBtn">Voir plus</button></a>
			</div>
			<Footer />

		</div>
	)
}


export default Book;