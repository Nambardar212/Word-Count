
var textbox = document.getElementById('evaluatedText');
var wordcount = document.getElementById('wordCount');
textbox.addEventListener('input', ()=> {
   var count = 0;
   let txt = textbox.value;
   let split = txt.split(' ');
   for(let i = 0; i < split.length; i++) {
       if(split[i] != '') {
           count++;
       }
   }
   wordcount.innerHTML = count;
})