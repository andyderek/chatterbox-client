$(document).ready(function(){


var message = {
  username: 'Mel Brooks',
  text: 'It\'s good to be the king',
  roomname: 'lobby'
};
// YOUR CODE HERE:
$(".username").click(function(){
  console.log("this was run");  
})
var app = {};
app.init = function(para){

  app.send = function(m, data, cb){
    // console.log("message content is ", message);
    // console.log("this is data ", data);
    // console.log("this is cb", cb)
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
      url: undefined,
      type: "GET",
      data: JSON.stringify(message),
      contentType: 'application/JSON',
      success: function(){},
      error: function(){},
    })
  };
  app.clearMessages = function(){
    // use jquery to access everything in the chats id
    $("#chats").empty();
  };
  app.addMessage = function(message){
     // $(".addMessage").click(function(){
     // console.log("Hi! You clicked this!");
      $("<div> username: <a class='username' href='#'>" + message.username + "</a>" + message.text + "</div>").appendTo("#chats");
    // })
  };

  app.addRoom = function(room){
    $("<div>" + message + "</div>").appendTo("#roomSelect")
  };

  app.addFriend = function(username){
      // $("<div>" + "Hi this will be username" + "</div>").html("#friends");
      console.log("hi again")
  };



  };
 }
)