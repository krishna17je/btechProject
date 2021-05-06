import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Footer() {
  return (
    <div>
      <hr style={{ border: "1px solid #e0e0eb" }} />
      <Grid
        container
        justify="space-around"
        style={{
          backgroundColor: "rgb(0, 0 , 0/ 50%)",
          padding: "3rem 0rem",
        }}
      >
        <Grid item lg={4}>
          <Typography variant="subtitle1" align="justify">
            AgriSOL is an initiative started in India by IIT Dhanbad professor,
            Technocrats, Data Scientists, Agriculture Domain Experts and
            Environment Champions to bring new methods to support Global Food
            Security on one hand and make Agriculture profitable for Farmers.
            The ever increasing demand for food and challenges like Climate
            Change means need for transformational changes in Agriculture
            Ecosystem. AgriSOL was founded for the same to provide best AgTech
            solution to the Agriculture Ecosystem.
          </Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography variant="h6">
            <b>Contact Us:</b>
          </Typography>
          <Typography variant="subtitle1" align="left">
            CSE Department, Room No. 103,
            <br />
            I-Floor, IIT(ISM) Dhanbad,
            <br />
            Dhanbad , Jharkhand,
            <br />
            India (826004)
            <br />
            drramesh@iitism.ac.in
            <br />
            +91-9471191814
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
