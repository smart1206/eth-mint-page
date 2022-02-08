import Link from "components/Link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  IconButton,
  Box,
  Button
} from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import MenuIcon from "@material-ui/icons/Menu";

import { routes } from "data/routes";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: `5em`,
    [theme.breakpoints.down("md")]: {
      marginBottom: "4em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2em",
    },
  },
  logo: {
    color: theme.palette.secondary.main,
    width: "max-content",
    fontSize: "1.5rem",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: `50px`,
    width: `50px`,
    color: `#fff`,
    [theme.breakpoints.down("xs")]: {
      height: `30px`,
      width: `30px`,
    },
  },
  drawer: {
    backgroundColor: theme.palette.secondary.main,
    padding: "0 6em",
  },
  link: {
    fontSize: "1.25em",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  logo: {
    [theme.breakpoints.down("xs")]: {
      width: "150px",
      height: "18px"
    },
    width: "400px",
    height: "50px"
  },
  icons: {
    width: "50px",
    height: "50px",
    marginRight: "50px"
  },
  connect: {
    [theme.breakpoints.down("xs")]: {
      width: "100px",
      height: "19px"
    },
    width: "200px",
    height: "30px"
  }
}));

const Header = ({ account, onConnect }) => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const [openDrawer, setOpenDrawer] = useState(false);

  const router = useRouter();

  const path = routes;

  const formatAddress = (str) => {
    return str ? str.slice(0, 5) + '...' + str.slice(str.length - 5) : '';
  }

  const tabs = (
    <>
      <Grid container justifyContent="center">
        {path.map(({ name, link }) => (
          <Grid item key={link}>
            <Link href={link}>
              <img className={classes.icons} src={`${name}.svg`}></img>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
        anchor="right"
      >
        {/* <div className={classes.toolbarMargin} /> */}
        <List disablePadding>
          {path.map(({ name, link }) => (
            <ListItem
              key={link}
              divider
              button
              onClick={() => {
                setOpenDrawer(false);
              }}
            >
              <ListItemText disableTypography>
                <Link href={link}>
                  <img className={classes.icons} src={`${name}.svg`}></img>
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
  return (
    <>
      <ElevationScroll>
        <AppBar position="sticky" className={classes.appBar}>
          <Toolbar
            disableGutters
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              width: "100%",
              padding: matches ? "0 16px" : "24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Link href="/">
              <img className={classes.logo} src="moshi_mochi.svg"></img>
            </Link>
            {matches ? drawer : tabs}
            {!account
              ? (<button style={{ background: "transparent", border: "none", cursor: "pointer" }}
                onClick={onConnect}>
                <img className={classes.connect} src="connect.svg"></img>
              </button>)
              : (<Typography variant="h1" style={{ color: "#aeffad" }}>{formatAddress(account)}</Typography>)
            }
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      {/* <div className={classes.toolbarMargin} /> */}
    </>
  );
};
export default Header;
