function submitForm(event) {
    event.preventDefault(); // Prevent form submission to a server
  
    // Get form data
    var formData = new FormData(document.getElementById("myForm"));
  
    // Build the content to display in the new tab
    var content = "<h1>Form Data:</h1>";
  
    for (var pair of formData.entries()) {
      content += "<p><strong>" + pair[0] + ":</strong> " + pair[1] + "</p>";
    }
  
    // Open a new tab
    var newTab = window.open("", "_blank");
  
    // Set the content of the new tab
    newTab.document.write(content);
  }
  