console.log("Hello Console!");


// let's try injecting bootstrap
document.write(`
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
`)

// jaja injecting stuff like this is bad bad bad but this is just a POC
document.write(`
  <div class="container" style='margin-top: 20px'>
    <div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">Click my button!</p>
  <hr class="my-4">
  <p>Clicked <span id='times'>0 times</span></p>
  <a id="meow" class="btn btn-primary btn-lg" href="#" role="button">Click me!</a>
</div>
  </div>
  <script>
    let clicky = 0;
    document.getElementById("meow").addEventListener("click", function(){
      clicky += 1;
      document.getElementById("times").innerHTML = clicky + (clicky > 1 ? " times" : " time");
    });

  </script>
`);
