var request = require ('request')

parkingCall("C", function(val){
    console.log("theval is:"+ val)
    return val
  })

function parkingCall(lotLetter, callback) {

request('http://api.uwaterloo.ca/v2/parking/watpark.json?key=6fc911746c80939867b6c87cc8536aaa', function(error, response, body){
  if(error){
    return(error)
  }

  var data = JSON.parse(body).data;

  console.log("The api call data is: "+data[0].capacity )    
  switch(lotLetter) {
    case 'C':
      callback("lot name: C\ncapacity: " + data[0].capacity + "\ncurrent count: " + data[0].current_count + "\npercentage filled: " + data[0].percent_filled)
      break;
    case 'N':
      callback("lot name: N\ncapacity: " + data[1].capacity + "\ncurrent count: " + data[1].current_count + "\npercentage filled: " + data[1].percent_filled)
      break;
    case 'W':
      callback("lot name: W\ncapacity: " + data[2].capacity + "\ncurrent count: " + data[2].current_count + "\npercentage filled: " + data[2].percent_filled)
      break;
    case 'X':
      callback("lot name: X\ncapacity: " + data[3].capacity + "\ncurrent count: " + data[3].current_count + "\npercentage filled: " + data[3].percent_filled)
     break;
    default:
  }
});

}