import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

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
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan='2'>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </ReactBootStrap.Table>
      </div>
    );
  }
}

export default Table;
