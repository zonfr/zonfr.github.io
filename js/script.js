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

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function toggleLanguage() {
  lang_select = !lang_select
  if (lang_select){
    switchLanguage("en")
  }else{
    switchLanguage("fr")
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