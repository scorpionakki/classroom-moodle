import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DescriptionTwoToneIcon from "@material-ui/icons/DescriptionTwoTone";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  folderAssignmentContainer: {
    minHeight: 250,
    maxHeight: 685,
    width: "100%",
    overflow: "auto",
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
}));

function generate(element) {
  return [0, 1, 2, 3, 4, 5].map((value) =>
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

  const [submitted, setSubmitted] = React.useState(true);

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
        justifyContent="space-evenly"
        alignItems="center"
        spacing={0}
      >
        <Grid item xs={12} sm={12} md={8}>
          {/* Assignment Box */}
          <Container maxWidth="lg">
            <Typography variant="h6">Assignment Details</Typography>
            <Grid item xs={12} md={12}>
              <Paper
                elevation={3}
                className={classes.folderAssignmentContainer}
              >
                <div className={classes.demo}>
                  <Container maxWidth="lg">
                    <TextField
                      disabled
                      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris metus, varius nec dictum nec, fringilla eu odio. Ut vitae sapien felis. Quisque volutpat libero sed nisl placerat elementum. Vivamus mattis fermentum arcu, in ultricies risus ullamcorper sed. Praesent fermentum tellus in tincidunt venenatis. Nunc imperdiet eu quam at blandit. Nam ut volutpat turpis. Maecenas venenatis luctus varius. Curabitur maximus leo non risus tristique, at venenatis dolor tristique. Nulla facilisi. Morbi lacinia feugiat velit. Donec luctus at est eu venenatis. Donec bibendum, dui at auctor imperdiet, erat purus convallis quam, quis finibus elit ligula vitae lorem. Duis velit erat, vulputate id semper ullamcorper, bibendum ut massa. Duis facilisis a dolor at consectetur.

Maecenas scelerisque at dolor ac placerat. Quisque sollicitudin suscipit orci, et mattis tortor elementum quis. Nam vehicula turpis at purus hendrerit, eu ornare nibh maximus. Vivamus fermentum id lorem a tristique. Donec commodo, arcu vitae lacinia aliquet, massa dui mattis justo, in sodales lorem quam eu ante. Cras convallis justo vehicula interdum mollis. Donec pharetra blandit mollis. Integer eget blandit metus. Vivamus tempus mi erat, et ultricies neque commodo tempor. Aenean varius nibh nec nisl placerat, ac sollicitudin diam semper. Vivamus magna purus, pharetra nec enim vitae, venenatis lacinia risus. Cras feugiat lorem id nisl ornare sagittis. Cras accumsan dui scelerisque, molestie nibh ac, aliquam dolor.

Cras aliquet tincidunt urna, non molestie odio ullamcorper vel. Donec semper urna sit amet commodo posuere. In vitae dictum est. Ut commodo efficitur velit, quis egestas risus. Sed maximus ex a ipsum laoreet porttitor. Suspendisse malesuada auctor ligula in gravida. Pellentesque molestie pellentesque est, ut tincidunt enim iaculis sed. Sed eu dui non neque dapibus dignissim eu sed urna. Mauris interdum sodales elementum.

Morbi malesuada dui nec congue suscipit. Ut eget pretium tellus. Ut porttitor risus hendrerit nisl posuere, sed elementum enim interdum. Vestibulum vitae metus sed orci aliquet sodales nec eu ligula. Nunc aliquam metus eget nibh imperdiet tristique. Sed at neque id erat consequat luctus non et felis. Curabitur malesuada sollicitudin nibh, id lobortis metus rutrum sit amet. Nulla ex metus, varius a mattis eu, consequat vitae sem. Duis vehicula libero sagittis, tempor orci id, viverra mauris. Donec sapien ligula, elementum vitae gravida sed, dapibus non lectus.

Vestibulum et ullamcorper lectus. Mauris sed tortor nec lacus tristique facilisis in sit amet erat. Phasellus id commodo orci. Proin efficitur et ipsum quis mattis. Fusce cursus, diam a convallis semper, arcu eros elementum nunc, et euismod orci velit at massa. Mauris quis arcu consequat, commodo lectus id, posuere enim. Ut congue enim tortor, sed congue purus commodo a. Fusce non finibus nunc, et laoreet nisl. Nulla ut ornare diam."
                      multiline
                      minRows={Infinity}
                      maxRows={20}
                      fullWidth
                    />
                  </Container>
                  <Divider />
                  <List>
                    {generate(
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar variant="rounded" className={classes.rounded}>
                            <DescriptionTwoToneIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Single-line item" />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    )}
                  </List>
                </div>
              </Paper>
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          {/* Submission Box */}
          <Container maxWidth="lg">
            <Typography variant="h6">Your Submission</Typography>
            <Grid item xs={12} sm={12} md={12}>
              {submitted ? (
                <Paper className={classes.folderAssignmentContainer}>
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
              ) : (
                <Paper className={classes.folderAssignmentContainer}>
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
                    {/* <Button
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
                    </Button> */}
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
                    {/* <Button
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
                    </Button> */}
                  </Grid>
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
