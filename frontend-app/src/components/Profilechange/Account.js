import "../Profilechange/Profilechange.css";

import React, { useEffect, useState } from "react";

import { APP_PROFILE } from "../../routes/routes";
import { AuthContext } from "../../App";
import CardContent from "@material-ui/core/CardContent";
import Navbar from "../Header/Navbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    flexDirection: "column"
  },
  header: {
    marginBottom: 40
  },

  mothercard: {
    marginLeft: 400,
    marginRight: 300
  }
});

export default function SimpleCard() {
  const { state } = React.useContext(AuthContext);
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  useEffect(() => {
    if (state.user) {
      setName(state.user.name);
      setLastName(state.user.last_name);
      setEmail(state.user.email);
    }
  });

  return (
    <div>
      <Navbar class="header2" />
      <div className={classes.mothercard}>
        <div className={classes.header}>
          <h1 className="h1account">Cuenta</h1>
          <h5>
            {name} {last_name}, {email} {bull}{" "}
            <a className="editprofile" href={APP_PROFILE}>
              Ir al perfil
            </a>
          </h5>
        </div>

        <div className="card" variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Información personal <span className="go">&#10093;</span>
            </Typography>
          </CardContent>

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Proporciona tus datos personales e indícanos cómo podemos ponernos
              en contacto contigo
            </Typography>
          </CardContent>
        </div>

        <div className="card" variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Información personal <span className="go">&#10093;</span>
            </Typography>
          </CardContent>

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Proporciona tus datos personales e indícanos cómo podemos ponernos
              en contacto contigo
            </Typography>
          </CardContent>
        </div>

        <div className="card" variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Información personal <span className="go">&#10093;</span>
            </Typography>
          </CardContent>

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Proporciona tus datos personales e indícanos cómo podemos ponernos
              en contacto contigo
            </Typography>
          </CardContent>
        </div>

        <div className="card" variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Información personal <span className="go">&#10093;</span>
            </Typography>
          </CardContent>

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Proporciona tus datos personales e indícanos cómo podemos ponernos
              en contacto contigo
            </Typography>
          </CardContent>
        </div>

        <div className="card" variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Información personal <span className="go">&#10093;</span>
            </Typography>
          </CardContent>

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Proporciona tus datos personales e indícanos cómo podemos ponernos
              en contacto contigo
            </Typography>
          </CardContent>
        </div>

        <div className="card" variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Información personal <span className="go">&#10093;</span>
            </Typography>
          </CardContent>

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Proporciona tus datos personales e indícanos cómo podemos ponernos
              en contacto contigo
            </Typography>
          </CardContent>
        </div>
        <div className="card" variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Información personal <span className="go">&#10093;</span>
            </Typography>
          </CardContent>

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Proporciona tus datos personales e indícanos cómo podemos ponernos
              en contacto contigo
            </Typography>
          </CardContent>
        </div>

        <div className="card" variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Información personal <span className="go">&#10093;</span>
            </Typography>
          </CardContent>

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Proporciona tus datos personales e indícanos cómo podemos ponernos
              en contacto contigo
            </Typography>
          </CardContent>
        </div>
      </div>
    </div>
  );
}
