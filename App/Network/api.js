/* Helper functions for api calls. */
var apiURL = 'https://connect-love.appspot.com';
var commentAPI = apiURL + '/comment/list/';
exports.getCommentUpdateStates = function(){
  fetch(commentAPI)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        data: responseData,
        commentCount: responseData.length,
      })
    })
    .catch((error) => {
      console.warn(error);
    })
    .done();
};
exports.postCommentUpdateStates = function(comment){
  var commentJSON = JSON.stringify(comment);
  fetch(commentAPI,
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: commentJSON,
    })
    .then((response) => response.json())
    .then((responseData) => {
      if(responseData){
        this.setState({
          data: responseData,
          commentCount: responseData.length,
        });
      }
    })
    .catch((error) => {
      console.warn(error);
    })
    .done();
};
