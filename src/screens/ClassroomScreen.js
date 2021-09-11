import {
  Button,
  ButtonGroup,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  List,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import BreadcrumbComponent from "../components/BreadcrumbComponent";
import CustomListComponent from "../components/CustomListComponent";

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
  const [open, setOpen] = React.useState(false);

  const uploadFolderFile = (e) => {
    let fileLength = e.target.files.length;
    for (let i = 0; i < fileLength; i++) {
      console.log(e.target.files[i].name);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
            <Button startIcon={<AddIcon />} onClick={handleClickOpen}>
              Folder
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
              maxWidth="xl"
              fullWidth={true}
            >
              <DialogTitle id="form-dialog-title">Add Folder</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please specify the Folder name
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Folder Name"
                  type="text"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                  Add
                </Button>
              </DialogActions>
            </Dialog>
            <Button
              startIcon={<AddIcon />}
              component="label"
              variant="contained"
            >
              File
              <input
                type="file"
                name="folder_file"
                hidden
                multiple
                onChange={(e) => uploadFolderFile(e)}
              />
            </Button>
          </ButtonGroup>
        </Grid>

        {/* Folders & Assignments Container */}
        <Grid item xs={12} md={12}>
          <Paper elevation={3} className={classes.folderAssignmentContainer}>
            <div className={classes.demo}>
              <List>{generate(<CustomListComponent type="Folder" />)}</List>
              <Divider />
              <List>{generate(<CustomListComponent type="Assignment" />)}</List>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ClassroomScreen;
