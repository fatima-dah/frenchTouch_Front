import { useState, useEffect } from "react";
import "./AdminLogin.css";
import { FETCH } from "../../../Fetch";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { Link } from "react-router-dom";
import Header from "./../navBar/NavBar";
import Footer from "../footer/Footer";

const AdminLogin = ({ cart, setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [home, setHome] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/homes`).then((res) => setHome(res.data));
  }, []);

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email && password) {
      await axios
        .post(`http://localhost:8000/api/login/`, {
          email,
          password,
        })
        .then((res) => res.data)
        .then((data) => {
          setToken(data.token);

          // console.log(data);

          history.push(`./admin`);
          window.history.go();
        })
        .catch((err) => {
          confirmAlert({
            message: "Mot de passe ou adresse incorrect(e) ",
            buttons: [
              {
                label: "Ok",
              },
            ],
          });
        });
    } else {
      confirmAlert({
        message:
          "Veuillez entrer une adresse électronique et un mot de passe valides",
        buttons: [
          {
            label: "Ok",
          },
        ],
      });
    }
  };

  return (
    <div>
      <Header
        getCartReduce={cart.reduce((sum, { quantity }) => sum + quantity, 0)}
      />
      <div>
        <div className="imageAboutServices">
          <div className="alignTitleService App">
            <h1 className="titleAcceuilServices">Se connecter</h1>
          </div>
          {home.map((home) => (
            <div>
              <img
                src={home.picture_about}
                className="imageAbout"
                alt="image_acceuil"
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Se connecter
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleLogin}
              >
                Se connecter
              </Button>
              <div>
                <Link
                  className="passwordAdmin"
                  to="/login/forgotten-password"
                  variant="body2"
                >
                  Mots de passe oublier ?
                </Link>
              </div>
              <div>
                <Link to="" className="passwordAdmin" variant="body2">
                  {"Vous n'avez pas de compte ? S'inscrire"}
                </Link>
              </div>
            </form>
          </div>
          <Box mt={8}></Box>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLogin;