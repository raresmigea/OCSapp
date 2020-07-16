import React from 'react';
import { data } from '../resources/database';

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
        <table>
          <thead>
            <tr>
              {Object.keys(result).map((key, index) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
            {/* <tr>{Object.keys(result)}</tr> */}
          </thead>
          {/* <tbody>{this.getRowsData()}</tbody> */}
        </table>
      </div>
    );
  }
}

export default Table;
