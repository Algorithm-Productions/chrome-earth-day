$('.dropdown-el').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).toggleClass('expanded');
  $('#'+$(e.target).attr('for')).prop('checked',true);
  region = e.target.innerText;
});
$(document).click(function() {
  $('.dropdown-el').removeClass('expanded');
});