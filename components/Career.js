import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  whatIs: {
    width: "700px",
    height: "66px",
    marginBottom: "30px"
  },
}));

const Career = () => {
  const classes = useStyles();

  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img src="what_is_mochi_moshi.svg" className={classes.whatIs}></img>
            <Typography align="center" variant="h1">
              Moshi Mochi is a community driven collection of 8,000 squishy Mochi NFTs wandering the Ethereum blockchain. With a combination of over 100+ traits, each Mochi is made to be unique and no two are alike! Come join the fun and be part of our journey as we grow our Moshi Mochi community and take over the Mochiverse!
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} />
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6} />
          <Grid item xs={12} md={6}>
            <img src="why_mochi.svg" className={classes.whatIs}></img>
            <Typography align="center" variant="h1">
              By buying a Mochi, you gain access to a community of 8,000 other mochi friends who collectively will help push this project to newer heights. Being a community driven project, we put the community first and allow ourselves to serve what the community believes is best.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Career;
