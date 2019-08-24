import React from 'react';

export default class CollectBloodPressure extends React.Component {
  state = { systolic: '', diastolic: '' };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.systolic, this.state.diastolic);
  };
  render() {
    return (
      <form
        className={`ui form ${this.props.error ? 'error' : ''}`}
        onSubmit={this.onFormSubmit}
      >
        <div className="field">
          <div className="ui input">
            <input
              type="text"
              placeholder="Systolic"
              value={this.state.systolic}
              onChange={e => {
                this.setState({ systolic: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="field">
          <div className="ui input">
            <input
              type="text"
              placeholder="Diastolic"
              value={this.state.diastolic}
              onChange={e => {
                this.setState({ diastolic: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="ui error message">
          <div className="header">Ugh! Sorry...</div>
          <p>There was an error saving your entry.</p>
        </div>
        <div className="field">
          <input
            className="ui violet basic button"
            type="submit"
            value="Send"
          />
        </div>
      </form>
    );
  }
}
