import React from 'react';
import {Typography, Toolbar, AppBar} from '@material-ui/core';

function NavBar() {
  return (
    <div>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            LKTivi
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default NavBar;