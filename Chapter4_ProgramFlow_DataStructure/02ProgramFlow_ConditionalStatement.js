let sellStock = function(stockPrice, sellPrice){
    if(stockPrice >= sellPrice){
        return true;
    }else{
        return false;
    }
}

var weather = function(temperature){
    console.log("The temperature outside is", temperature, "degrees farenheight.");
    
    if(temperature <= 30) {
      console.log("It's freezing outside! It'll be best to bundle up.");
    } else if(temperature <= 55) {
      console.log("It's getting cold outside. Better wear a jacket!");
    } else if (temperature <= 75){
      console.log("It's pleasant outside!");  
    } else {
      console.log("It's getting hot outside!");
    }
  }
  
  
  weather(20);
  weather(40);
  weather(60);
  weather(90);