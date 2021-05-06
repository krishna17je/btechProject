import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: "7rem 2rem 8rem 2rem",
    [theme.breakpoints.down("md")]: {
      margin: "5rem 2rem",
    },
  },
  margin1: {
    margin: "4rem 0rem 0rem 0rem",
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
  image: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <section id="top">
        <Grid container justify="space-evenly" alignItems="center">
          <Grid item lg={4} sm={12} className={classes.margin1}>
            <div>
              <Typography variant="h2" align="justify">
                <b>Our Technology</b>
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
          <Grid item lg={4} sm={12} className={classes.margin2}>
            <Zoom>
              <img
                src="assets/p5.svg"
                alt="farming"
                className={classes.image}
              />
            </Zoom>
          </Grid>
        </Grid>
      </section>

      <section id="top">
        <Grid container justify="space-evenly" alignItems="center">
          <Grid item lg={4} sm={12} className={classes.margin}>
            <Slide left>
              <img
                src="assets/p3.svg"
                alt="farming"
                className={classes.image}
              />
            </Slide>
          </Grid>
          <Grid item lg={4} sm={12} className={classes.margin1}>
            <div>
              <Typography variant="h2" align="justify">
                <b>Big Data</b>
              </Typography>
              <br />
              <Typography align="justify" variant="subtitle1">
                Data Driven Decisions! <br />
                AgriSOL creates actionable insights to make data-driven
                decisions for meeting the relevant food demand. Analysis of huge
                different data from multiple parameters which can be integrated
                with agricultural knowledge from different resources. Decision
                models will be created as integrated farm models, crop growth
                models, water balance models, soil nutrition models, farm
                optimization models & risk assessment models.
              </Typography>
            </div>
            <br /> <br />
          </Grid>
        </Grid>

        <Grid container justify="space-evenly" alignItems="center">
          <Grid item lg={4} sm={12} className={classes.margin1}>
            <div>
              <Typography variant="h2" align="justify">
                <b>AI/ML</b>
              </Typography>
              <br />
              <Typography align="justify" variant="subtitle1">
                Achieving Where Humans Failed! <br />
                AgriSOL achieves crop health monitoring using deep learning
                algorithms based on real-time data from sensors, satellite/drone
                images, on ground farming practices. Identification of potential
                defects in soil & plants and farming activity recommendations
                which includes crop/variety selection, crop protection and
                timing for sowing/irrigation/harvest. AI algorithms are used to
                predict yield, crop quality, input ide demand and output
                aggregation.
              </Typography>
            </div>
            <br /> <br />
          </Grid>
          <Grid item lg={4} sm={12} className={classes.margin}>
            <Slide right>
              <img
                src="assets/p2.svg"
                alt="farming"
                className={classes.image}
              />
            </Slide>
          </Grid>
        </Grid>

        <Grid container justify="space-evenly" alignItems="center">
          <Grid item lg={4} sm={12} className={classes.margin}>
            <Slide left>
              <img
                src="assets/p7.svg"
                alt="farming"
                className={classes.image}
              />
            </Slide>
          </Grid>
          <Grid item lg={4} sm={12} className={classes.margin1}>
            <div>
              <Typography variant="h2" align="justify">
                <b>Computer Vision</b>
              </Typography>
              <br />
              <Typography align="justify" variant="subtitle1">
                Automate Agriculture Processes! <br />
                AgriSOL intends to include Machine Vision for
                automation/guidance of smart farming devices integrated with
                tractors or separate robots in some cases for harvest,
                plantation, weeding etc. It helps in identifying/sorting/grading
                the best crops from bad crops and determination of stable for
                longer logistics and lower level quality should be passed onto
                local market.
              </Typography>
            </div>
            <br /> <br />
          </Grid>
        </Grid>

        <Grid container justify="space-evenly" alignItems="center">
          <Grid item lg={4} sm={12} className={classes.margin1}>
            <div>
              <Typography variant="h2" align="justify">
                <b>Cloud Computing</b>
              </Typography>
              <br />
              <Typography align="justify" variant="subtitle1">
                Data Driven Decisions! <br />
                AgriSOL uses the cloud to access information from predictive
                analysis institutes, whereby farmers can have an accurate
                prediction on products that are in demand by different markets
                and adjust production accordingly. They are also able to have
                insight on weather conditions and other parameters affecting
                production.
              </Typography>
            </div>
            <br /> <br />
          </Grid>
          <Grid item lg={4} sm={12} className={classes.margin}>
            <Slide right>
              <img
                src="assets/p6.svg"
                alt="farming"
                className={classes.image}
              />
            </Slide>
          </Grid>
        </Grid>
      </section>
    </div>
  );
}
