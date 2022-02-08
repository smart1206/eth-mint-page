import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
  whatIs: {
    maxWidth: "700px",
    height: "66px",
    marginBottom: "30px"
  },
  whyMochi: {
    marginBottom: "30px"
  },
  slideImg: {
    width: "200px",
    height: "200px",
    borderRadius: "40px",
    marginRight: "25px"
  }
}));

const settings = {
  slidesToShow: 6,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  speed: 10000,
  autoplaySpeed: 0,
  cssEase: 'linear',
  arrows: false,
};

const Career = () => {
  const classes = useStyles();

  return (
    <>
      <Box pb="80px">
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box textAlign="center">
                <img src="what_is_mochi_moshi.svg" className={classes.whatIs}></img>
              </Box>
              <Typography align="center" variant="h1">
                Moshi Mochi is a community driven collection of 8,000 squishy Mochi NFTs wandering the Ethereum blockchain. With a combination of over 100+ traits, each Mochi is made to be unique and no two are alike! Come join the fun and be part of our journey as we grow our Moshi Mochi community and take over the Mochiverse!
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} />
          </Grid>
          <Grid container>
            <Grid item xs={12} md={6} />
            <Grid item xs={12} md={6}>
              <Box textAlign="center">
                <img src="why_mochi.svg" className={classes.whyMochi}></img>
              </Box>
              <Typography align="center" variant="h1">
                By buying a Mochi, you gain access to a community of 8,000 other mochi friends who collectively will help push this project to newer heights. Being a community driven project, we put the community first and allow ourselves to serve what the community believes is best.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box mt="80px" height="300px" >
        <Slider {...settings} >
          <Box mr="24px">
            <img src="slide/1.png" className={classes.slideImg}></img>
          </Box>
          <Box mr="24px">
            <img src="slide/2.png" className={classes.slideImg}></img>
          </Box>
          <Box mr="24px">
            <img src="slide/3.png" className={classes.slideImg}></img>
          </Box>
          <Box mr="24px">
            <img src="slide/4.png" className={classes.slideImg}></img>
          </Box>
          <Box mr="24px">
            <img src="slide/5.png" className={classes.slideImg}></img>
          </Box>
          <Box mr="24px">
            <img src="slide/6.png" className={classes.slideImg}></img>
          </Box>
          <Box mr="24px">
            <img src="slide/7.png" className={classes.slideImg}></img>
          </Box>
        </Slider>
      </Box>
    </>
  )
}

export default Career;
