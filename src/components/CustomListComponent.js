import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import DescriptionTwoToneIcon from "@material-ui/icons/DescriptionTwoTone";
import FolderSharedTwoToneIcon from "@material-ui/icons/FolderSharedTwoTone";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import DoneSharpIcon from "@material-ui/icons/DoneSharp";
import ClearSharpIcon from "@material-ui/icons/ClearSharp";
const useStyles = makeStyles((theme) => ({
  roundedFile: {
    color: "#fff",
    backgroundColor: "#ff7961",
  },
  roundedFolder: {
    color: "#fff",
    backgroundColor: "#757de8",
  },
  roundedStudentIdAssignmentDone: {
    color: "#fff",
    backgroundColor: "#757de8",
  },
  roundedStudentIdAssignmentNotDone: {
    color: "#fff",
    backgroundColor: "#ff7961",
  },
}));

const CustomListComponent = (props) => {
  const classes = useStyles();
  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            variant="rounded"
            className={
              props.type === "File"
                ? classes.roundedFile
                : props.type === "Folder"
                ? classes.roundedFolder
                : props.type === "Student" && props.assignmentDone === "true"
                ? classes.roundedStudentIdAssignmentDone
                : props.type === "Student" && props.assignmentDone === "false"
                ? classes.roundedStudentIdAssignmentNotDone
                : ""
            }
          >
            {props.type === "File" ? (
              <DescriptionTwoToneIcon />
            ) : props.type === "Folder" ? (
              <FolderSharedTwoToneIcon />
            ) : props.type === "Student" && props.assignmentDone === "true" ? (
              <DoneSharpIcon />
            ) : props.type === "Student" && props.assignmentDone === "false" ? (
              <ClearSharpIcon />
            ) : (
              <AssignmentIcon />
            )}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Single-line item" />
        {props.type !== "Student" && (
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        )}
      </ListItem>
    </div>
  );
};

export default CustomListComponent;
