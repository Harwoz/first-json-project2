let name = document.getElementById('name');
let eyeColor = document.getElementById('eyecolor');
let height = document.getElementById('height');
let button = document.querySelector('button');


button.addEventListener('click', function(e){
   e.preventDefault();

       name.innerText = 'Loading...';
       eyeColor.innerText = 'Loading...';
       height.innerText = 'Loading...'; 
   var RandomNumber = Math.ceil(Math.random() * 83);
  fetch(`https://swapi.dev/api/people/${RandomNumber}`)
     .then(response => response.json())
     .then( character => {
       name.innerText = character['name'];
       eyeColor.innerText = character['eye color'];
       height.innerText = character['height'];  
     } )
})