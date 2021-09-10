import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Button, Container } from "@material-ui/core";
import TabsComponent from "../components/TabsComponent";
import ClassesComponent from "../components/ClassesComponent";
import AddIcon from "@material-ui/icons/AddSharp";

const HomeScreen = () => {
  const [toShowTab, setToShowTab] = useState(0);
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        <Grid container>
          <TabsComponent tabToShow={toShowTab} setToShowTab={setToShowTab} />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        justifyContent="center"
        container
        direction="row"
      >
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          color="primary"
          style={{ marginTop: 15 }}
        >
          Classroom
        </Button>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Container maxWidth="lg">
          <ClassesComponent />
        </Container>
      </Grid>
    </Grid>
  );
};

export default HomeScreen;
