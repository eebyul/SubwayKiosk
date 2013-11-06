$( document ).ready(function() {
	$('a.menuItem').click(function(e) {
    e.preventDefault();
    console.log($(this).data('attributes').name);
  });
});