function toggle_visibility(id) {
  var e = document.getElementById(id);
  if(e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'block';
}

var flkty = new Flickity('.carousel');
flkty.on( 'settle', function( index ) {
  console.log( 'Flickity settled at ' + (index+1) );
});


