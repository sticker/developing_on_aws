$(function(){
  $('.selectpicker').selectpicker();

  function showModalContent(page) {
    var d = new Date();
    var n = d.getTime();

    $("#modal-dynamic").load("/content/" + page + ".html?cb=" + n, function() {
      console.log($("#modal-dynamic").html());
      $("#contentModal").modal('show');
    });
  }

  $(".modalContent").click(function() {
    showModalContent($(this).data("page"));
  });

  // Populate select boxes
  var core_courses = [
    'Intro to Amazon Redshift - 45 mins',
	'Redshift Security - 30 mins',
	'Redshift Operations - 30 mins',
	'Redshift Data Loading - 30 mins',
	'Redshift Table Layout & Schema Design Loading - 45 mins',
	'Design Consideration - 15 mins'
  ];
  
  var advance_courses = [
    'Redshift Performance Tuning - 45 mins',
	'Redshift Advance Analytics - 45 mins',
	'Redshift Data Visualization using AWS Quicksight - 30 mins',
	'Redshift Data Integration with RDBMS - 30 mins'
  ];

  var labs = [
	'Redshift Data Loading Lab - 45 mins',
	'Redshift Table Layout & Schema Design Loading Lab - 60 mins',
	'Redshift Performance Tuning Lab - 60 mins','Redshift Advance Analytics Lab - 60 mins'
  ];

  var misc = [
    'Break - 15 mins',
    'Lunch Break - 60 mins'
  ];

  var $core_optgroup = $('<optgroup label="AMAZON REDSHIFT CORE SUBJECTS">');
  $.each(core_courses, function(val, text) {
    $core_optgroup.append($("<option></option>").attr("value",text).text(text));
  });
  $('#module2').append($core_optgroup);
  
  var $advance_optgroup = $('<optgroup label="AMAZON REDSHIFT ADVANCE SUBJECTS">');
  $.each(advance_courses, function(val, text) {
    $advance_optgroup.append($("<option></option>").attr("value",text).text(text));
  });
  $('#module2').append($advance_optgroup);

  var $hol_optgroup = $('<optgroup label="HANDS-ON LABS">');
  $.each(labs, function(val, text) {
    $hol_optgroup.append($("<option></option>").attr("value",text).text(text));
  });
  $('#module2').append($hol_optgroup);

  var $misc_optgroup = $('<optgroup label="MISCELLANEOUS">');
  $.each(misc, function(val, text) {
    $misc_optgroup.append($("<option></option>").attr("value",text).text(text));
  });
  $('#module2').append($misc_optgroup);

  $('#module2').selectpicker('refresh');

  for (i=3; i<=9; i++) {
    $('#module2').find('optgroup').clone().appendTo('#module' + i)
    $('#module' + i).selectpicker('refresh');
  }

  // Copy to module1
  $('#module2').find('optgroup').clone().appendTo('#module1')
  $('#module1').selectpicker('refresh');

});
