import React from 'react';
import Select from './customSelect';
import * as Constant from './Constant';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [],
      fromCountry: '',
      toCountry: '',
      baseValue: '',
      exchangeValue: 0,
      tillDate: ''
    };
  }

  callApi = async url => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      return console.log(error);
    }
  };

  componentDidMount = async () => {
    const countryObj = await JSON.parse(Constant.COUNTRYANDCODE);
    this.setState({
      country: Object.entries(countryObj)
    });
  };

  setCountry = (countryFromOrTo, event) => {
    if (countryFromOrTo === 'from') {
      this.setState({ fromCountry: event.target.value });
    } else if (countryFromOrTo === 'to') {
      this.setState({ toCountry: event.target.value });
    }
  };

  getExchangeValue = async () => {
    let url =
      Constant.MONEYEXCHANGEAPI +
      '?base=' +
      this.state.fromCountry +
      '&symbols=' +
      this.state.toCountry;
    let exchangeRate = await this.callApi(url);
    let exchangeValue =
      this.state.baseValue * exchangeRate.rates[this.state.toCountry];
    this.setState({
      exchangeValue: exchangeValue,
      tillDate: exchangeRate.date
    });
  };

  handleBaseValueChange = event => {
    this.setState({ baseValue: event.target.value });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.state.fromCountry &&
      this.state.toCountry &&
      this.state.baseValue &&
      (prevState.fromCountry !== this.state.fromCountry ||
        prevState.toCountry !== this.state.toCountry ||
        prevState.baseValue !== this.state.baseValue)
    ) {
      this.getExchangeValue();
    }
  };

  render() {
    return (
      <div className='container'>
        <h2>Currency converter</h2>
        <div className='bodypadding'>
          <h5>From:</h5>
          <input
            className='spaceinline'
            type='text'
            value={this.state.baseValue}
            onChange={this.handleBaseValueChange}
          />
          <Select
            class='R9zNe'
            country={this.state.country}
            onChange={event => this.setCountry('from', event)}
          />
          <br /> <br />
          <h5>To:</h5>
          <input
            className='spaceinline'
            type='text'
            value={this.state.exchangeValue}
            readOnly
          />
          <Select
            country={this.state.country}
            onChange={event => this.setCountry('to', event)}
          />
          {this.state.tillDate && (
            <p>Last updated date: {this.state.tillDate}</p>
          )}
        </div>
      </div>
    );
  }
}
