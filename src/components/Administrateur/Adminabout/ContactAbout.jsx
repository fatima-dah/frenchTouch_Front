import {useState, useEffect} from "react";
import axios from "axios";
import "./ContactAbout.css";
import {FETCH} from './../../../Fetch'; 
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";


function ContactAbout(){
    const [about, setAbout] = useState([]);
    
    useEffect(() => {
        axios.get(`${FETCH}/abouts`).then((res) => setAbout(res.data));
      }, []);

      const handleDelete = (e, item) => {
        e.preventDefault();
        confirmAlert({
          title: "Rejeter le commentaire",
          message: "Êtes-vous sur de vouloir supprimer ce coontact ?",
          buttons: [
            {
              label: "Oui",
              onClick: () => {
                window.history.go();

                axios
                  .delete(`${FETCH}/abouts/${item}`, {})
                  .catch(function (erreur) {
                    console.log(erreur);
                  });
              },
            },
            {
              label: "Non",
            },
          ],
        });
      };

    return(
        <div>
            <h2>Contact client</h2>
            <div>
               {about.map((about) => (
                   <div className="abouts App">
                       <p className="">{about.firstname} </p>
                       <p className="">{about.lastname} </p>
                       <p className="">{about.email} </p>
                       <p className="aboutAdminMsg">{about.message} </p>
                       <button
                  type="button"
                  className="btn "
                  onClick={(e) => handleDelete(e, about.id)}
                >
                  Supprimer
                </button>
                       </div>
               ))} 
            </div>

        </div>
    )
} 
export default ContactAbout;