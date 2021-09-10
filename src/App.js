import React from "react";
import Login from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ClassroomScreen from "./screens/ClassroomScreen";
import CustomAppBar from "./components/CustomAppBar";
import CustomFooter from "./components/CustomFooter";
import AddClassroomScreen from "./screens/AddClassroomScreen";
import AssignmentScreen from "./screens/AssignmentScreen";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CustomAppBar />
      {/* <ClassroomScreen /> */}
      {/* <HomeScreen /> */}
      {/* <AddClassroomScreen /> */}
      {/* <CustomFooter /> */}
      <AssignmentScreen />
    </div>
  );
}

export default App;
