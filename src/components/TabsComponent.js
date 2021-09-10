import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const TabsComponent = (props) => {
  const classes = useStyles();

  //   const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    // setValue(newValue);
    props.setToShowTab(newValue);
  };
  return (
    <Paper className={classes.root}>
      <Tabs
        value={props.tabToShow}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Classrooms" />
        <Tab label="Calendar" />
        {/* Check for student & teacher, if student display tab Submissions */}
        <Tab label="Submissions" />
      </Tabs>
    </Paper>
  );
};

export default TabsComponent;
