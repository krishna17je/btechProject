import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Zoom from "react-reveal/Zoom";
import Pulse from "react-reveal/Pulse";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  margin: {
    margin: "5rem 2rem 8rem 2rem",
    [theme.breakpoints.down("md")]: {
      margin: "5rem 2rem",
    },
  },
  margin1: {
    margin: "5rem 0rem 0rem 0rem",
    [theme.breakpoints.down("md")]: {
      margin: "5rem 2rem",
    },
  },
  margin2: {
    margin: "1rem 1rem 0rem 0rem",
  },
  margin3: {
    margin: "5rem 2rem 5rem 2rem",
    [theme.breakpoints.down("md")]: {
      margin: "5rem 2rem",
    },
  },
  margin4: {
    margin: "5rem 2rem 5rem 2rem",
    [theme.breakpoints.down("md")]: {
      margin: "5rem 2rem",
    },
  },
  image: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  button: {
    textDecoration: "none",
  },
  alignCenter: {
    textAlign: "center",
    margin: "0rem 1rem 1rem 1rem !important",
  },
  alignLeft: {
    textAlign: "left",
    marginTop: "1rem",
  },
  card: {
    maxWidth: 700,
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
    display: "inline-block",
    padding: "2rem",
  },
  bullet: {
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
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
                <b>Know your land</b>
              </Typography>
              <br />
              <Typography align="justify" variant="subtitle1">
                We are improving the efficiency and sustainability of crop
                production by offering compelling digital agronomy solutions to
                the farmers, enabled by Big Data, Computer Vision, Cloud
                Computing and Artificial intelligence. AgriSOL is your partner
                for crop intelligence!
              </Typography>
            </div>
            <br /> <br />
            <a href="#mid" className={classes.button}>
              <Button
                variant="contained"
                color="primary"
                disableElevation
                size="large"
              >
                Know more
              </Button>
            </a>
          </Grid>
          <Grid item lg={4} sm={12} className={classes.margin}>
            <Zoom>
              <img
                src="assets/p1.svg"
                alt="farming"
                className={classes.image}
              />
            </Zoom>
          </Grid>
        </Grid>
      </section>
      <section id="mid">
        <div className={classes.margin}>
          <Typography variant="h3" align="center" gutterBottom>
            <b>Making Agriculture Digitally Transformed</b>
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            We are making one stop solution that integrates cutting edge
            digitized technologies for transformation in agriculture.
          </Typography>
        </div>
        <Pulse>
          <Grid container justify="space-around" alignItems="center">
            <Grid item lg={3} sm={12} xs={12}>
              <div className={classes.alignCenter}>
                <img src="assets/p10.svg" alt="farming" />
                <Typography variant="h6">
                  <b>Better use</b>
                </Typography>
                <Typography variant="subtitle1">
                  of crop inputs to optimize costs and minimize environmental
                  impact.
                </Typography>
              </div>
            </Grid>
            <Grid item lg={3} sm={12} xs={12}>
              <div className={classes.alignCenter}>
                <img src="assets/p12.svg" alt="farming" />
                <Typography variant="h6">
                  <b>Better Prediction</b>
                </Typography>
                <Typography variant="subtitle1">
                  and early mitigation of risks throughout the growing season.
                </Typography>
              </div>
            </Grid>
            <Grid item lg={3} sm={12} xs={12}>
              <div className={classes.alignCenter}>
                <img src="assets/p11.svg" alt="farming" />
                <Typography variant="h6">
                  <b>Better Output</b>
                </Typography>
                <Typography variant="subtitle1">
                  so you can take the best out of your crops with minimal risks.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Pulse>
      </section>
      <section>
        <div className={classes.margin4}>
          <Grid
            container
            justify="space-around"
            alignItems="center"
            spacing={2}
          >
            <Grid item lg={6}>
              <Card className={classes.card}>
                <Typography variant="h4" align="center">
                  <b>How do we do it?</b>
                </Typography>
                <br /> <hr />
                <Typography variant="subtitle1" align="justify" gutterBottom>
                  <br />
                  We address the need to increase efficiency and sustainability
                  of large industrial and small-holder farming by the help of
                  cutting edge technologies like Machine Learning, IoT, Urban
                  Farming, Hydroponics, Aeroponics, Aquaponics, and Blockchain
                  etc. so that agriculture itself digitally transformed to
                  achieve More Crop – Per Drop, Per Acre, Per Rupee.
                </Typography>
              </Card>
            </Grid>
            <Grid item lg={6}>
              <Card className={classes.card}>
                <Typography variant="h4" align="center">
                  <b>Who are we? </b>
                </Typography>
                <br /> <hr />
                <Grid
                  container
                  justify="space-around"
                  alignItems="center"
                  className={classes.margin2}
                >
                  <Grid item lg={3}>
                    <Avatar
                      alt="Remy Sharp"
                      src="assets/dharavath.jpg"
                      className={classes.large}
                    />
                  </Grid>
                  <Grid item lg={9}>
                    <Typography variant="h5" align="left">
                      <b>Dharavath Ramesh</b>
                    </Typography>
                    <Typography variant="subtitle1" align="justify">
                      Senior Member IEEE, ACM, ISTE, IAENG Assistant Professor
                      Department of Computer Science and Engineering Indian
                      Institute of Technology (ISM), Dhanbad.
                    </Typography>
                    <div className={classes.alignLeft}>
                      <Button
                        target="_blank"
                        href="https://www.iitism.ac.in/~drramesh/index.html"
                        variant="contained"
                        color="primary"
                        size="small"
                      >
                        Know More
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </div>
      </section>
    </div>
  );
}
