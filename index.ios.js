'use strict';
/* iOS base. */
var React = require('react');
var ReactNative = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;
var Icon = require('react-native-vector-icons/FontAwesome');
var ShareTab = require('./App/Views/ShareTab');
var ListTab = require('./App/Views/ListTab');
var api = require('./App/Network/api');

var ConnectLoveDemo = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'shareTab',
      commentCount: 0,
      data: [
          {
              "id": 0,
              "author": "Loading",
              "text": "data",
              "ds": "......"
          },
      ],
    };
  },
  // Reuse componentDidMount and handleCommentSubmit.
  componentDidMount: function() {
    api.getCommentUpdateStates.bind(this)();
  },
  handleCommentSubmit: function(comment){
    api.postCommentUpdateStates.bind(this)(comment);
  },
  render: function() {
    var badgeNumber = (this.state.commentCount > 0) ?
      this.state.commentCount : null;
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.topText}>Connecting-Love</Text>
        </View>
        <TabBarIOS>
          <Icon.TabBarItem
            title="Share"
            iconName="comment-o"
            selected={this.state.selectedTab === 'shareTab'}
            onPress={() => {
              this.setState({selectedTab: 'shareTab',});
            }}>
            <ShareTab onCommentSubmit={this.handleCommentSubmit}/>
          </Icon.TabBarItem>
          <Icon.TabBarItem
            title="Comments"
            iconName="th-list"
            badge={badgeNumber}
            selected={this.state.selectedTab === 'listTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'listTab',
                commentCount: 0,
              });
            }}>
            <ListTab data={this.state.data}/>
          </Icon.TabBarItem>
        </TabBarIOS>
      </View>
    );
  }
})
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  topBar: {
    marginTop: 20,
    backgroundColor: 'whitesmoke',
  },
  topText: {
    textAlign: 'center',
    fontSize: 25,
    padding: 5,
  },
});
AppRegistry.registerComponent('ConnectLoveDemo', () => ConnectLoveDemo);
