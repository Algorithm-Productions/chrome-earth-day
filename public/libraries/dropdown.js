let regionLabel;

$('.dropdown-el').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).toggleClass('expanded');
  $('.regionSelector').toggleClass('expanded');
  $('#'+$(e.target).attr('for')).prop('checked',true);

  regionLabel = $('#'+$(e.target).attr('for')).prop('checked',true).selector.slice(1);
  console.log(regionLabel);
  region = document.getElementById(regionLabel).value;
  document.getElementById('choose2').innerText = regionLabel.replace('-', " ");
  updateText();
});
$(document).click(function() {
  $('.dropdown-el').removeClass('expanded');
});