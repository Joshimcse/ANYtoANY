import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Converter from '../components/converter';

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        first: '',
        second: '',
      },
      box: {
        unitOptions: [
          'Area',
          'Data Transfer Rate',
          'Digital Storage',
          'Temeraturennnnoiiii                             ',
        ],
        scaleOptions: ['Celsius', 'Fahrenheit', 'Kelvin'],
        selectedUnit: '',
        firstScale: '',
        secondScale: '',
      },
    };
  }

  inputHandler = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    console.log(this.state);

    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Unit Conversion App</title>
        </Helmet>
        <Layout>
          <Converter data={this.state.data} handlers={this.inputHandler} />
        </Layout>
      </>
    );
  }
}
