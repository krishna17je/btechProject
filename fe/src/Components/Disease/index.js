import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { Line } from "react-chartjs-2";
import TextField from "@material-ui/core/TextField";
import { getData } from "./service";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: "7rem 2rem 3rem 2rem",
    [theme.breakpoints.down("md")]: {
      margin: "5rem 2rem",
    },
  },
  margin1: {
    margin: "2rem 2rem 3rem 2rem",
    [theme.breakpoints.down("md")]: {
      margin: "5rem 2rem",
    },
  },
  margin2: {
    margin: "3rem 0rem 0rem 0rem",
  },
  margin3: {
    margin: "0rem 0rem 2rem 0rem",
  },
  margin4: {
    margin: "1rem 3rem 0rem 4rem",
    width: "70% !important",
  },
  alignCenter: {
    textAlign: "center",
  },
  alignCenter1: {
    textAlign: "-webkit-center",
  },
  image: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },

  formControl: {
    margin: theme.spacing(1),
    width: "100%",
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  red: {
    color: "red",
  },
}));

export default function Home() {
  const [state, setState] = React.useState({
    name: "",
    location: "",
    disease: "",
    value: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [chartStatus, setChartStatus] = React.useState(false);
  const [xAxis, setXAxis] = React.useState([]);

  const [yAxis, setYAxis] = React.useState([]);

  const data = {
    labels: xAxis,
    datasets: [
      {
        label: "Pest Value (LT)",
        data: yAxis,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    responsive: true,
    maintainAspectRatio: true,
    layout: { padding: 50 },
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    if (
      state.name === "" ||
      state.location === "" ||
      state.disease === "" ||
      state.value === ""
    ) {
      setError(true);
      return;
    }
    setLoading(true);
    const resp = await getData(state.location);
    if (resp.error) {
      setError(true);
      return;
    }
    setXAxis(resp.data.map((d, index) => index + 1));
    setYAxis(resp.data);
    setChartStatus(true);
    setError(false);
    setLoading(false);
  };

  const classes = useStyles();
  return (
    <div>
      <section id="top">
        <Grid container justify="space-evenly" alignItems="center">
          <Grid item lg={4} sm={12} className={classes.margin}>
            <Zoom>
              <img
                src="assets/p13.svg"
                alt="farming"
                className={classes.image}
              />
            </Zoom>
          </Grid>
          <Grid item lg={4} sm={12} className={classes.margin}>
            <div>
              <Typography variant="h2" align="justify">
                <b>What is wrong with your land?</b>
              </Typography>
              <br />
              <Typography align="justify" variant="subtitle1">
                With our cutting edge research we have developed a technologies
                that can help you know what is wrong with your land. A data
                driven idea about the disease can help you to increase the
                production. AgriSOL is your partner for crop intelligence!
              </Typography>
            </div>
            <br /> <br />
          </Grid>
        </Grid>
      </section>
      <hr />
      <section id="data">
        <Typography align="center" variant="h4" className={classes.margin2}>
          <b>Know Your Crop Disease</b>
        </Typography>
        <Grid container justify="space-evenly" alignItems="center">
          <Grid item lg={4} sm={12} className={classes.margin1}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Crop Name
              </InputLabel>
              <Select
                native
                value={state.name}
                onChange={handleChange}
                label="name"
                inputProps={{
                  name: "name",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"Rice"}>Rice</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item lg={4} sm={12} className={classes.margin1}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Location
              </InputLabel>
              <Select
                native
                value={state.location}
                onChange={handleChange}
                label="location"
                inputProps={{
                  name: "location",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"raipur"}>Raipur</option>
                <option value={"maruthu"}>Maruthu</option>
                <option value={"rajendranagar"}>Rajendranagar</option>
              </Select>
            </FormControl>
            <br /> <br />
          </Grid>

          <Grid item lg={4} sm={12} className={classes.margin1}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Disease
              </InputLabel>
              <Select
                native
                value={state.disease}
                onChange={handleChange}
                label="disease"
                inputProps={{
                  name: "disease",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"Yellow Stem Border"}>Yellow Stem Border</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item lg={4} sm={12} className={classes.margin1}>
            <FormControl variant="outlined" className={classes.formControl}>
              <TextField
                id="outlined-basic"
                label="Observed Pest Value"
                variant="outlined"
                value={state.value}
                inputProps={{
                  name: "value",
                  id: "outlined-age-native-simple",
                }}
                onChange={handleChange}
              />
            </FormControl>
            <br /> <br />
          </Grid>
        </Grid>
        <div className={`${classes.margin3} ${classes.alignCenter}`}>
          {error ? (
            <Typography className={classes.red}>
              Some error occured, please try again!
            </Typography>
          ) : null}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={loading}
          >
            Submit
          </Button>
        </div>
        {chartStatus && (
          <div className={classes.alignCenter1}>
            <div className={classes.margin4}>
              <Line data={data} options={options} />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
