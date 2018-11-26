import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { DragDropContext } from 'react-beautiful-dnd';
import { reorder, move } from '../../modules/dragAndDrop.strategy';

import { Divider, Typography } from '@material-ui/core';

import HeaderMargins from '../HeaderMargins/HeaderMargins';
import DndPage from '../DndPage/DndPage';
import DndLeftSide from '../DndLeftSide/DndLeftSide';
import DndRightSide from '../DndRightSide/DndRightSide';
import DndCard from '../DndCard/DndCard';
import DndEditModal from '../DndEditModal/DndEditModal';
import DndList from '../DndList/DndList';
import DndAddButton from '../DndAddButton/DndAddButton';

import { toast } from 'react-toastify';

class ViewScheduling extends Component {
  state = {
    unassigned: [],
    traps: [
      {
        name: '',
        id: 0,
        schedule: [],
      },
    ],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios({
      method: 'GET',
      url: `/api/competition/scheduling/`,
    })
      .then(response => {
        this.setState({ ...response.data });
        return response;
      })
      .catch(error => {
        alert(
          'Something went wrong getting the scheduling data from the server.'
        );
        console.log(error);
      });
  };

  sendData = () => {
    axios({
      method: 'PUT',
      url: `/api/competition/scheduling/`,
      data: this.state,
    }).then(() => {
      toast('Scheduling saved');
      this.getData();
    });
  };

  getList = id => {
    if (id === 'unassigned') {
      return this.state.unassigned;
    } else {
      return this.state.traps[Number(id)].schedule;
    }
  };

  onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    // dropped on the same table
    if (source.droppableId === destination.droppableId) {
      const newItems = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      if (source.droppableId === 'unassigned') {
        this.setState({
          unassigned: newItems,
        });
      } else {
        this.setState({
          traps: [
            ...this.state.traps.slice(0, Number(source.droppableId)),
            {
              ...this.state.traps[source.droppableId],
              schedule: newItems,
            },
            ...this.state.traps.slice(Number(source.droppableId) + 1),
          ],
        });
      }
    } else {
      // if they are two different lists
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      if (source.droppableId === 'unassigned') {
        this.setState({
          unassigned: result.source,
        });
      } else {
        this.setState({
          traps: [
            ...this.state.traps.slice(0, Number(source.droppableId)),
            {
              ...this.state.traps[source.droppableId],
              schedule: result.source,
            },
            ...this.state.traps.slice(Number(source.droppableId) + 1),
          ],
        });
      }
      if (destination.droppableId === 'unassigned') {
        this.setState({
          unassigned: result.destination,
        });
      } else {
        this.setState({
          traps: [
            ...this.state.traps.slice(0, Number(destination.droppableId)),
            {
              ...this.state.traps[destination.droppableId],
              schedule: result.destination,
            },
            ...this.state.traps.slice(Number(destination.droppableId) + 1),
          ],
        });
      }
    }
    this.sendData();
  };

  addTrap = () => {
    axios({
      method: 'POST',
      url: `/api/competition/trap/new/`,
    }).then(() => {
      this.getData();
    });
    toast('New trap created!');
  };

  editTrap = (trapId, newName) => {
    axios({
      method: 'PUT',
      url: `/api/competition/edit/trap/${trapId}`,
      data: { name: newName },
    }).then(() => {
      this.getData();
    });
    toast('Trap name updated!');
  };

  deleteTrap = trapId => {
    axios({
      method: 'DELETE',
      url: `/api/competition/trap/${trapId}`,
    }).then(() => {
      this.getData();
    });
    toast('Trap deleted.');
  };

  render() {
    return (
      <>
        <DndPage>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <DndLeftSide>
              <HeaderMargins>
                <Typography variant="h4">Unscheduled</Typography>
              </HeaderMargins>
              <Divider />
              <DndList
                subheader="Box number / Squad name"
                box
                droppableId="unassigned"
                data={this.state.unassigned.map(item => {
                  item.mainText = item.name;
                  item.avatar = item.box_number;
                  return item;
                })}
              />
            </DndLeftSide>
            <DndRightSide>
              {this.state.traps.length > 0 &&
                this.state.traps.map((trap, index) => {
                  return (
                    <DndCard
                      key={trap.id}
                      title={trap.name}
                      cornerButton={
                        <DndEditModal
                          id={trap.id}
                          field={trap.name}
                          edit={this.editTrap}
                          delete={this.deleteTrap}
                        />
                      }
                    >
                      <DndList
                        box
                        // disableGutters
                        droppableId={index.toString()}
                        data={trap.schedule.map(item => {
                          item.mainText = item.name;
                          // item.secondaryText = item.box_number;
                          item.avatar = item.box_number;
                          return item;
                        })}
                      />
                    </DndCard>
                  );
                })}
            </DndRightSide>
          </DragDropContext>
          <DndAddButton onClick={this.addTrap} />
        </DndPage>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(ViewScheduling);
