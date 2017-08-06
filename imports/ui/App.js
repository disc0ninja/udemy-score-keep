import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <TitleBar title={this.props.title} subTitle="Created by: Tim Pankan"/>
        <div className="wrapper">
          <PlayerList players={this.props.players}/>
        </div>
        <AddPlayer/>
      </div>
    );
  }
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
}
