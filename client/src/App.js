import React from 'react';
import './App.css';
import Table from './components/Table';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { apiResponse: [] };
  }

  callAPI() {
    fetch('http://localhost:9000/testAPI')
      .then((res) => res.json())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Table data={this.state.apiResponse} />
        </header>
      </div>
    );
  }
}
export default App;
