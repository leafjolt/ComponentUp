searchFunction();
function searchFunction() {
var input,filter,temp,tfilter,tmp2,tfilter2,ii,i,li,ul;
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
input = document.getElementById('searching');
filter = input.value.toUpperCase();
for (i = 0; i < li.length; i++) {
      li[i].style.display = "";
}
  filter=" "+filter;
  filter+=" ";
console.log(filter);
console.log('');
  tfilter = filter;
  temp = tfilter.indexOf(' ');
  tmp2 = tfilter.indexOf(' ',temp+1);
  for(ii = 0;ii<20&&temp!=-1;ii++){
    
      if(temp!=-1){
        tfilter2=filter.substring(temp,tmp2);
        tfilter=filter.substring(temp);
      }
if(tmp2==-1)
break;
for (i = 0; i < li.length; i++) {
        if (!(li[i].getAttribute('data-search-tags').toUpperCase().indexOf(tfilter2) > -1)) {
          li[i].style.display = "none";
        }
      }
temp = filter.indexOf(' ',temp+1);
tmp2 = filter.indexOf(' ',temp+1);
    }}
function clearSearch() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('searching');
    input.value = "";
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    
    for (i = 0; i < li.length; i++) {
      li[i].style.display = "";
    }
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
function darkmode() {
    var checky = document.getElementById("myonoffswitch").checked;
    var images = document.getElementsByClassName("uk-card-media-top");
    if(checky==true) {
    document.getElementById("body").style.filter = "invert(98%)";
    for(var ii = 0;ii<images.length;ii++){
    images[ii].style.filter="invert(98%)";
    }
    document.body.style.animation = "1s linear infinite forceYellow";
    } else {
    document.getElementById("body").style.filter = "invert(0%)";
    for(var ii = 0;ii<images.length;ii++){
    images[ii].style.filter="invert(0%)";
    }
    document.body.style.background = "white";
    }
}
