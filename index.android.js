'use strict';
/* Android base. */
var React = require('react');
var ReactNative = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ViewPagerAndroid,
  ToolbarAndroid,
} = ReactNative;
var ShareTab = require('./App/Views/ShareTab');
var ListTab = require('./App/Views/ListTab');
var api = require('./App/Network/api');

var ConnectLoveDemo = React.createClass({
  getInitialState: function() {
    return {
      page: 0,
      commentCount: 0,
      data: [
          {
              "id": 0,
              "author": "Loading",
              "text": "Data",
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
  onPageSelected: function(e) {
    this.setState({
      page: e.nativeEvent.position,
      commentCount: 0,
    });
  },
  goPage: function(page) {
    this.viewPager.setPage(page);
    this.setState({
      page: page,
      commentCount: 0,
    });
  },
  goNextPage: function(page) {
    var nextPage = (this.state.page == 0) ? 1: 0;
    this.goPage(nextPage);
  },
  render: function() {
    var badgeCount = (this.state.commentCount > 0) ?
      (' (' + this.state.commentCount + ')') : '';
    // Toolbar text is dependent on what current page is.
    var titleText = (this.state.page == 0) ?
      ('Comments' + badgeCount) : 'Share'
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          actions={[{title: titleText, show: 'always'}]}
          style={styles.toolBar}
          title='Connecting-Love'
          onActionSelected={this.goNextPage} />
        <ViewPagerAndroid
          style={styles.viewPager}
          pageMargin={10}
          onPageSelected={this.onPageSelected}
          ref={viewPager => {this.viewPager = viewPager; }}
          >
          <View>
            <ShareTab onCommentSubmit={this.handleCommentSubmit}/>
          </View>
          <View>
            <ListTab data={this.state.data}/>
          </View>
        </ViewPagerAndroid>
      </View>
    );
  }
})
;
var styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  toolBar: {
    backgroundColor: 'whitesmoke',
    height: 50,
  },
});
AppRegistry.registerComponent('ConnectLoveDemo', () => ConnectLoveDemo);
