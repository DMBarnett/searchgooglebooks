import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Typography } from "@material-ui/core"

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
}

function Header(){
  return (
    <div>
      <AppBar position="static">
        <Typography varient="h1" color="white">
          Your Google Books Bookshelf
        </Typography>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(Header);