var hour;
var messages = [
  "On Monday Ja Morant had 52 points.", 
  "Jerami Grant went for 26 on Tuesday.", 
  "On Wednesday Jrue Holiday had 11 rebounds.", 
  "Moses Moody had 13 on Thursday.", 
  "Happy Friday",
  "On Saturday Lebron had 56 points.",
  "On Sunday Kentucky beat South Carolina for the SEC title."
];

$("#hours").change(function() {
  hour = $("#hours").val();
  console.log(hour);
  $(".message").html(messages[hour]);
})