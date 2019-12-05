function adjust_line(){
  var line_height_education = $('#education .left').height();
  if ($(window).width() < 600) { $('#education .line').css('height', line_height_education+25); }
  else { $('#education .line').css('height', line_height_education+25);}
  
  var line_height_experience = $('#experience .left').height();
  if ($(window).width() < 600) { $('#experience .line').css('height', line_height_experience+25); }
  else { $('#experience .line').css('height', line_height_experience+25);}
}
$(document).ready(function(){adjust_line()});
$(window).on('resize', function(){adjust_line()});