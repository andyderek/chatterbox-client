$(document).ready(function(){
  app.init();
 });

var message = {
  username: 'Mel Brooks',
  text: 'It\'s good to be the king',
  roomname: 'lobby'
};
// YOUR CODE HERE:
var app = {
  server: 'https://api.parse.com/1/classes/chatterbox',
  username: 'anonymous',
  lastMessageId: 0,
  init: function(para){
    //get username
    // app.username = window.location.search.substr(10);
    app.fetch();
    $("#chats").click(app.addFriend);
    $(".submit").click(app.handleSubmit());
  }
};

  app.renderMessage = function(msg){
    for(var i = 0; i < 10; i++){
      $("#chats").append("<div><a href='#' onclick="+app.addFriend(msg[i].username)+">" + msg[i].username + "</a>" + " " + msg[i].text + " </div>");
    }
  }

  app.send = function(m, data, cb){
    $.ajax({
      url: 'https://api.parse.com/1/classes/chatterbox',
      type: "POST",
      data: JSON.stringify(message),
      contentType: 'application/JSON',
      success: function(){
        console.log("Success Rice");
        // change given element to be piece of info of expected message
      },
      error: function(){
        console.log("Oops");
      },
    });
  };
  
  app.fetch = function(){
    $.ajax({
      url: 'https://api.parse.com/1/classes/chatterbox',
      type: "GET",
      contentType: 'application/JSON',
      // displays data in the correct order
      data: {order: '-createdAt'},
      success: function(para1){
        // console.log("good for you", para1)
        // iterate through the results 
          // target and use parts of message
            // send those to the specified area
            // $("#chats").append("<div><a class='username' href='#'>" + para1.results[0].username + "</a>" + " " + para1.results[0].text + " </div>");
        app.renderMessage(para1.results);
      },
      error: function(){
        console.log("you have failed")
      },
    })
  };


  app.clearMessages = function(){
    $("#chats").empty();
  };

  app.addMessage = function(message){
    $("<div> username: <a class='username' href='#'>" + message.username + "</a>" + message.text + "</div>").appendTo("#chats");
  };

  app.addRoom = function(room){
    console.log("hello there handsome")
    $("<div>" + message + "</div>").appendTo("#roomSelect")
  };

  app.addFriend = function(friend){
      console.log("hello")
      $("#friends").append(friend);
    
  };

  app.submit = function(){
    console.log("submission")
  };

  app.handleSubmit = function(sub){
    // sub.preventDefault();
    app.send();
  };