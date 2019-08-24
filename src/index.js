import React from 'react';
import ReactDOM from 'react-dom';
import CollectBloodPressure from './components/CollectBloodPressure';
import Confirmation from './components/Confirmation';

class App extends React.Component {
  state = { sent: false, error: false };

  onCollectBloodPressureSubmit = (systolic, diastolic) => {
    console.log(`sys: ${systolic}, dia: ${diastolic}`);
    this.setState({ sent: true });
  };
  componentDidMount() {}

  renderComponent() {
    return this.state.sent ? (
      <Confirmation message="Data sent successfully!" />
    ) : (
      <CollectBloodPressure
        onSubmit={this.onCollectBloodPressureSubmit}
        error={this.state.error}
      />
    );
  }

  render() {
    return this.renderComponent();
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
