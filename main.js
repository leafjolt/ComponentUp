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
    var search = document.getElementById('searching');
    search.value = "";
    var input, filter, ul, li, a, i;
    input = document.getElementById('searching');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
