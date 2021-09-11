import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  Grid,
  List,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";
import CustomListComponent from "../components/CustomListComponent";
import { loremIpsumData } from "../sampleData/SampleAssignmentDetailsText";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  folderAssignmentContainer: {
    minHeight: 250,
    maxHeight: 685,
    width: "100%",
    overflow: "auto",
    marginTop: "10",
  },
  rounded: {
    color: "#fff",
    backgroundColor: "#757de8",
  },
  form: {
    padding: theme.spacing(2),
    width: "100%",
    minHeight: 250,
    maxHeight: 685,
  },
  button: {
    width: "80%",
  },
  assignmentDetailsHeaderContainer: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    // width: "100%",
  },
  studentsListContainer: {
    minHeight: 250,
    maxHeight: 685,
    width: "100%",
    overflow: "auto",
    marginTop: "10",
  },
}));

function generate(element) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const AssignmentScreen = () => {
  const uploadStudentFile = (e) => {
    let fileName = e.target.files[0].name;
    console.log(fileName);
  };

  const uploadAssignmentFile = (e) => {
    let fileLength = e.target.files.length;
    for (let i = 0; i < fileLength; i++) {
      console.log(e.target.files[i].name);
    }
  };

  const [submitted, setSubmitted] = React.useState(false);
  const [type, setType] = React.useState("Faculty");

  const classes = useStyles();
  return (
    <div>
      <Grid item xs={12} sm={12} md={12}>
        <Typography variant="h5" className={classes.title}>
          Assignment 1
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item xs={12} sm={12} md={type === "Faculty" ? 8 : 8}>
          {/* Assignment Box */}
          <Container maxWidth="lg">
            <Grid
              container
              direction="row"
              className={classes.assignmentDetailsHeaderContainer}
              alignItems="center"
            >
              <Grid item xs={12} sm={12} md={9}>
                <Typography variant="h6" align="center">
                  Assignment Details
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <ButtonGroup
                  color="primary"
                  aria-label="contained primary button group"
                  variant="contained"
                >
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                  >
                    Save
                  </Button>
                  <Button
                    variant="contained"
                    component="label"
                    color="primary"
                    startIcon={<AddIcon />}
                    className={classes.button}
                  >
                    Files
                    <input
                      type="file"
                      hidden
                      multiple
                      name="assignment_files"
                      onChange={(e) => uploadAssignmentFile(e)}
                    />
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
              <Paper
                elevation={3}
                className={classes.folderAssignmentContainer}
              >
                <div className={classes.demo}>
                  <Container maxWidth="lg">
                    <TextField
                      disabled
                      defaultValue={loremIpsumData}
                      multiline
                      minRows={Infinity}
                      maxRows={20}
                      fullWidth
                    />
                  </Container>
                  <Divider />
                  <List>{generate(<CustomListComponent type="File" />)}</List>
                </div>
              </Paper>
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={12} sm={12} md={type === "Faculty" ? 2 : 4}>
          {/* Submission Box */}
          <Container maxWidth="lg">
            <Typography
              variant="h6"
              className={classes.assignmentDetailsHeaderContainer}
            >
              {type === "Student" ? "Your Submission" : "Students List"}
            </Typography>
            <Grid item xs={12} sm={12} md={12}>
              {submitted && type === "Student" ? (
                <Paper
                  className={classes.folderAssignmentContainer}
                  elevation={3}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    container
                    direction="column"
                    justifyContent="space-evenly"
                    alignItems="center"
                    className={classes.form}
                  >
                    <Typography variant="h6">Status: Pending</Typography>
                    <Button
                      variant="contained"
                      component="label"
                      color="primary"
                      className={classes.button}
                    >
                      Add Submission
                      <input
                        type="file"
                        hidden
                        name="student_file"
                        onChange={(e) => uploadStudentFile(e)}
                      />
                    </Button>
                    <Typography>202012056-Lab4.zip</Typography>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      Confirm
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      Reset
                    </Button>
                  </Grid>
                </Paper>
              ) : type === "Student" ? (
                <Paper
                  className={classes.folderAssignmentContainer}
                  elevation={3}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    container
                    direction="column"
                    justifyContent="space-evenly"
                    alignItems="flex-start"
                    className={classes.form}
                  >
                    <Typography variant="h6">Status: Submitted</Typography>
                    <Divider style={{ width: "100%" }} />
                    <Typography variant="h6" align="center">
                      File Name: 202012056-Lab4.zip
                    </Typography>
                    <Typography variant="h6" align="center">
                      Due Date: 6th Sept'21 11:59PM
                    </Typography>
                    <Typography variant="h6" align="center">
                      Submission Date: 5th Sept'21 6:00PM
                    </Typography>
                  </Grid>
                </Paper>
              ) : (
                <Paper className={classes.studentsListContainer} elevation={3}>
                  <Container>
                    <Typography variant="h6" align="left">
                      Submitted
                    </Typography>
                    <List>
                      {generate(
                        <CustomListComponent
                          type="Student"
                          assignmentDone="true"
                        />
                      )}
                    </List>
                    <Divider style={{ width: "100%" }} />
                    <Typography variant="h6" align="left">
                      Left
                    </Typography>
                    <List>
                      {generate(
                        <CustomListComponent
                          type="Student"
                          assignmentDone="false"
                        />
                      )}
                    </List>
                  </Container>
                </Paper>
              )}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default AssignmentScreen;
