import React from 'react';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div>
        <Title headline="Missões" />
        <div data-testid="missions"> </div>
      </div>
    );
  }
}

export default Missions;
