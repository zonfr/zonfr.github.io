// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

let lang_select = true;
const messages = [];
let messageTyped = "";

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function toggleLanguage() {
  lang_select = !lang_select;
  if (lang_select){
    switchLanguage("en");
  }else{
    switchLanguage("fr");
  }
}

function switchLanguage(lang) {
  let stylesheetUrl;
  switch (lang) {
    case 'en':
      stylesheetUrl = 'css/en.css';
      break;
    case 'fr':
      stylesheetUrl = 'css/fr.css';
      break;
    default:
      stylesheetUrl = 'css/en.css';
  }
   document.getElementById('languageStylesheet').setAttribute('href', stylesheetUrl);
  }

function loadPage(){
  switchLanguage('en');

  setTimeout(function(){
    addMessage(false, "Hey welcome to my site");
  }, 1000);
  setTimeout(function(){
    addMessage(false, "I'm a french game developer");
  }, 3000);
  setTimeout(function(){
    addMessage(false, "Scroll down to explore the things I've made :");
  }, 6000);

  document.addEventListener('keydown', function(evt) {
    if (evt.code == "Backspace"){
      eraseText();
      return
    }
    if (evt.code == "Space"){
      evt.preventDefault();
      // topFunction();
    }

    if (evt.code == "Enter" || evt.code == "NumpadEnter"){
      addMessage(true, messageTyped);
      messageTyped = "";
      document.getElementById('input-box').innerHTML = "";
      const element = document.querySelector('#cmd-blink-bar');
      element.style.visibility = "visible";
    }else{
      typeText(evt.key);
    }
    }, false);
}

function typeText(chr){
  if (messageTyped.length > 40){
    return
  }
  messageTyped += chr;
  const element = document.querySelector('#cmd-blink-bar');
  // element.style.marginLeft = (-340 + messageTyped.length * 4.98).toString() + 'px';
  element.style.visibility = "hidden";
  document.getElementById('input-box').innerHTML = messageTyped + "_";
}
function eraseText(){
  messageTyped = messageTyped.substring(0, messageTyped.length-1);
  const element = document.querySelector('#cmd-blink-bar');
  // element.style.marginLeft = (-340 + messageTyped.length * 4.98).toString() + 'px';
  document.getElementById('input-box').innerHTML = messageTyped + "_";
  if (messageTyped == ""){
    document.getElementById('input-box').innerHTML = "";
    const element = document.querySelector('#cmd-blink-bar');
    element.style.visibility = "visible";
  }
}

function addMessage(visitor, mes){
  //Push new message
  if (visitor){
    messages.unshift("<p lang='en' class='cmd-msg'> Visitor : " + mes + "</p>");
  }else{
    messages.unshift("<p lang='en' class='cmd-msg'> Zonfr : " + mes + "</p>");
  }

  //Clear Message out of bounds
  if (messages.length > 8){
    messages.pop();
  }
  
  //Clear Command
  if (mes == "clear" || mes == "clr"){
    for (let i = 0; i < messages.length; i++){
      messages.pop();
    }
    document.getElementById('message-box').innerHTML = "";
    return;
  }

  //Displays Infos
  document.getElementById('message-box').innerHTML = "";
  for (let i = 0; i < messages.length; i++){
    document.getElementById('message-box').innerHTML += messages[i];
  }
  
}