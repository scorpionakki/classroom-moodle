import React from "react";
import Login from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ClassroomScreen from "./screens/ClassroomScreen";
import CustomAppBar from "./components/CustomAppBar";
import CustomFooter from "./components/CustomFooter";
import AddClassroomScreen from "./screens/AddClassroomScreen";
import AssignmentScreen from "./screens/AssignmentScreen";
import SubmittedAssignments from "./screens/SubmittedAssignments";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <CustomAppBar />
        <Switch>
          <Route path="/classroom" exact component={ClassroomScreen} />
          <Route path="/" exact component={HomeScreen} />
          <Route
            path="/submitted-assignments"
            exact
            component={SubmittedAssignments}
          />
          <Route path="/add-classroom" exact component={AddClassroomScreen} />
          {/* <CustomFooter /> */}
          <Route path="/assignment" exact component={AssignmentScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
