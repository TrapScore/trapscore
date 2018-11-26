import React, { Component } from 'react';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';

import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListSubheader,
  TextField,
  IconButton,
  Divider,
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';

import { toast } from 'react-toastify';

import ViewEditShooter from '../ViewEditShooter/ViewEditShooter';

const styles = theme => ({
  roster: {
    width: '30vw',
    minWidth: 100,
    height: '83vh',
    overflowY: 'auto',
    marginLeft: '10vw',
    marginTop: '5vh',
    borderStyle: 'solid',
    padding: '20px',
    fontFamily: 'Roboto, sans-serif',
  },

  scrollable: {
    overflowY: 'auto',
  },

  searchField: {
    height: '5vh',
    fontFamily: 'Roboto, sans-serif',
  },

  header: {
    marginLeft: '22px',
  },
});

class CompetitionRoster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shooters: [],
      selectedShooter: {},
      input: '',
    };
  }
  //GET all shooters associated with the current competition
  getShooters() {
    axios({
      method: 'GET',
      url: '/api/competition/shooter',
    }).then(response => {
      let shooters;

      if (response.data) {
        shooters = response.data;
      } else {
        shooters = [];
      }
      this.setState({
        shooters: shooters,
        selectedShooter: {},
      });
    });
  }

  //GET an individual shooters information
  editShooter = id => {
    axios({
      method: 'GET',
      url: `/api/competition/shooter/${id}`,
    }).then(response => {
      this.setState({
        ...this.state,
        selectedShooter: response.data[0],
      });
    });
  };

  updateUser = (id, data) => {
    axios({
      method: 'PUT',
      url: `/api/competition/shooter/${id}`,
      data: data,
    }).then(response => {
      toast('Changes Saved');
      this.getShooters();
    });
  };

  deleteShooter = id => {
    axios({
      method: 'DELETE',
      url: `/api/competition/shooter/${id}`,
    }).then(response => {
      toast('Shooter Deleted');
      this.getShooters();
    });
  };

  handleChangeFor = propertyName => event => {
    this.setState({
      ...this.state,
      selectedShooter: {
        ...this.state.selectedShooter,
        [propertyName]: event.target.value,
      },
    });
  };

  onFilterChange = event => {
    this.setState({
      input: event.target.value,
    });
  };

  componentDidMount() {
    this.getShooters();
  }

  //Able to filter roster by search field. Select a user and edit their information

  render() {
    const { classes } = this.props;
    const list = this.state.shooters
      .filter(
        shooter =>
          this.state.input === '' ||
          shooter.last_name.toLowerCase().includes(this.state.input) ||
          shooter.first_name.toLowerCase().includes(this.state.input)
      )
      .map((shooter, index) => (
        <ListItem key={index}>
          {shooter.first_name} {shooter.last_name}{' '}
          <ListItemSecondaryAction>
            <IconButton
              onClick={() => {
                this.editShooter(shooter.id);
              }}
            >
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ));

    return (
      <div className={classes.root}>
        <div>
          <ViewEditShooter
            selectedShooter={this.state.selectedShooter}
            updateUser={this.updateUser}
            deleteShooter={this.deleteShooter}
          />
        </div>
        <div className={classes.roster}>
          <div>
            <List className={classes.scrollable}>
              <h2 className={classes.header}>Competition Roster</h2>
              <ListSubheader>
                <TextField
                  className={classes.searchField}
                  placeholder="Search by name"
                  variant="outlined"
                  value={this.state.input}
                  type="text"
                  onChange={this.onFilterChange}
                />
              </ListSubheader>
              {list}
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CompetitionRoster);
