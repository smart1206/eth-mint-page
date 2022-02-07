import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    marginInline: "auto",
    minHeight: "1000px"
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
    fontSize: "1.5rem",
    fontWeight: "700",
    borderRadius: "5px",
    borderWidth: "1px",
    borderStyle: "solid",
    background: "#fff",
    color: "#000",
    textAlign: "center",
    margintTop: "30px"
  }
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <Box className={classes.bannerContainer} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <img src="moshi_mochi.svg" className={classes.moshiImg}></img>
      <Typography align="center" variant="h1">0/8000 MOCHI MINTED AT 0.035 ETH EACH</Typography>
      <input type="number" className={classes.mintCount} />
    </Box>
  )
}

export default Banner;
