import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button } from "@material-ui/core";
import lottie from 'lottie-web';

// import Moon from '../assets/animation/Top-view-moon.json';

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    marginInline: "auto",
    minHeight: "700px"
  },
  moshiImg: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    width: "700px",
    marginBottom: "20px"
  },
  mintCount: {
    width: "270px",
    height: "70px",
    outline: "transparent solid 2px",
    appearance: "none",
    fontSize: "1.5rem",
    fontWeight: "700",
    borderRadius: "5px",
    borderWidth: "1px",
    borderStyle: "solid",
    background: "#fff",
    color: "#000",
    textAlign: "center",
    marginTop: "30px"
  },
  connectBtn: {
    background: "#aeffad",
    borderRadius: "5px",
    minWidth: "260px",
    paddingInline: "20px",
    height: "70px",
    fontSize: "1.5rem",
    fontWeight: 700,
    marginTop: "20px",
    color: "#fff",
    textTransform: "uppercase",
  }
}));

const Banner = () => {
  const classes = useStyles();

  // React.useEffect(() => {
  //   lottie.loadAnimation({
  //     container: document.querySelector('#moon'),
  //     animationData: Moon,
  //     renderer: 'svg', // "canvas", "html"
  //     loop: true, // boolean
  //     autoplay: true, // boolean
  //   });
  // }, []);

  return (
    <Box className={classes.bannerContainer} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      {/* <Box id="moon" h="100%"></Box> */}
      <img src="moshi_mochi.svg" className={classes.moshiImg}></img>
      <Typography align="center" variant="h1">0/8000 MOCHI MINTED AT 0.035 ETH EACH</Typography>
      <input type="number" className={classes.mintCount} />
      <Button className={classes.connectBtn}>Connect</Button>
    </Box>
  )
}

export default Banner;
