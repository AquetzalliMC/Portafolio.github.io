let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Tengo 19 años y me gustar seguir aprendiendo y experimentar cosas nuevas.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
