import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function MainLayout({ children }) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative" color="primary">
        <Toolbar>
          <Typography variant="h6">Copernicus | Cosmos Network Tracker</Typography>
        </Toolbar>
      </AppBar>

      <main>{children}</main>

      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Copernicus Cosmos Tracker
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Made for the community by{" "}
          <Link color="inherit" href="https://www.itastakers.com/">
            🇮🇹 ITA Stakers
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Contribute to this project on{" "}
          <Link color="inherit" href="https://github.com/itastakers/copernicus">
            GitHub
          </Link>
        </Typography>
      </footer>
      {/* End footer */}
    </>
  );
}
