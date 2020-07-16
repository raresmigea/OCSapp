import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

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
      <div>
        <ReactBootStrap.Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>Game id</th>
              <th>City</th>
              <th>Year</th>
              <th>athlete_id</th>
            </tr>
          </thead>
          <tbody>{goodData.map(this.renderPlayer)}</tbody>
        </ReactBootStrap.Table>
      </div>
    );
  }
}

export default Table;
