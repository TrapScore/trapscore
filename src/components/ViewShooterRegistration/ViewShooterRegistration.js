import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { Button, Card, Checkbox, TextField } from '@material-ui/core/';

import { toast } from 'react-toastify';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

const styles = theme => ({
  registerCard: {
    fontFamily: 'Roboto, sans-serif',
    paddingBottom: '3%',
    paddingTop: '3%',
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
    flexDirection: 'column',
    margin: '0 auto',
    maxWidth: 530,
    border: 0,
    borderRadius: 2,
    marginTop: '2%',
    listStyle: 'none'
    // boxShadow: "0 3px 4px 0 fade(brown, 14%),
    //           0 3px 3px -3px fade(rgb(59, 41, 41), 20%),
    //           0 2px 8px 0 fade(brown, 12%)",
  },

  eventList: {
    listStyle: 'none',
    textAlign: 'left',
    verticalAlign: 'top'

  },

  header: {
    marginTop: '10%'
  }
  
});



class ViewShooterRegistration extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    handicap: '',
    ata_number: '',
    //array of event IDs from checkboxes.
    competition: {
      events: [],
    },
  };

  componentDidMount() {
    this.tryToGetCompetition();
    // axios({
    //   method: "GET",
    //   url: `/api/competition/event`,
    // }).then(response => {
    //   console.log(response);

    //   let eventsList;

    //   if (response.data) {
    //     eventsList = response.data.map(event => ({
    //       id: event.id,
    //       name: event.name,
    //       checked: false,
    //     }));
    //   } else {
    //     eventsList = [];
    //   }
    //   this.setState({ ...this.state, eventsList: eventsList });
    // });
  }

  tryToGetCompetition = () => {
    let toTry = {
      id: this.props.match.params.id,
      hash: this.props.match.params.hash,
    };
    console.log('trying:', toTry);
    axios({
      method: 'GET',
      url: `/api/registration/${toTry.id}&${toTry.hash}`,
    }).then(response => {
      console.log(response.data);
      this.setState({ competition: response.data });
    });
  };

  registerShooter = event => {
    event.preventDefault();
    const body = this.state;
    let toTry = {
      id: this.props.match.params.id,
      hash: this.props.match.params.hash,
    };

    if (this.state.handicap < 16 || this.state.handicap > 27) {
      alert('You must choose a number between 16 and 27');
      return false;
    } 


    if (this.state.phone.includes('-')) {
      alert('Enter a phone number without dashes')
    }

    axios({
      method: 'POST',
      url: `/api/registration/${toTry.id}&${toTry.hash}`,
      data: body,
    })
      .then(response => {
        console.log('Registration successful!', response);
        this.setState({
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          handicap: '',
          ata_number: '',
          //array of event IDs from checkboxes.
          competition: {
            events: [],
          },
        });
        this.tryToGetCompetition();
      })
      .catch(error => {
        console.log('Error submitting registration:', error);
        alert('Please fill out all fields and try again.');
      });
      toast('Shooter Registered')

    // axios({
    //   method: "POST",
    //   url: "/api/competition/shooter",
    //   data: body,
    // }).then(() => {
    //   this.setState({
    //     first_name: "",
    //     last_name: "",
    //     email: "",
    //     phone: Number,
    //     handicap: Number,
    //     ata_number: Number,
    //     //array of event IDs from checkboxes.
    //     eventsList: [],
    //   });
    // });
  };

  handleChangeFor = propertyName => event => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
  };

  handleChangeCheckBox = (event, checked) => {
    //event.target.value is the event ID
    //find the index in this.state.eventsList from the eventID
    let indexOfCheckedItem = this.state.competition.events.findIndex(
      item => item.id === parseInt(event.target.value)
    );

    this.setState({
      ...this.state,
      competition: {
        ...this.state.competition,
        events: [
          ...this.state.competition.events.slice(0, indexOfCheckedItem),
          {
            ...this.state.competition.events[indexOfCheckedItem],
            checked: checked,
          },
          ...this.state.competition.events.slice(indexOfCheckedItem + 1),
        ],
      },
    });

    // this.setState({
    //   ...this.state,
    //   eventsList: [
    //     ...this.state.eventsList.slice(0, indexOfCheckedItem),
    //     {
    //       ...this.state.eventsList[indexOfCheckedItem],
    //       checked: checked,
    //     },
    //     ...this.state.eventsList.slice(indexOfCheckedItem + 1),
    //   ],
    // });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.registerCard}>
          <center>
            <form onSubmit={this.registerShooter}>
              <h1>Shooter Registration</h1>
              <div>
                <TextField
                label="First Name"
                  type="text"
                  name="first_name"
                  value={this.state.first_name}
                  onChange={this.handleChangeFor('first_name')}
                />
              </div>
              <div>
                <TextField
                  label="Last Name"
                  type="text"
                  name="last_name"
                  value={this.state.last_name}
                  onChange={this.handleChangeFor('last_name')}
                />
              </div>
              <div>
                <TextField
                  label="Email"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChangeFor('email')}
                />
              
              </div>
              <div>
                <TextField
                  label="Phone Number"
                  placeholder="1234567890"
                  type="text"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChangeFor('phone')}
                />
              </div>
              <div>
                <TextField
                label="Handicap"
                  type="text"
                  name="handicap"
                  min="16"
                  max="27"
                  value={this.state.handicap}
                  onChange={this.handleChangeFor('handicap')}
                />
              </div>
              <div>
                <TextField
                  label="ATA #"
                  type="text"
                  name="ata_number"
                  value={this.state.ata_number}
                  onChange={this.handleChangeFor('ata_number')}
                />
              </div>
              <div className={classes.header}>
                <h2 className={classes.header}>Available Events</h2>
              </div>
              <div>
                {this.state.competition.events.map(ev => {
                  return (
                    <List className={classes.eventList} key={ev.id}>
                      <ListItem>
                        {ev.name}
                        <ListItemSecondaryAction> 
                        <Checkbox
                          value={ev.id}
                          onChange={this.handleChangeCheckBox}
                        />
                        </ListItemSecondaryAction> 
                      </ListItem>
                    </List>
                  );
                })}
              </div>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  name="submit"
                  value="Register"
                >
                  Register
                </Button>
              </div>
            </form>
          </center>
        </Card>
      </div>
    );
  }
}

ViewShooterRegistration.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewShooterRegistration);
