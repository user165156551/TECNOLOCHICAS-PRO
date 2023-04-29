let app = document.getElementById('typewriter');
let typewriter = new Typewriter(app,{
loop:true,
delay: 75,
});

typewriter
.pauseFor(2500)
.typeString('"PODEMOS REPLANTEAR LOS OBJETIVOS DE LA EDUCACIÓN".<br>-Dr Seuss-')
.pauseFor(200)
.deleteChars(10)
.start();

