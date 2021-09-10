import {
  Avatar,
  Button,
  ButtonGroup,
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
  Typography,
} from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import FolderSharedTwoToneIcon from "@material-ui/icons/FolderSharedSharp";
import DeleteIcon from "@material-ui/icons/Delete";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BreadcrumbComponent from "../components/BreadcrumbComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  folderAssignmentContainer: {
    maxHeight: 520,
    overflow: "auto",
  },
  rounded: {
    color: "#fff",
    backgroundColor: "#757de8",
  },
}));

function generate(element) {
  return [0, 1, 2, 3, 4, 5].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

function ClassroomScreen() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={5}>
        {/* Classroom Name */}
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h5" className={classes.title}>
            Classroom 1
          </Typography>
        </Grid>

        {/* Breadcrumb */}
        <Grid item xs={12} sm={12} md={12}>
          <BreadcrumbComponent />
        </Grid>

        {/* Folders & Assignments Title */}

        <Grid item xs={12} sm={12} md={9}>
          <Typography variant="h5" align="left">
            Folders & Assignments
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={12} md={3} justifyContent="flex-end">
          <ButtonGroup
            color="primary"
            aria-label="contained primary button group"
            variant="contained"
          >
            <Button startIcon={<AddIcon />}>Folder</Button>
            <Button startIcon={<AddIcon />}>File</Button>
          </ButtonGroup>
        </Grid>

        {/* Folders & Assignments Container */}
        <Grid item xs={12} md={12}>
          <Paper elevation={3} className={classes.folderAssignmentContainer}>
            <div className={classes.demo}>
              <List>
                {generate(
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar variant="rounded" className={classes.rounded}>
                        <FolderSharedTwoToneIcon />
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
              <Divider />
              <List>
                {generate(
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar variant="rounded">
                        <AssignmentIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Single-line item"
                      secondary="Due by: 29th Feb'21"
                    />
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
      </Grid>
    </Container>
  );
}

export default ClassroomScreen;
