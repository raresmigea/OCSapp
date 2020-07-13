import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    console.log('data: ', data);

    return <div>This is Table component.</div>;
  }
}

export default Table;
