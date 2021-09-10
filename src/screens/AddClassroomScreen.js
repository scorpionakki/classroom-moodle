import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import Image from "material-ui-image";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(5),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    height: "90vh",
    width: "100%",
  },
  form: {
    padding: theme.spacing(2),
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: "40vh",
  },
  submit: {
    minWidth: 250,
  },
}));

const AddClassroomScreen = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.root}
          spacing={0}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Paper elevation={3} className={classes.paper}>
              <Grid
                container
                xs={12}
                sm={12}
                md={12}
                direction="row"
                spacing={0}
              >
                <Grid item xs={false} sm={12} md={6}>
                  <Image
                    src="https://wallpaperaccess.com/full/4401638.jpg"
                    cover
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  container
                  direction="column"
                  justifyContent="space-evenly"
                  alignItems="center"
                  className={classes.form}
                >
                  <Typography variant="h4">Add Classroom</Typography>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Batch</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>MScIT</MenuItem>
                      <MenuItem value={20}>MScDS</MenuItem>
                      <MenuItem value={30}>MTech</MenuItem>
                    </Select>
                    <TextField id="standard-basic" label="Class Name" />
                  </FormControl>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AddClassroomScreen;
