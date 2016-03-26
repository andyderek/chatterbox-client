var message = {
  username: 'Mel Brooks',
  text: 'It\'s good to be the king',
  roomname: 'lobby'
};
// YOUR CODE HERE:
var app = {};
app.init = function(para){};
app.send = function(m, data, cb){
  // console.log("message content is ", message);
  // console.log("this is data ", data);
  // console.log("this is cb", cb)
  $.ajax({
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: "POST",
    data: JSON.stringify(message),
    contentType: 'application/JSON',
    success: function(){},
    error: function(){},
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
  // 
  $("<div>" + "username: " + "<a class='username' href='#'>" + message.username + "</a></div>").appendTo("#chats");
};

app.addRoom = function(room){
  $("<div>" + message + "</div>").appendTo("#roomSelect")
};

app.addFriend = function(username){
   $(".username").click(function(){
   console.log("Hi! You clicked this!");
   //  $("<div>" + username + "</div>").appendTo("#friends")
   // ($('#main').find('.username'))
  })
};

