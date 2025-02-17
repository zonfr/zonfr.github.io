const langs = {
  ENGLISH: 0,
  FRENCH: 1
}
let lang_select = langs.FRENCH;
let messages = [];
let messageTyped = "";

function toggleLanguage() {
  lang_select = (lang_select+1) % Object.keys(langs).length;
  console.log(Object.keys(langs).length);
  switchLanguage(lang_select);
}

function switchLanguage(lang) {
  let stylesheetUrl;
  switch (lang) {
    case langs.ENGLISH:
      stylesheetUrl = 'css/en.css';
      break;
    case langs.FRENCH:
      stylesheetUrl = 'css/fr.css';
      break;
    default:
      stylesheetUrl = 'css/fr.css';
  }
   document.getElementById('languageStylesheet').setAttribute('href', stylesheetUrl);
  }

function loadPage(){
  switchLanguage(langs.FRENCH);

  setTimeout(function(){
    addMessage(false, "Hey welcome to my site", langs.ENGLISH);
    addMessage(false, "Hey bienvenue sur mon site", langs.FRENCH);
  }, 1000);
  setTimeout(function(){
    addMessage(false, "I'm a french game developer", langs.ENGLISH);
    addMessage(false, "Je suis développeur de jeux vidéos", langs.FRENCH);
  }, 2500);
  setTimeout(function(){
    addMessage(false, "↓  Scroll down to explore the things I've made  ↓", langs.ENGLISH);
    addMessage(false, "↓  Scroller vers le bas pour voir mes productions  ↓", langs.FRENCH);
  }, 4000);
  setTimeout(function(){
    addMessage(false, "Type 'help' to see some commands", langs.ENGLISH);
    addMessage(false, "Taper 'aled' pour consulter les commandes", langs.FRENCH);
  }, 16000);

  document.addEventListener('keydown', function(evt) {
    if (evt.code == "Backspace"){
      eraseText();
      return
    }
    if (evt.code == "Space"){
      evt.preventDefault();
    }
    if (evt.code == "ShiftLeft" || evt.code == "ShiftRight" || evt.code == "ControlLeft" || evt.code == "ControlRight" || evt.code == "PageDown" || evt.code == "PageUp" || evt.code == "End" || evt.code == "Escape" || evt.code == "F1" || evt.code == "F2" || evt.code == "F3" || evt.code == "F4" || evt.code == "F5" || evt.code == "F6" || evt.code == "F7" || evt.code == "F8" || evt.code == "F9" || evt.code == "F10" || evt.code == "F11" || evt.code == "F12" || evt.code == "Tab" || evt.code == "AltLeft" || evt.code == "Delete" || evt.code == "AltRight" || evt.code == "CapsLock" || evt.code == "ArrowUp" || evt.code == "ArrowDown" || evt.code == "ArrowRight" || evt.code == "ArrowLeft"){
      return;
    }

    if (evt.code == "Enter" || evt.code == "NumpadEnter"){
      
      //Clear Command
      if (messageTyped == "clear" || messageTyped == "clr" || messageTyped == "effacer"){
        messages = [];
        document.getElementById('message-box').innerHTML = "";
        document.getElementById('input-box').innerHTML = "";
        messageTyped = "";
        const element = document.querySelector('#cmd-blink-bar');
        element.style.visibility = "visible";
        return;
      }
      
      //CV Command
      if (messageTyped == "cv"){
        setTimeout(function(){
          addMessage(false, "You can download my CV <a href='src/docs/CV_Info_2025_EN.pdf' download='CV_Jonas_Amrouche_Zonfr_FRENCH'><u>here</u></a>", langs.ENGLISH);
          addMessage(false, "Vous pouvez telecharger mon CV juste <a href='src/docs/CV_Info_2025_FR.pdf' download='CV_Jonas_Amrouche_Zonfr_ENGLISH'><u>ici</u></a>", langs.FRENCH);
        }, 500);
      }

      //help Command
      if (messageTyped == "help" || messageTyped == "aled"){
        setTimeout(function(){
          addMessage(false, "cv, help, clear", langs.ENGLISH);
          addMessage(false, "cv, aled, effacer", langs.FRENCH);
        }, 500);
      }

      //heuuu ouais nan mais c'est parce que
      if (messageTyped == "fils de pute"){
        setTimeout(function(){
          addMessage(false, "heeeey dowcemen ley nom d'owaseau !", langs.ENGLISH);
          addMessage(false, "hééé, doucement les noms d'oiseau !", langs.FRENCH);
        }, 500);
      }

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
  element.style.visibility = "hidden";
  document.getElementById('input-box').innerHTML = messageTyped + "_";
}

function eraseText(){
  messageTyped = messageTyped.substring(0, messageTyped.length-1);
  const element = document.querySelector('#cmd-blink-bar');
  document.getElementById('input-box').innerHTML = messageTyped + "_";
  if (messageTyped == ""){
    document.getElementById('input-box').innerHTML = "";
    const element = document.querySelector('#cmd-blink-bar');
    element.style.visibility = "visible";
  }
}

function addMessage(visitor, mes, lang){
  //Push new message
  if (visitor){
    messages.unshift("<p lang='en' class='cmd-msg'> Visitor : " + mes + "</p>");
    messages.unshift("<p lang='fr' class='cmd-msg'> Visiteur : " + mes + "</p>");
  }else{
    const lang_key = lang == langs.ENGLISH ? 'en' : 'fr';
    messages.unshift("<p lang='" + lang_key + "' class='cmd-msg'> Zonfr : " + mes + "</p>");
  }

  //Clear Message out of bounds
  if (messages.length > 16){
    messages.pop();
    messages.pop();
  }

  //Displays Infos
  document.getElementById('message-box').innerHTML = "";
  for (let i = 0; i < messages.length; i++){
    document.getElementById('message-box').innerHTML += messages[i];
  }
  
}