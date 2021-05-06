import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: "7rem 2rem 8rem 2rem",
    [theme.breakpoints.down("md")]: {
      margin: "5rem 2rem",
    },
  },
  margin1: {
    margin: "3rem 0rem 0rem 0rem",
    [theme.breakpoints.down("md")]: {
      margin: "5rem 2rem",
    },
  },
  margin2: {
    margin: "9rem 2rem 8rem 2rem",
    [theme.breakpoints.down("md")]: {
      margin: "5rem 2rem",
    },
  },
  margin3: {
    margin: "0rem 0rem 5rem 0rem",
  },
  image: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.margin3}>
      <section id="top">
        <Grid container justify="space-evenly" alignItems="center">
          <Grid item lg={4} sm={12} className={classes.margin1}>
            <br /> <br />
            <div>
              <Typography variant="h2" align="center">
                <b>How we gather our data?</b>
              </Typography>
              <br />
              <Typography align="justify" variant="subtitle1">
                We are leveraging a combination of technologies from cloud
                computing to machine learning and agronomy to develop customized
                digital agronomy solutions to address farmers and producers
                needs.
              </Typography>
            </div>
            <br /> <br />
          </Grid>
          <Zoom>
            <img src="assets/p9.svg" alt="farming" className={classes.image} />
          </Zoom>
        </Grid>
        <Typography variant="h3" align="center" className={classes.margin1}>
          Some of our data sources are:
        </Typography>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className={classes.margin1}
        >
          <Grid item lg={6}>
            <Bounce right>
              <Typography variant="h6" align="center">
                Farmers Data
              </Typography>
            </Bounce>
          </Grid>
          <Grid item lg={6}>
            <Bounce right>
              <Typography variant="h6" align="center">
                Metrological Station Data
              </Typography>
            </Bounce>
          </Grid>
          <Grid item lg={6}>
            <Bounce right>
              <Typography variant="h6" align="center">
                Water and Irigation Data
              </Typography>
            </Bounce>
          </Grid>
          <Grid item lg={6}>
            <Bounce right>
              <Typography variant="h6" align="center">
                Geographic Data
              </Typography>
            </Bounce>
          </Grid>
          <Grid item lg={6}>
            <Bounce right>
              <Typography variant="h6" align="center">
                Satellite Data
              </Typography>
            </Bounce>
          </Grid>
          <Grid item lg={6}>
            <Bounce right>
              <Typography variant="h6" align="center">
                Soil Sensor Data
              </Typography>
            </Bounce>
          </Grid>
          <Grid item lg={6}>
            <Bounce right>
              <Typography variant="h6" align="center">
                Enviormental Sensor Data
              </Typography>
            </Bounce>
          </Grid>
          <Grid item lg={6}>
            <Bounce right>
              <Typography variant="h6" align="center">
                GPS Data
              </Typography>
            </Bounce>
          </Grid>
        </Grid>
      </section>
    </div>
  );
}
