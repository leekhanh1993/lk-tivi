import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar/NavBar'
import {
  TextField,
  Paper,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'

const styles = ({ spacing: { unit } }) => ({
  root: {
    margin: unit,
    padding: unit * 3,
    maxWidth: 400
  },
  form: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-evenly'
  }
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      excercises: [
        { id: 1, title: 'Bench Press' },
        { id: 2, title: 'Deadlift' },
        { id: 3, title: 'Squats' }
      ]
    }
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleCreate(e) {
    e.preventDefault()
    var newExcercies = this.state.excercises.concat({ id: Date.now(), title: this.state.title })
    if (this.state.title) {
      var newState = {
        excercises: newExcercies,
        title: ''
      }
    }
    this.setState(newState)
  }
  handleDelete(id) {
    this.setState({
      excercises: this.state.excercises.filter(ex => ex.id !== id)
    })
  }
  render() {
    const { classes } = this.props
    var { title, excercises } = this.state
    var listExcercises = excercises.map((ex, index) =>
      <ListItem key={index}>
        <ListItemText primary={ex.title} />
        <ListItemSecondaryAction>
          <IconButton
            color='primary'
            onClick={() => this.handleDelete(ex.id)}
          >
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
    return (
      <div>
        <Paper className={classes.root}>
          <Typography
            variant="display1"
            align="center"
            gutterBottom
          >Excercise</Typography>
          <form className={classes.form} onSubmit={this.handleCreate.bind(this)}>
            <TextField
              name="title"
              label='Excercise'
              value={this.state.title}
              onChange={this.handleChange.bind(this)}
              margin="normal"
            />
            <br />
            <Button
              type='submit'
              color='primary'
              variant='raised'
            >
              Create
            </Button>
          </form>
          <List>
            {listExcercises}
          </List>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
