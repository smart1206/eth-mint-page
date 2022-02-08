import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  roadmap: {
    width: "700px",
    height: "87px",
    marginBottom: "80px"
  },
  phase1: {
    width: "547px",
    height: "67px",
    marginBottom: "30px"
  },
  subtitle: {
    fontSize: "2.25rem"
  }
}));


const Roadmap = () => {
  const classes = useStyles();

  return (
    <Box pb="80px">
      <Container>
        <Grid container>
          <img src="mochi_roadmap.svg" className={classes.roadmap}></img>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <img src="phase_1.svg" className={classes.phase1}></img>
            </Box>
            <Typography className={classes.subtitle} align="center" variant="h1">
              Develop the Mochi Factory~
            </Typography>
            <Typography align="center" variant="h1">
              This is where all project decision making will go. Proposals, grants and many more will be discussed and voted by the community to initiate the project direction. Funding will be taken from 15% of mint and secondary sales.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} />
        </Grid>
        <Grid container>
          <img src="river.svg" ></img>
          {/* <Grid item xs={12} md={6} />
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <img src="phase_1.svg" className={classes.phase1}></img>
            </Box>
            <Typography className={classes.subtitle} align="center" variant="h1">
              Develop the Mochi Factory~
            </Typography>
            <Typography align="center" variant="h1">
              This is where all project decision making will go. Proposals, grants and many more will be discussed and voted by the community to initiate the project direction. Funding will be taken from 15% of mint and secondary sales.
            </Typography>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  )
}

export default Roadmap;
