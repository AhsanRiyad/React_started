/*eslint-disable */


import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from 'nav/Drawer'


// eslint-disable-next-line

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {

  const [personsState] = useState({
    persons: [
    { name: 'Max', age: 28 },
    { name: 'Manu', age: 29 },
    { name: 'Stephanie', age: 26 }
    ]
  });

  const [drawer_on_off, set_drawer_on_off] = useState(false);

  const classes = useStyles();

  const handleDrawer = ()=>{
    set_drawer_on_off(true);
  }


  return (
    <div className={classes.root}>
    <Drawer drawer_on_off={ drawer_on_off } set_drawer_on_off={ set_drawer_on_off }  />
    <AppBar position="static">
    <Toolbar>
    <IconButton onClick={ handleDrawer } edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
    News , { personsState.persons[0].name }
    </Typography>
    <Button color="inherit">Login</Button>
    </Toolbar>
    </AppBar>
    </div>
    );
}