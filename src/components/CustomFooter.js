import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  root: {
    width: "100%",
    height: "87vh",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  footerContainer: {
    backgroundColor: "black",
    top: "auto",
    bottom: 0,
    marginTop: theme.spacing(2),
  },
}));

const CustomFooter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.footerContainer}>
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            BlueCube. All rights reserved.
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default CustomFooter;
