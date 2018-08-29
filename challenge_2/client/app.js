$(document).ready(function() {
  let postData = (data) => {
        return fetch("http://localhost:3000/", {
          method: "POST",
          // mode: "cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: data
        })
        .then(response => response.json());
      };

  $(".submitbtn").on('click', function() {
    let jsonData = $("input[type=text][name=jsondata]").val();
    postData(jsonData).then(result=> {
        $(".result-container").append(`<h2 style="color: #FF6B6B; font-family: arial">CSV Report</h2>`);
        $(".result-container").append(result);
      })
    $("input[type=text][name=jsondata]").val("")
  })

  $("input[type=file][name=jsonfile]").on('change', function() {
    let file = this.files[0];
    let fileReader = new FileReader;
    fileReader.onload = () => {
      postData(fileReader.result).then(result=> {
        $(".result-container").append(`<h2 style="color: #FF6B6B; font-family: arial">CSV Report - ${file.name} </h2>`);
        $(".result-container").append(result);
      })
    $("input[type=text][name=jsondata]").val("")
    }
    fileReader.readAsText(file);
    $("input[type=file][name=jsonfile]").val("")
  })
})