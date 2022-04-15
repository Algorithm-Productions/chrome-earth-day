let regionLabel = 'Choose Country'
switch (lang) {
  case 'de':
    regionLabel = 'Land auswählen';
    $("#choose").text(regionLabel);
    break;
  case 'fr':
    regionLabel = 'Choisissez un pays';
    $("#choose").text(regionLabel);
    break;
  default:
    break;
}

$('.dropdown-el').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).toggleClass('expanded');
  $('.regionSelector').toggleClass('expanded');
  $('#'+$(e.target).attr('for')).prop('checked',true);
  // console.log($('#'+$(e.target).attr('for')).prop('checked',true).selector);
  regionLabel = $('#'+$(e.target).attr('for')).prop('checked',true).selector.slice(1);
  region = document.getElementById(regionLabel).value;
  $("#choose").text(regionLabel.replace('-', " "));
  updateText();
});
$(document).click(function() {
  $('.dropdown-el').removeClass('expanded');
});