var nasaApiKey = "7mVWGGa0FlinedHmeP4aeFdRrHHmb1aZFEGdsixi";

function sendApiRequest(){
  //var input = document.getElementById("input").value;

  //if (input === ""){return;}
  // console.log(input);
  // var userInput = "";
  var newChild = document.createElement("div");
  //newChild.innerText = input;
  document.body.appendChild(newChild);

  var nasaApiUrl = `https://api.nasa.gov/planetary/apod?api_key=7mVWGGa0FlinedHmeP4aeFdRrHHmb1aZFEGdsixi`;
  // console.log(giphyApiUrl);

  fetch(nasaApiUrl)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      var img = document.createElement("img");
      console.log(json)
      img.src = json["url"];
      document.body.appendChild(img);
    console.log("The Veins of Heaven")
    })
}

sendApiRequest()
