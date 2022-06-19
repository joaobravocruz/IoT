var five = require("johnny-five");
var firebase = require("firebase");

var board = new five.Board();

board.on("ready", function() {
                    var button = new five.Button(2);
                    board.repl.inject({
                    button: button
                  });
                  
var led = new five.Led(13);
  this.repl.inject({
    led: led
});

// configuração do seu repositório FireBase
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
};

firebase.initializeApp(config);

var startCountRef = firebase.database().ref('led').on('value', function(snapshot){
  let status = snapshot.val();

  if (status == 'on'){
    led.on()
    console.log("Led On Remoto");

  }else{
    led.off()
    console.log("Led Off Remoto")
  }
});
});