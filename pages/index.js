import Layout from "components/layout/Layout";
import Banner from "components/Banner";
import Career from "components/Career";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  img: {
    width: "100%",
    height: "auto",
    boxShadow: "0px 2px 20px rgba(0,0,0,0.4)",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Layout
      // type your page title and page description.
      title="Template - Next.js and Material-UI with Header and Footer"
      description="This is a Template using Next.js and Material-UI with Header and Footer."
    >
      <Banner />
      <Career />
    </Layout>
  );
};

export default About;
