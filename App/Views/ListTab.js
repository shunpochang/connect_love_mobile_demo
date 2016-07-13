'use strict';
/* View for comment listing. */
var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} = ReactNative;

var ListTab = React.createClass({
  _renderRow: function(rowData) {
    var countryText = rowData.text ?
    (
      <Text style={styles.countryText}>
        {rowData.text}
      </Text>
    ) : null;
    return (
      <View key={rowData.id}>
        <View style={styles.rowSeparator}/>
        <View style={styles.rowContainer}>
          <Text style={styles.nameText}>
            {rowData.author}
          </Text>
          {countryText}
          <View style={styles.badgeContainer}>
            <Text style={styles.dateText}>{rowData.ds}</Text>
          </View>
        </View>
      </View>
    )
  },
  render: function() {
    return (
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}> People who had fun </Text>
          </View>
        </View>
        <View style={{height: (Dimensions.get('window').height - 120)}}>
          <ScrollView
            scrollEventThrottle={200}
            style={styles.scrollView}>
            {this.props.data.map((comment) => (this._renderRow(comment)))}
          </ScrollView>
        </View>
      </View>
    );
  }
})

var styles = StyleSheet.create({
  headerContainer: {
    marginTop: 10,
  },
  header: {
    padding: 5,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'steelblue',
  },
  rowSeparator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  rowContainer: {
    padding: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  countryText: {
    fontSize: 15,
    color: '#656565',
  },
  badgeContainer: {
    marginTop: 3,
    maxWidth: 100,
    marginLeft: 10,
    backgroundColor: '#5bc0de',
    // for Android
    borderRadius: 5,
  },
  dateText: {
    color: 'white',
    fontSize: 15,
    textAlign:'center',
    // for iOS.
    borderRadius: 5,
  },
});

module.exports = ListTab;
