import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Divider,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LibraryBooksSharpIcon from "@material-ui/icons/LibraryBooksSharp";
import AssignmentTurnedInSharpIcon from "@material-ui/icons/AssignmentTurnedInSharp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 20,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 280,
    padding: theme.spacing(3),
    marginTop: theme.spacing(10),
  },
}));

const CustomAppBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const openProfile = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = React.useState(false);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <SwipeableDrawer
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => {}}
          >
            <div className={classes.list}>
              <List>
                <ListItem button onClick={() => {}}>
                  <ListItemIcon>
                    <LibraryBooksSharpIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Classrooms"} />
                </ListItem>
                <Divider />
                <ListItem button onClick={() => {}}>
                  <ListItemIcon>
                    <AssignmentTurnedInSharpIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Assignment Submissions"} />
                </ListItem>
                <Divider />
                <ListItem button onClick={() => {}}>
                  <ListItemText primary={"Add Classroom"} />
                </ListItem>
                <Divider />
                <ListItem button onClick={() => {}}>
                  <ListItemText primary={"Calendar"} />
                </ListItem>
              </List>
            </div>
          </SwipeableDrawer>

          <Typography variant="h6" className={classes.title}>
            BlueCube
          </Typography>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={openProfile}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default CustomAppBar;
