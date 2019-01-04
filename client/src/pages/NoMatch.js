import React from "react";
import {Paper, Grid} from "@material-ui/core";

function NoMatch(props){
  // const {classes} = props;
  return(
    <Grid container spacing="40">
      <Grid item xs="12">
        <Paper>
          Uhoh, looks like this doesn't exist yet. Why don't you click <a href="/">here</a> and try that again?<span></span>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default NoMatch;