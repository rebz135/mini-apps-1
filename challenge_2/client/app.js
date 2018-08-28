$(document).ready(function() {
  $(".submitbtn").on('click', function() {
    let jsonData = $("input[type=text][name=jsondata]").val();
    console.log('submitted data', jsonData);
    $.ajax({
      url: "http://localhost:3000/",
      type: "POST",
      data: "hello", 
      // dataType: "json",
      success: function(result) {
        console.log('data received from server', result);
        $(".result-container").append("<h1>CSV Report</h1>");
        $(".result-container").append(result);

      },
      error: function(data, status, err) {
        console.log(data, status, err)

      }
    })
  })
})