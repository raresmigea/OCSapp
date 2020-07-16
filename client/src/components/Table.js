import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { games } from '../resources/Game';
import './Table.css';

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  renderPlayer = (player, index) => {
    return (
      <tr key={index}>
        <td>{player.game_id}</td>
        <td>{player.city}</td>
        <td>{player.year}</td>
        <td>{player.athlete_id}</td>
      </tr>
    );
  };

  renderGame = (game, index) => {
    return (
      // <tr >
      <th key={index}>
        {game.city} {game.year}
      </th>
      // </tr>
    );
  };

  render() {
    const { data } = this.props;
    console.log('PPPPPPP: ', data);
    console.log('typeof data: ', typeof data);
    console.log('primU: ', data[0]);
    const goodData = data;
    const result = goodData.reduce(
      (acc, val) => ({
        ...acc,
        [val.game_id]: acc[val.game_id]
          ? [...acc[val.game_id], val.athlete_id]
          : [val.athlete_id],
      }),
      {}
    );

    console.log('result: ', result);

    return (
      <div className='table-container'>
        <ReactBootStrap.Table striped bordered hover size='sm'>
          <thead>
            <tr>{games.map(this.renderGame)}</tr>
          </thead>
          <tbody>{goodData.map(this.renderPlayer)}</tbody>
        </ReactBootStrap.Table>
      </div>
    );
  }
}

export default Table;
