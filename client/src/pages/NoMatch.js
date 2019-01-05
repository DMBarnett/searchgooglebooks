import React from "react";
import {Jumbotron} from "reactstrap";

function NoMatch(){
  return(
    <Jumbotron container spacing="40">
      Whoops, looks like theres nothing here! Click <span><a href="/">Here</a></span> to get back to your regularily scheduled webpage!
    </Jumbotron>
  )
}

export default NoMatch;