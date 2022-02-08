import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button } from "@material-ui/core";
import InputNumber from 'rc-input-number';
import 'rc-input-number/assets/index.css';

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    marginInline: "auto",
    minHeight: "600px"
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
    borderRadius: "5px",
    borderWidth: "1px",
    borderStyle: "solid",
    background: "#fff",
    color: "#000",
    textAlign: "center",
    marginTop: "30px",
    "& input": {
      fontSize: "1.5rem",
      fontWeight: "700",
    },
    "& span": {
      cursor: "pointer",
      paddingTop: "10px",
      height: "35px"
    }
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

const Banner = ({ account, onConnect }) => {
  const classes = useStyles();

  return (
    <Box className={classes.bannerContainer} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <img src="moshi_mochi.svg" className={classes.moshiImg}></img>
      <Typography align="center" variant="h1">0/8000 MOCHI MINTED AT 0.035 ETH EACH</Typography>
      {account &&
        <InputNumber min={1} max={5} className={classes.mintCount} defaultValue={1} />
      }
      {!account &&
        <Button onClick={onConnect} className={classes.connectBtn}>Connect</Button>
      }
    </Box>
  )
}

export default Banner;
