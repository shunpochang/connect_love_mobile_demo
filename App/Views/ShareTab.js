'use strict';

//import React, { Component } from 'react';
var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = ReactNative;
var t = require('tcomb-form-native');

var Form = t.form.Form;
var Person = t.struct({
  name: t.String,
  country: t.maybe(t.String),
});
var options = {
  fields:{
    name: {
      placeholder: 'Nice to meet you!'
    },
    country: {
      label: 'Country',
      placeholder: 'Where are you from?'
    }
  }
};
var ShareTab = React.createClass({
  handleSubmit: function () {
    var val = this.refs.form.getValue();
    if (val) {
      this.props.onCommentSubmit({
        author: val.name,
        text: val.country,
      });
      this.setState({ value: null });
    }
  },

  render: function() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}> Please share who you are </Text>
            <Text> if you had fun playing with the code </Text>
          </View>
          <Form
            ref="form"
            type={Person}
            options={options}
          />
          <TouchableHighlight style={styles.button} onPress={this.handleSubmit} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
})

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: 'steelblue',
    borderColor: 'steelblue',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 20,
  },
  header: {
    padding: 15,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

module.exports = ShareTab;
