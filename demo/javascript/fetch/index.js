//Public API from https://github.com/toddmotto/public-apis#animals
//
//fetch('https://dog.ceo/api/breeds/image/random')
//could start the server from FakeServer folder
fetch('http://localhost:4000')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });