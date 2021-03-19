import { useState } from 'react';
// import './login.css';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';

const AdminLogin = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        if (email && password) {
            await axios
                .post('http://localhost:8000/api/login/', {
                    email,
                    password,
                })
                .then((res) => res.data)
                .then((data) => {
                    localStorage.setItem("TOKEN", data.token);
                    alert("Vous êtes connecté.e");
                    history.push('/admin');
                })
                .catch((err) => {
                    alert(err.response.data.errorMessage);
                });
        } else {
            alert("Merci d'entrer une adresse mail et un mot de passe valides");
            
        }
    };

    return (
        <div className="">
            <h1 className="">Connexion Administrateur</h1>
            <form>
                <fieldset className="">
                    <label className="" >
                        Adresse mail :
                    <input type='text' name='username' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <label  className="" >
                        Mot de passe :
                    <input type='password'  className="" name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </label>
                    <button className="" type="submit" onClick={handleLogin}>Se connecter</button>
                </fieldset>
            </form>
            <button className=""><Link to="/" className="">Retour page d'accueil</Link></button>

        </div>
    );
};

export default AdminLogin;