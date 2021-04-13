e = $('.random')
button = $('.download');
button.attr('disabled','disabled');
a=1024;
for (i = 0; i < a; i++) {
  randomcolor = '#' + Math.floor(Math.random() * 16777215).toString(16)
  // console.log((i + 1) + '. renk ' + randomcolor);
  e.append('<div style="background-color: ' + randomcolor + ';">&nbsp;</div>');
  if(i == (a-1)) {
    button.removeAttr('disabled');
    console.log('bitti');
  }
}
